import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DashboardHeader } from "./DashboardHeader";
import { CategoryCard } from "./CategoryCard";
import { AnalyticsPanel } from "./AnalyticsPanel";
import { RevisionView } from "./RevisionView";
import { dsaData } from "@/data/dsaData";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BarChart3, LogOut } from "lucide-react";

export const DSADashboard = () => {
  const [categories, setCategories] = useState(dsaData);
  const [activeTab, setActiveTab] = useState("problems");
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  
  // Convex hooks
  const progressData = useQuery(
    api.progress.getProgress,
    user ? { userId: user._id } : "skip"
  );
  const updateProgress = useMutation(api.progress.updateProgress);

  // Load progress from Convex on mount
  useEffect(() => {
    if (progressData) {
      setCategories(prevCategories =>
        prevCategories.map(category => ({
          ...category,
          problems: category.problems.map(problem => ({
            ...problem,
            completed: progressData.progress[`${category.name}-${problem.id}`] || false
          }))
        }))
      );
    }
  }, [progressData]);

  const handleProblemToggle = async (categoryName: string, problemId: number) => {
    if (!user) return;
    
    const problemKey = `${categoryName}-${problemId}`;
    
    // Optimistically update the UI
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.name === categoryName) {
          return {
            ...category,
            problems: category.problems.map(problem => {
              if (problem.id === problemId) {
                const newCompleted = !problem.completed;
                
                
                // Show toast notification
                toast({
                  title: newCompleted ? "Problem Completed! 🎉" : "Progress Updated",
                  description: newCompleted 
                    ? `Great job completing "${problem.question}"!`
                    : `Marked "${problem.question}" as pending`,
                  duration: 3000,
                });
                

                return { ...problem, completed: newCompleted };
              }
              return problem;
            })
          };
        }
        return category;
      })
    );

    // Update in Convex database
    try {
      const currentCompleted = categories.find(c => c.name === categoryName)?.problems.find(p => p.id === problemId)?.completed || false;
      await updateProgress({ 
        userId: user._id,
        problemKey, 
        completed: !currentCompleted 
      });
    } catch (error) {
      console.error('Error updating progress:', error);
      toast({ title: "Error", description: "Failed to save progress", variant: "destructive" });
    }
  };

  // Calculate totals
  const totalProblems = categories.reduce((sum, cat) => sum + cat.problems.length, 0);
  const completedProblems = categories.reduce((sum, cat) => 
    sum + cat.problems.filter(p => p.completed).length, 0
  );

  const revisionMap = progressData?.revision || {};
  const notesMap = progressData?.notes || {};
  const hasRevisionProblems = Object.values(revisionMap).some(marked => marked);

  return (
    <div className="min-h-screen bg-background">
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">Welcome back!</h1>
            <span className="text-muted-foreground">{user?.email}</span>
          </div>
          <Button
            variant="outline"
            onClick={signOut}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
        
        <DashboardHeader 
          totalProblems={totalProblems}
          completedProblems={completedProblems}
          categories={categories.length}
        />

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="problems" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Problems
            </TabsTrigger>
            <TabsTrigger value="revision" className="gap-2" disabled={!hasRevisionProblems}>
              <BookOpen className="w-4 h-4" />
              Revision ({Object.values(revisionMap).filter(Boolean).length})
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Categories Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Problem Categories</h2>
                  <div className="text-sm text-muted-foreground">
                    Click on categories to expand and track your progress
                  </div>
                </div>
                
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <div
                      key={category.name}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CategoryCard
                        category={category}
                        onProblemToggle={handleProblemToggle}
                        revisionMap={revisionMap}
                        notesMap={notesMap}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytics Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
                  <AnalyticsPanel categories={categories} />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="revision" className="space-y-6">
            <RevisionView />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="sticky top-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
              <AnalyticsPanel categories={categories} />
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border/50">
          <p className="text-muted-foreground">
            DSA Series by Shradha Ma'am • 
            <a 
              href="https://youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-primary hover:underline"
            >
              Watch Complete Series
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DSACategory } from "@/data/dsaData";
import { TrendingUp, Award, Brain, Target } from "lucide-react";

interface AnalyticsPanelProps {
  categories: DSACategory[];
}

export const AnalyticsPanel = ({ categories }: AnalyticsPanelProps) => {
  // Calculate analytics data
  const analytics = categories.map(category => {
    const completed = category.problems.filter(p => p.completed).length;
    const total = category.problems.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    
    // Difficulty breakdown
    const difficulties = category.problems.reduce((acc, problem) => {
      const key = problem.difficulty.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const completedDifficulties = category.problems
      .filter(p => p.completed)
      .reduce((acc, problem) => {
        const key = problem.difficulty.toLowerCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return {
      name: category.name,
      completed,
      total,
      percentage: Math.round(percentage),
      difficulties,
      completedDifficulties
    };
  });

  // Overall stats
  const totalProblems = categories.reduce((sum, cat) => sum + cat.problems.length, 0);
  const totalCompleted = categories.reduce((sum, cat) => 
    sum + cat.problems.filter(p => p.completed).length, 0
  );
  const overallPercentage = totalProblems > 0 ? Math.round((totalCompleted / totalProblems) * 100) : 0;

  // Find best and worst performing categories
  const sortedByPerformance = analytics.sort((a, b) => b.percentage - a.percentage);
  const bestCategory = sortedByPerformance[0];
  const needsWork = sortedByPerformance[sortedByPerformance.length - 1];

  // Difficulty analysis
  const allDifficulties = categories.flatMap(cat => cat.problems);
  const difficultyStats = {
    easy: {
      total: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'easy').length,
      completed: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'easy' && p.completed).length
    },
    medium: {
      total: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'medium').length,
      completed: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'medium' && p.completed).length
    },
    hard: {
      total: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'hard').length,
      completed: allDifficulties.filter(p => p.difficulty.toLowerCase() === 'hard' && p.completed).length
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Insights */}
      <Card className="border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Performance Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">Strongest Area</span>
              </div>
              <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                <p className="font-semibold text-success">{bestCategory?.name}</p>
                <p className="text-sm text-muted-foreground">{bestCategory?.percentage}% completed</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium">Needs Attention</span>
              </div>
              <div className="bg-warning/10 p-3 rounded-lg border border-warning/20">
                <p className="font-semibold text-warning">{needsWork?.name}</p>
                <p className="text-sm text-muted-foreground">{needsWork?.percentage}% completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Breakdown */}
      <Card className="border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <Brain className="w-5 h-5 text-accent" />
            <span>Difficulty Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(difficultyStats).map(([difficulty, stats], index) => {
            const percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
            const color = difficulty === 'easy' ? 'success' : difficulty === 'medium' ? 'warning' : 'destructive';
            
            return (
              <div key={difficulty} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={`
                      ${difficulty === 'easy' ? 'border-success/20 bg-success/10 text-success' : ''}
                      ${difficulty === 'medium' ? 'border-warning/20 bg-warning/10 text-warning' : ''}
                      ${difficulty === 'hard' ? 'border-destructive/20 bg-destructive/10 text-destructive' : ''}
                    `}>
                      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {stats.completed}/{stats.total}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card className="border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <CardHeader>
          <CardTitle className="text-foreground">Category Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analytics.map((category, index) => (
            <div key={category.name} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{category.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {category.completed}/{category.total}
                  </span>
                  <Badge variant={category.percentage === 100 ? "default" : "secondary"}>
                    {category.percentage}%
                  </Badge>
                </div>
              </div>
              <Progress 
                value={category.percentage} 
                className="h-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
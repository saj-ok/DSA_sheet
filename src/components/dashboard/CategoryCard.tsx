import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Play, Check, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { DSACategory, DSAProblem } from "@/data/dsaData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CategoryCardProps {
  category: DSACategory;
  onProblemToggle: (categoryName: string, problemId: number) => void;
}

export const CategoryCard = ({ category, onProblemToggle }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const completedCount = category.problems.filter(p => p.completed).length;
  const totalCount = category.problems.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-success/10 text-success border-success/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'hard': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-warning/10 text-warning border-warning/20';
    }
  };

  const ProblemRow = ({ problem }: { problem: DSAProblem }) => (
    <div className="group flex items-center space-x-4 p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-200 animate-fade-in">
      <Checkbox
        checked={problem.completed}
        onCheckedChange={() => onProblemToggle(category.name, problem.id)}
        className="data-[state=checked]:bg-success data-[state=checked]:border-success"
      />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-3 mb-2">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {problem.question}
          </h4>
          <Badge variant="outline" className={getDifficultyColor(problem.difficulty)}>
            {problem.difficulty}
          </Badge>
        </div>
        
        {problem.companies && (
          <p className="text-sm text-muted-foreground mb-1">
            <strong>Companies:</strong> {problem.companies}
          </p>
        )}
        
        {problem.prerequisites && (
          <p className="text-sm text-muted-foreground">
            <strong>Prerequisites:</strong> {problem.prerequisites}
          </p>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        {problem.solutionLink && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(problem.solutionLink, '_blank')}
            className="hover:bg-primary/10 hover:text-primary"
          >
            <Play className="w-4 h-4 mr-1" />
            Solution
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(problem.link, '_blank')}
          className="hover:bg-accent/10 hover:text-accent"
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Problem
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="w-full animate-scale-in border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {completedCount}/{totalCount}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-primary">{Math.round(completionPercentage)}%</span>
                  </div>
                  <Progress 
                    value={completionPercentage} 
                    className="h-2 bg-muted"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {completedCount > 0 && (
                    <Check className="w-4 h-4 text-success" />
                  )}
                  {completedCount < totalCount && (
                    <Clock className="w-4 h-4 text-warning" />
                  )}
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {category.problems.map((problem, index) => (
                <div
                  key={problem.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProblemRow problem={problem} />
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
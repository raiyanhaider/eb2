import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressOverviewProps {
  totalWords: number;
  wordsWritten: number;
  totalTime: number;
  timeSpent: number;
  totalPages: number;
  pagesCompleted: number;
}

export default function ProgressOverview({
  totalWords,
  wordsWritten,
  totalTime,
  timeSpent,
  totalPages,
  pagesCompleted
}: ProgressOverviewProps) {
  const wordProgress = Math.round((wordsWritten / totalWords) * 100);
  const timeProgress = Math.round((timeSpent / totalTime) * 100);
  const pageProgress = Math.round((pagesCompleted / totalPages) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Current Project Progress</CardTitle>
        <CardDescription>Track your writing milestones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Words</span>
            <span className="text-sm text-muted-foreground">
              {wordsWritten.toLocaleString()} / {totalWords.toLocaleString()}
            </span>
          </div>
          <Progress value={wordProgress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estimated Time</span>
            <span className="text-sm text-muted-foreground">
              {timeSpent} / {totalTime} hours
            </span>
          </div>
          <Progress value={timeProgress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Pages</span>
            <span className="text-sm text-muted-foreground">
              {pagesCompleted} / {totalPages}
            </span>
          </div>
          <Progress value={pageProgress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
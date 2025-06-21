import { Suspense } from "react";
import { notFound } from "next/navigation";
import { 
  BookOpen, 
  Clock, 
  FileText, 
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/dashboard-layout";
import StatsCard from "@/components/dashboard/stats-card";
import ProgressOverview from "@/components/dashboard/progress-overview";
import FeatureCard from "@/components/dashboard/feature-card";
import ProjectCard from "@/components/dashboard/project-card";
import TipCard from "@/components/dashboard/tip-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FEATURES, RECENT_PROJECTS, WRITING_STATS } from "@/lib/constants";

export default function DashboardPage() {
  // Verify required data is available
  if (!FEATURES || !RECENT_PROJECTS || !WRITING_STATS) {
    notFound();
  }

  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's an overview of your writing projects.
              </p>
            </div>
          </div>

          <TipCard />
          
          <div className="grid gap-6 md:grid-cols-3">
            <StatsCard
              title="Total Words"
              value={WRITING_STATS.totalWords.toLocaleString()}
              icon={<FileText className="h-4 w-4 text-primary" />}
              description="This month"
              trend={{ value: 12, positive: true }}
            />
            
            <StatsCard
              title="Available Words"
              value={WRITING_STATS.remainingQuota.toLocaleString()}
              icon={<Zap className="h-4 w-4 text-amber-500" />}
              description="On your current plan"
            />
            
            <StatsCard
              title="Daily Average"
              value={WRITING_STATS.avgWordPerDay.toLocaleString()}
              icon={<Clock className="h-4 w-4 text-emerald-500" />}
              description="Words per day"
              trend={{ value: 8, positive: true }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Projects</CardTitle>
                  <CardDescription>
                    Pick up where you left off
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {RECENT_PROJECTS.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="row-span-2">
              <ProgressOverview 
                totalWords={25000}
                wordsWritten={7500}
                totalTime={40}
                timeSpent={12}
                totalPages={120}
                pagesCompleted={35}
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-4">Featured Tools</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.slice(0, 6).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
          
          {FEATURES.length > 6 && (
            <div className="flex justify-center mt-2">
              <Button variant="outline" className="group">
                View All Features
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          )}
        </div>
      </Suspense>
    </DashboardLayout>
  );
}
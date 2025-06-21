import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Clock, Star } from "lucide-react";

export default function TutorialsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tutorials</h1>
          <p className="text-muted-foreground mt-1">
            Learn how to make the most of Goriber Lekhok
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn the basics of using Goriber Lekhok to create your first ebook.
              </p>
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Master advanced writing and formatting techniques.
              </p>
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-500" />
                Quick Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Short, actionable tips to improve your writing workflow.
              </p>
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
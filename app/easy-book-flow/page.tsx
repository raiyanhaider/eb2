import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { FEATURES } from "@/lib/constants";

export default function EasyBookFlowPage() {
  const feature = FEATURES.find(f => f.id === 'easy-book-flow');
  
  if (!feature) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Feature Not Found</h1>
          <p className="text-muted-foreground">The requested feature is not available.</p>
        </div>
      </DashboardLayout>
    );
  }

  const steps = [
    { name: 'type', title: 'Book Type' },
    { name: 'setup', title: 'Book Setup' },
    { name: 'outline', title: 'Create Outline' }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')}`}>
            <Sparkles className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{feature.name}</h1>
            <p className="text-lg text-muted-foreground">{feature.description}</p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Steps</h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Get Started</h2>
              <p className="text-muted-foreground mb-6">
                Ready to use {feature.name}? Click below to begin.
              </p>
              <Link href="/easy-book-flow/steps/type">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                  Start Book Flow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
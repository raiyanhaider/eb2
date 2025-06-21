import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { getStepContent } from "@/lib/steps";

export async function generateStaticParams() {
  const feature = FEATURES.find(f => f.id === 'outline-master');
  if (!feature) return [];
  
  return feature.steps.map((step) => ({
    step: step
  }));
}

export default function OutlineMasterStepPage({ 
  params 
}: { 
  params: { step: string } 
}) {
  const feature = FEATURES.find(f => f.id === 'outline-master');
  if (!feature) {
    notFound();
  }

  const currentStepIndex = feature.steps.indexOf(params.step);
  if (currentStepIndex === -1) {
    notFound();
  }

  const stepContent = getStepContent(feature.id, currentStepIndex + 1);
  const nextStep = currentStepIndex < feature.steps.length - 1 ? feature.steps[currentStepIndex + 1] : null;
  const prevStep = currentStepIndex > 0 ? feature.steps[currentStepIndex - 1] : null;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{feature.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div 
                className={`h-full ${feature.color}`}
                style={{ width: `${((currentStepIndex + 1) / feature.steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Step {currentStepIndex + 1} of {feature.steps.length}
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              {stepContent.icon && (
                <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')}`}>
                  <stepContent.icon className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold">{stepContent.title}</h2>
                <p className="text-muted-foreground">{stepContent.description}</p>
              </div>
            </div>
            
            <div className="mb-8">
              {stepContent.content}
            </div>

            <div className="flex justify-between">
              {prevStep ? (
                <Link href={`/outline-master/steps/${prevStep}`}>
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Step
                  </Button>
                </Link>
              ) : (
                <Link href="/outline-master">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Feature
                  </Button>
                </Link>
              )}
              {nextStep && (
                <Link href={`/outline-master/steps/${nextStep}`}>
                  <Button>
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
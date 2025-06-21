import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getStepContent } from "@/lib/steps";

export async function generateStaticParams() {
  const params = [];
  for (const feature of FEATURES) {
    const steps = ['upload', 'format', 'generate'];
    if (feature.id === 'instant-book') {
      for (const step of steps) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'chapter-crafter') {
      for (const step of ['topic', 'audience', 'chapters']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'easy-book-flow') {
      for (const step of ['type', 'setup', 'outline']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'story-sculptor') {
      for (const step of ['genre', 'characters', 'plot']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'title-genius') {
      for (const step of ['topic', 'style', 'suggestions']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'outline-master') {
      for (const step of ['template', 'sections', 'details']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'perfect-prose') {
      for (const step of ['content', 'style', 'enhance']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'visual-verse') {
      for (const step of ['scene', 'style', 'generate']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
    if (feature.id === 'niche-book-pro') {
      for (const step of ['niche', 'audience', 'analysis']) {
        params.push({ 
          id: feature.id, 
          step: step
        });
      }
    }
  }
  return params;
}

const getFeatureSteps = (featureId: string) => {
  const stepConfigs = {
    'instant-book': [
      { name: 'upload', title: 'Upload Content', number: 1 },
      { name: 'format', title: 'Choose Format', number: 2 },
      { name: 'generate', title: 'Generate Book', number: 3 }
    ],
    'chapter-crafter': [
      { name: 'topic', title: 'Define Topic', number: 1 },
      { name: 'audience', title: 'Set Audience', number: 2 },
      { name: 'chapters', title: 'Generate Chapters', number: 3 }
    ],
    'easy-book-flow': [
      { name: 'type', title: 'Book Type', number: 1 },
      { name: 'setup', title: 'Book Setup', number: 2 },
      { name: 'outline', title: 'Create Outline', number: 3 }
    ],
    'story-sculptor': [
      { name: 'genre', title: 'Choose Genre', number: 1 },
      { name: 'characters', title: 'Create Characters', number: 2 },
      { name: 'plot', title: 'Design Plot', number: 3 }
    ],
    'title-genius': [
      { name: 'topic', title: 'Main Topic', number: 1 },
      { name: 'style', title: 'Title Style', number: 2 },
      { name: 'suggestions', title: 'Get Suggestions', number: 3 }
    ],
    'outline-master': [
      { name: 'template', title: 'Choose Template', number: 1 },
      { name: 'sections', title: 'Define Sections', number: 2 },
      { name: 'details', title: 'Add Details', number: 3 }
    ],
    'perfect-prose': [
      { name: 'content', title: 'Input Content', number: 1 },
      { name: 'style', title: 'Set Style', number: 2 },
      { name: 'enhance', title: 'Enhance Text', number: 3 }
    ],
    'visual-verse': [
      { name: 'scene', title: 'Scene Input', number: 1 },
      { name: 'style', title: 'Visual Style', number: 2 },
      { name: 'generate', title: 'Generate Visuals', number: 3 }
    ],
    'niche-book-pro': [
      { name: 'niche', title: 'Select Niche', number: 1 },
      { name: 'audience', title: 'Define Audience', number: 2 },
      { name: 'analysis', title: 'Market Analysis', number: 3 }
    ]
  };

  return stepConfigs[featureId as keyof typeof stepConfigs] || [];
};

export default function FeatureStepPage({ 
  params 
}: { 
  params: { id: string; step: string } 
}) {
  const feature = FEATURES.find(f => f.id === params.id);
  const steps = getFeatureSteps(params.id);
  const currentStep = steps.find(s => s.name === params.step);
  
  if (!feature || !currentStep) {
    notFound();
  }

  const stepContent = getStepContent(feature.id, currentStep.number);
  const currentIndex = steps.findIndex(s => s.name === params.step);
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{feature.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
            <div 
              className={`h-full ${feature.color}`}
              style={{ width: `${((currentStep.number) / 3) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            Step {currentStep.number} of 3
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
              <Button
                variant="outline"
                as={Link}
                href={`/features/${feature.id}/step/${prevStep.name}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Step
              </Button>
            ) : (
              <Button
                variant="outline"
                as={Link}
                href={`/features/${feature.id}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Feature
              </Button>
            )}
            {nextStep && (
              <Button
                as={Link}
                href={`/features/${feature.id}/step/${nextStep.name}`}
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
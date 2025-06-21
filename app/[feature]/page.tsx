import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export async function generateStaticParams() {
  const additionalFeatures = [
    { id: 'word-count' }
  ];
  
  const allFeatures = FEATURES.map(feature => ({ feature: feature.id }))
    .concat(additionalFeatures.map(feature => ({ feature: feature.id })));
  
  return allFeatures;
}

const getFeatureSteps = (id: string) => {
  switch (id) {
    case 'instantBook':
      return [
        { name: '1', title: 'Upload Content' },
        { name: '2', title: 'Choose Format' },
        { name: '3', title: 'Generate Book' }
      ];
    case 'chapterCrafter':
      return [
        { name: '1', title: 'Define Topic' },
        { name: '2', title: 'Set Audience' },
        { name: '3', title: 'Generate Chapters' }
      ];
    case 'word-count':
      return [
        { name: '1', title: 'Upload Text' },
        { name: '2', title: 'Analysis' },
        { name: '3', title: 'Results' }
      ];
    default:
      return [
        { name: '1', title: 'Step 1' },
        { name: '2', title: 'Step 2' },
        { name: '3', title: 'Step 3' }
      ];
  }
};

export default function FeaturePage({ params }: { params: { feature: string } }) {
  const feature = [...FEATURES, { 
    id: 'word-count',
    name: 'Word Count',
    description: 'Analyze word count and text statistics',
    color: 'bg-blue-500',
    steps: ['upload', 'analysis', 'results']
  }].find(f => f.id === params.feature);
  
  if (!feature) {
    notFound();
  }

  const getFeatureContent = (id: string) => {
    const contentMap = {
      'instant-book': {
        steps: [
          "Upload your manuscript or start writing",
          "Choose your preferred format and style",
          "Generate your ebook with one click"
        ],
        cta: "Generate Ebook Now"
      },
      'chapter-crafter': {
        steps: [
          "Define your book's main topic",
          "Set your target audience",
          "Get AI-generated chapters"
        ],
        cta: "Create Chapters"
      },
      'word-count': {
        steps: [
          "Upload your text content",
          "View detailed analysis",
          "Get comprehensive results"
        ],
        cta: "Start Analysis"
      },
      'easy-book-flow': {
        steps: [
          "Choose your book type",
          "Configure basic settings",
          "Create your outline"
        ],
        cta: "Start Book Flow"
      },
      'story-sculptor': {
        steps: [
          "Select your genre and style",
          "Create your characters",
          "Design your plot"
        ],
        cta: "Craft Your Story"
      },
      'title-genius': {
        steps: [
          "Enter your main topic",
          "Choose title style",
          "Get title suggestions"
        ],
        cta: "Generate Titles"
      },
      'outline-master': {
        steps: [
          "Select outline template",
          "Define main sections",
          "Add section details"
        ],
        cta: "Create Outline"
      },
      'perfect-prose': {
        steps: [
          "Input your content",
          "Set writing style",
          "Get enhanced text"
        ],
        cta: "Enhance Writing"
      },
      'visual-verse': {
        steps: [
          "Describe your scene",
          "Choose visual style",
          "Generate visuals"
        ],
        cta: "Create Visuals"
      },
      'niche-book-pro': {
        steps: [
          "Select your niche",
          "Define target audience",
          "Get market analysis"
        ],
        cta: "Start Niche Book"
      }
    };
    
    return contentMap[id as keyof typeof contentMap] || {
      steps: [
        "Feature coming soon...",
        "Stay tuned for updates",
        "Check back later"
      ],
      cta: "Learn More"
    };
  };

  const content = getFeatureContent(feature.id);

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
                {getFeatureSteps(feature.id).map((step, index) => (
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
              <Link href={`/${feature.id}/steps/${feature.steps[0]}`}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                  {content.cta}
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
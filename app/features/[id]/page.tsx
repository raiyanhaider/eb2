import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return FEATURES.map((feature) => ({
    id: feature.id,
  }));
}

const getFeatureSteps = (id: string) => {
  switch (id) {
    case 'instantBook':
      return [
        { name: 'upload', title: 'Upload Content' },
        { name: 'format', title: 'Choose Format' },
        { name: 'generate', title: 'Generate Book' }
      ];
    case 'chapterCrafter':
      return [
        { name: 'topic', title: 'Define Topic' },
        { name: 'audience', title: 'Set Audience' },
        { name: 'chapters', title: 'Generate Chapters' }
      ];
    case 'easyBookFlow':
      return [
        { name: 'type', title: 'Book Type' },
        { name: 'setup', title: 'Book Setup' },
        { name: 'outline', title: 'Create Outline' }
      ];
    case 'storySculptor':
      return [
        { name: 'genre', title: 'Choose Genre' },
        { name: 'characters', title: 'Create Characters' },
        { name: 'plot', title: 'Design Plot' }
      ];
    case 'titleGenius':
      return [
        { name: 'topic', title: 'Main Topic' },
        { name: 'style', title: 'Title Style' },
        { name: 'suggestions', title: 'Get Suggestions' }
      ];
    case 'outlineMaster':
      return [
        { name: 'template', title: 'Choose Template' },
        { name: 'sections', title: 'Define Sections' },
        { name: 'details', title: 'Add Details' }
      ];
    case 'perfectProse':
      return [
        { name: 'content', title: 'Input Content' },
        { name: 'style', title: 'Set Style' },
        { name: 'enhance', title: 'Enhance Text' }
      ];
    case 'visualVerse':
      return [
        { name: 'scene', title: 'Scene Input' },
        { name: 'style', title: 'Visual Style' },
        { name: 'generate', title: 'Generate Visuals' }
      ];
    case 'nicheBookPro':
      return [
        { name: 'niche', title: 'Select Niche' },
        { name: 'audience', title: 'Define Audience' },
        { name: 'analysis', title: 'Market Analysis' }
      ];
    default:
      return [
        { name: 'step1', title: 'Step 1' },
        { name: 'step2', title: 'Step 2' },
        { name: 'step3', title: 'Step 3' }
      ];
  }
};

export default function FeaturePage({ params }: { params: { id: string } }) {
  const feature = FEATURES.find(f => f.id === params.id);
  
  if (!feature) {
    notFound();
  }

  const getFeatureContent = (id: string) => {
    switch (id) {
      case 'instantBook':
        return {
          steps: [
            "Upload your manuscript or start writing",
            "Choose your preferred format and style",
            "Generate your ebook with one click"
          ],
          cta: "Generate Ebook Now"
        };
      case 'chapterCrafter':
        return {
          steps: [
            "Input your main topic or theme",
            "Define your target audience",
            "Get AI-generated chapter suggestions"
          ],
          cta: "Create Chapters"
        };
      case 'easyBookFlow':
        return {
          steps: [
            "Choose your book type",
            "Follow the guided setup process",
            "Complete each step with AI assistance"
          ],
          cta: "Start Book Flow"
        };
      case 'storySculptor':
        return {
          steps: [
            "Select your genre and style",
            "Define characters and plot points",
            "Generate story elements with AI"
          ],
          cta: "Craft Your Story"
        };
      case 'titleGenius':
        return {
          steps: [
            "Enter your book's main topic",
            "Specify keywords and tone",
            "Get AI-generated title suggestions"
          ],
          cta: "Generate Titles"
        };
      case 'outlineMaster':
        return {
          steps: [
            "Choose outline template",
            "Customize sections and subsections",
            "Generate detailed outline"
          ],
          cta: "Create Outline"
        };
      case 'perfectProse':
        return {
          steps: [
            "Paste your content",
            "Select enhancement options",
            "Get improved versions"
          ],
          cta: "Enhance Writing"
        };
      case 'visualVerse':
        return {
          steps: [
            "Upload or describe your scene",
            "Choose visual style",
            "Generate matching visuals"
          ],
          cta: "Create Visuals"
        };
      case 'nicheBookPro':
        return {
          steps: [
            "Select your niche market",
            "Define audience preferences",
            "Generate targeted content"
          ],
          cta: "Start Niche Book"
        };
      default:
        return {
          steps: [
            "Feature coming soon...",
            "Stay tuned for updates",
            "Check back later"
          ],
          cta: "Learn More"
        };
    }
  };

  const content = getFeatureContent(feature.id);

  return (
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
            <Link href={`/features/${feature.id}/step/${getFeatureSteps(feature.id)[0].name}`}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
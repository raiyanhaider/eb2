import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { FEATURES } from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";

export default function UploadPage() {
  const feature = FEATURES.find(f => f.id === 'instant-book')!;
  
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{feature.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div 
                className={`h-full ${feature.color}`}
                style={{ width: '33.33%' }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Step 1 of 3
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')}`}>
                <Upload className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Start Your Book</h2>
                <p className="text-muted-foreground">Upload your existing manuscript or start writing directly in our editor</p>
              </div>
            </div>
            
            <div className="mb-8 space-y-6">
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your manuscript here, or click to browse
                </p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Or start writing now</label>
                <Textarea 
                  placeholder="Begin typing your story..."
                  className="min-h-[200px]"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/instant-book">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Feature
                </Button>
              </Link>
              <Link href="/instant-book/format">
                <Button>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
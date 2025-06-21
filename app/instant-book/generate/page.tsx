import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Wand2, BookOpen } from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { FEATURES } from "@/lib/constants";

export default function GeneratePage() {
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
                style={{ width: '100%' }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Step 3 of 3
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')}`}>
                <Wand2 className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Generate</h2>
                <p className="text-muted-foreground">Review and generate your final ebook</p>
              </div>
            </div>
            
            <div className="mb-8 space-y-6">
              <Card className="p-4">
                <div className="aspect-[3/4] rounded-lg bg-muted/30 flex items-center justify-center">
                  <p className="text-muted-foreground">Book Preview</p>
                </div>
              </Card>
              <div className="space-y-2">
                <label className="text-sm font-medium">Export Options</label>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Preview in Browser
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Download EPUB
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/instant-book/format">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Step
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { FEATURES } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormatPage() {
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
                style={{ width: '66.66%' }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Step 2 of 3
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')}`}>
                <BookOpen className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Choose Format</h2>
                <p className="text-muted-foreground">Select your preferred ebook format and styling options</p>
              </div>
            </div>
            
            <div className="mb-8 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ebook Format</label>
                  <Select defaultValue="epub">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epub">EPUB</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="mobi">MOBI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Style Template</label>
                  <Select defaultValue="modern">
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern Clean</SelectItem>
                      <SelectItem value="classic">Classic Book</SelectItem>
                      <SelectItem value="magazine">Magazine Style</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Custom Styling</label>
                <Card className="p-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="text-xs">Font Family</label>
                      <Select defaultValue="georgia">
                        <SelectTrigger>
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="georgia">Georgia</SelectItem>
                          <SelectItem value="merriweather">Merriweather</SelectItem>
                          <SelectItem value="lora">Lora</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs">Font Size</label>
                        <Select defaultValue="12">
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="11">11pt</SelectItem>
                            <SelectItem value="12">12pt</SelectItem>
                            <SelectItem value="13">13pt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs">Line Height</label>
                        <Select defaultValue="1.5">
                          <SelectTrigger>
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1.4">1.4</SelectItem>
                            <SelectItem value="1.5">1.5</SelectItem>
                            <SelectItem value="1.6">1.6</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/instant-book/upload">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Step
                </Button>
              </Link>
              <Link href="/instant-book/generate">
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
'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil, Plus, Copy, RotateCcw, Check } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function AutoChapterPage() {
  const [step, setStep] = useState(1);
  const [selectedOutline, setSelectedOutline] = useState<number | null>(null);
  
  const outlineOptions = [
    {
      title: "Standard Academic Structure",
      outline: [
        "1. Introduction and Background",
        "2. Literature Review",
        "3. Methodology",
        "4. Results and Analysis",
        "5. Discussion",
        "6. Conclusion"
      ]
    },
    {
      title: "Narrative Flow Structure",
      outline: [
        "1. Opening Hook",
        "2. Context Setting",
        "3. Main Arguments",
        "4. Supporting Evidence",
        "5. Counter Arguments",
        "6. Resolution"
      ]
    },
    {
      title: "Problem-Solution Structure",
      outline: [
        "1. Problem Statement",
        "2. Current Situation",
        "3. Solution Overview",
        "4. Implementation Details",
        "5. Benefits Analysis",
        "6. Call to Action"
      ]
    }
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Title</label>
                <Input placeholder="Enter your book title" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Chapter Number</label>
                <Input type="number" min="1" placeholder="Enter chapter number" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Chapter Description</label>
                <Textarea 
                  placeholder="Describe what this chapter should be about..."
                  className="min-h-[150px]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Initial Outline Points</label>
                <Textarea 
                  placeholder="Enter your initial outline points (one per line)"
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
              onClick={() => setStep(2)}
            >
              Generate Outlines
            </Button>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            {outlineOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`p-4 cursor-pointer transition-colors ${
                  selectedOutline === index ? 'border-primary' : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedOutline(index)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <input 
                      type="radio" 
                      name="outline" 
                      checked={selectedOutline === index}
                      onChange={() => setSelectedOutline(index)}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{option.title}</h3>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
                
                <div className="pl-8 space-y-2">
                  {option.outline.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input defaultValue={item} className="w-full" />
                      {i === option.outline.length - 1 && (
                        <Button variant="ghost" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                onClick={() => setStep(3)}
                disabled={selectedOutline === null}
              >
                Generate Content
              </Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Generated Chapter Content</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on your selected outline and preferences
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                </div>
                
                <Textarea 
                  className="min-h-[500px] font-serif text-base leading-relaxed p-6"
                  defaultValue="Your generated chapter content will appear here, following the structure of your selected and customized outline..."
                  readOnly
                />
              </div>
            </Card>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep(2)}
              >
                Back
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                <Check className="mr-2 h-4 w-4" />
                Save Chapter
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Auto Chapter Generator</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full bg-blue-600"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Step {step} of 3
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
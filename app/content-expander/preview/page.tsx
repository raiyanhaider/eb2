'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RotateCcw, Check } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface ContentDetails {
  content: string;
  tone: string;
  expansionLength: string;
  additionalContent: {
    examples: boolean;
    statistics: boolean;
    quotes: boolean;
    bulletPoints: boolean;
  };
}

export default function ContentPreviewPage() {
  const [contentDetails, setContentDetails] = useState<ContentDetails | null>(null);
  const [expandedContent, setExpandedContent] = useState('');
  
  useEffect(() => {
    const storedDetails = localStorage.getItem('contentDetails');
    if (storedDetails) {
      setContentDetails(JSON.parse(storedDetails));
      // Auto-generate content when component mounts
      generateContent();
    }
  }, []);

  const generateContent = () => {
    // In a real implementation, this would call an AI service
    setExpandedContent('Generated expanded content based on your input...');
  };

  const regenerateContent = () => {
    generateContent();
  };

  if (!contentDetails) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Expanded Content</h1>
            <p className="text-lg text-muted-foreground">Review and refine your expanded content</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <Textarea
                  value={expandedContent}
                  onChange={(e) => setExpandedContent(e.target.value)}
                  className="min-h-[400px]"
                />
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={regenerateContent}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Regenerate
                  </Button>
                  <Button 
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600"
                      >
                        <Check className="mr-2 h-4 w-4" />
                        Save Content
                      </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
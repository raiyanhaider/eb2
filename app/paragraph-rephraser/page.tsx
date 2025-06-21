'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, RotateCcw, Copy } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function ParagraphRephraserPage() {
  const [content, setContent] = useState('');
  const [style, setStyle] = useState('formal');
  const [rephrasedContent, setRephrasedContent] = useState('');

  const rephrase = () => {
    // Simulated API call - in a real app, this would call an AI service
    setRephrasedContent('Rephrased version of your content will appear here...');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rephrasedContent);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-sky-500/10">
            <FileText className="h-6 w-6 text-sky-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Paragraph Rephraser</h1>
            <p className="text-lg text-muted-foreground">
              Rephrase your content in different styles
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Writing Style</label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Text</label>
                  <Textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your text to rephrase..."
                    className="min-h-[300px]"
                  />
                </div>

                <Button 
                  onClick={rephrase}
                  disabled={!content}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600"
                >
                  Rephrase Content
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Rephrased Version</h2>
            <Card>
              <CardContent className="pt-6">
                <Textarea
                  value={rephrasedContent}
                  readOnly
                  className="min-h-[300px]"
                  placeholder="Rephrased content will appear here..."
                />
                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={rephrase}
                    disabled={!content}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Rephrase Again
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={copyToClipboard}
                    disabled={!rephrasedContent}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Result
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
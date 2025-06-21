'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookText, Sparkles, Copy, RotateCcw } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface GeneratedTitle {
  title: string;
  subtitle?: string;
  explanation: string;
}

export default function ChapterTitleGeneratorPage() {
  const [summary, setSummary] = useState('');
  const [keywords, setKeywords] = useState('');
  const [style, setStyle] = useState('descriptive');
  const [generatedTitles, setGeneratedTitles] = useState<GeneratedTitle[]>([]);

  const generateTitles = () => {
    // Simulated API call - in a real app, this would call an AI service
    setGeneratedTitles([
      {
        title: "The Dawn of Innovation",
        subtitle: "A New Era Begins",
        explanation: "Captures the theme of beginnings and progress while maintaining intrigue"
      },
      {
        title: "Shadows of the Past",
        subtitle: "Unveiling Hidden Truths",
        explanation: "Emphasizes mystery and historical elements in your chapter"
      },
      {
        title: "Breaking Through",
        subtitle: "The Path to Discovery",
        explanation: "Focuses on achievement and revelation themes"
      }
    ]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-purple-500/10">
            <BookText className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Chapter Title Generator</h1>
            <p className="text-lg text-muted-foreground">
              Create engaging chapter titles for your book
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Chapter Summary</label>
                  <Textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Briefly describe what happens in this chapter..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Keywords</label>
                  <Input
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Enter relevant keywords (comma-separated)"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Title Style</label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="descriptive">Descriptive</SelectItem>
                      <SelectItem value="dramatic">Dramatic</SelectItem>
                      <SelectItem value="mysterious">Mysterious</SelectItem>
                      <SelectItem value="action">Action-Oriented</SelectItem>
                      <SelectItem value="poetic">Poetic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={generateTitles}
                  disabled={!summary}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Titles
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Generated Titles</h2>
            {generatedTitles.length > 0 ? (
              <div className="space-y-4">
                {generatedTitles.map((title, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">{title.title}</h3>
                          {title.subtitle && (
                            <p className="text-sm text-muted-foreground">
                              {title.subtitle}
                            </p>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {title.explanation}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => copyToClipboard(title.title)}
                          >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy Title
                          </Button>
                          {title.subtitle && (
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={() => copyToClipboard(title.subtitle!)}
                            >
                              <Copy className="mr-2 h-4 w-4" />
                              Copy Subtitle
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={generateTitles}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Generate More Titles
                </Button>
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter a chapter summary and click "Generate Titles" to begin.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
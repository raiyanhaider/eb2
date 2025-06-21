'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, BarChart } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface WordStats {
  totalWords: number;
  uniqueWords: number;
  characters: number;
  sentences: number;
  paragraphs: number;
  avgWordLength: number;
  topWords: Array<{ word: string; count: number }>;
}

export default function WordCountPage() {
  const [content, setContent] = useState('');
  const [stats, setStats] = useState<WordStats | null>(null);

  const analyzeText = () => {
    // Simulated API call - in a real app, this would perform actual analysis
    setStats({
      totalWords: 150,
      uniqueWords: 85,
      characters: 750,
      sentences: 12,
      paragraphs: 4,
      avgWordLength: 5,
      topWords: [
        { word: "example", count: 5 },
        { word: "content", count: 4 },
        { word: "analysis", count: 3 }
      ]
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-blue-500/10">
            <FileText className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Word Count Tracker</h1>
            <p className="text-lg text-muted-foreground">
              Track and analyze your word count statistics
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Text</label>
                  <Textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter or paste your text here..."
                    className="min-h-[400px]"
                  />
                </div>

                <Button 
                  onClick={analyzeText}
                  disabled={!content}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  Analyze Text
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {stats ? (
              <>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Total Words</h3>
                        <p className="text-3xl font-bold text-blue-600">{stats.totalWords}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Unique Words</h3>
                        <p className="text-3xl font-bold text-indigo-600">{stats.uniqueWords}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Detailed Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Characters</p>
                        <p className="text-xl font-semibold">{stats.characters}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Sentences</p>
                        <p className="text-xl font-semibold">{stats.sentences}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Paragraphs</p>
                        <p className="text-xl font-semibold">{stats.paragraphs}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Avg Word Length</p>
                        <p className="text-xl font-semibold">{stats.avgWordLength}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Most Used Words</h3>
                    <div className="space-y-3">
                      {stats.topWords.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.word}</span>
                          <span className="text-sm font-medium">{item.count} times</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground">
                    <BarChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your text and click "Analyze Text" to see statistics</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
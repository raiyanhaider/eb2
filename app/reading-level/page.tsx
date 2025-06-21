'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BarChart, FileText } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface Analysis {
  readingLevel: string;
  readingTime: string;
  stats: {
    sentences: number;
    words: number;
    syllables: number;
    complexWords: number;
    avgWordLength: number;
    avgSentenceLength: number;
  };
  scores: {
    fleschKincaid: number;
    gunningFog: number;
    smog: number;
  };
}

export default function ReadingLevelPage() {
  const [content, setContent] = useState('');
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const analyzeText = () => {
    // Simulated API call - in a real app, this would perform actual analysis
    setAnalysis({
      readingLevel: "Grade 8-9",
      readingTime: "2 minutes",
      stats: {
        sentences: 12,
        words: 150,
        syllables: 200,
        complexWords: 15,
        avgWordLength: 4.5,
        avgSentenceLength: 12.5
      },
      scores: {
        fleschKincaid: 8.5,
        gunningFog: 9.2,
        smog: 8.8
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <BarChart className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Reading Level Analyzer</h1>
            <p className="text-lg text-muted-foreground">
              Analyze the readability of your text
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
                    placeholder="Enter your text to analyze..."
                    className="min-h-[400px]"
                  />
                </div>

                <Button 
                  onClick={analyzeText}
                  disabled={!content}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600"
                >
                  Analyze Text
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {analysis ? (
              <>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Reading Level</h3>
                        <p className="text-3xl font-bold text-emerald-600 mt-1">
                          {analysis.readingLevel}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Reading Time</h3>
                        <p className="text-2xl font-semibold mt-1">
                          {analysis.readingTime}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Text Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Sentences</p>
                        <p className="text-xl font-semibold">{analysis.stats.sentences}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Words</p>
                        <p className="text-xl font-semibold">{analysis.stats.words}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Syllables</p>
                        <p className="text-xl font-semibold">{analysis.stats.syllables}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Complex Words</p>
                        <p className="text-xl font-semibold">{analysis.stats.complexWords}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Readability Scores</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Flesch-Kincaid</p>
                        <p className="text-xl font-semibold">{analysis.scores.fleschKincaid}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gunning Fog</p>
                        <p className="text-xl font-semibold">{analysis.scores.gunningFog}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">SMOG</p>
                        <p className="text-xl font-semibold">{analysis.scores.smog}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your text and click "Analyze Text" to begin</p>
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
'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PenTool, Check, X } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface Suggestion {
  type: 'grammar' | 'spelling' | 'style';
  text: string;
  suggestion: string;
  context: string;
}

export default function GrammarStyleCheckerPage() {
  const [content, setContent] = useState('');
  const [style, setStyle] = useState('formal');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkContent = () => {
    setIsChecking(true);
    // Simulated suggestions - in a real app, this would call an API
    setSuggestions([
      {
        type: 'grammar',
        text: 'their',
        suggestion: 'there',
        context: 'Make sure you put it over their.'
      },
      {
        type: 'style',
        text: 'very good',
        suggestion: 'excellent',
        context: 'The results were very good.'
      }
    ]);
    setIsChecking(false);
  };

  const acceptSuggestion = (index: number) => {
    const suggestion = suggestions[index];
    const newContent = content.replace(suggestion.text, suggestion.suggestion);
    setContent(newContent);
    setSuggestions(suggestions.filter((_, i) => i !== index));
  };

  const ignoreSuggestion = (index: number) => {
    setSuggestions(suggestions.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-blue-500/10">
            <PenTool className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Grammar & Style Checker</h1>
            <p className="text-lg text-muted-foreground">
              Check and improve your writing
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
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
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Text</label>
                    <Textarea 
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter or paste your text here..."
                      className="min-h-[300px]"
                    />
                  </div>

                  <Button 
                    onClick={checkContent}
                    disabled={!content || isChecking}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    Check Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Suggestions</h2>
            {suggestions.length > 0 ? (
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium capitalize">
                              {suggestion.type}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                              {suggestion.type === 'grammar' ? 'Error' : 'Suggestion'}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {suggestion.context}
                          </p>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="line-through">{suggestion.text}</span>
                            <span>→</span>
                            <span className="font-medium">{suggestion.suggestion}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => ignoreSuggestion(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => acceptSuggestion(index)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    No suggestions yet. Enter some text and click "Check Content" to begin.
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
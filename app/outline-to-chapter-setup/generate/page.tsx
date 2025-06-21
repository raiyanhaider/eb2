'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, RotateCcw, Check } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface OutlineDetails {
  bookTitle: string;
  bookGenre: string;
  bookDescription: string;
  numChapters: number;
  chapterTitles: string[];
}

interface ChapterContent {
  title: string;
  content: string;
  isGenerated: boolean;
}

export default function GenerateChaptersPage() {
  const [outlineDetails, setOutlineDetails] = useState<OutlineDetails | null>(null);
  const [chapters, setChapters] = useState<ChapterContent[]>([]);
  
  useEffect(() => {
    const storedDetails = localStorage.getItem('outlineDetails');
    if (storedDetails) {
      const details = JSON.parse(storedDetails);
      setOutlineDetails(details);
      
      // Initialize chapters array
      const initialChapters = details.chapterTitles.map(title => ({
        title,
        content: '',
        isGenerated: false
      }));
      setChapters(initialChapters);
    }
  }, []);

  const generateChapterContent = (index: number) => {
    setChapters(current => {
      const updated = [...current];
      updated[index] = {
        ...updated[index],
        content: `Generated content for ${updated[index].title}...`,
        isGenerated: true
      };
      return updated;
    });
  };

  const regenerateChapterContent = (index: number) => {
    generateChapterContent(index);
  };

  if (!outlineDetails) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <Sparkles className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{outlineDetails.bookTitle}</h1>
            <p className="text-lg text-muted-foreground">Generate your chapters</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      Chapter {index + 1}: {chapter.title}
                    </h2>
                  </div>
                  
                  {!chapter.isGenerated ? (
                    <Button
                      onClick={() => generateChapterContent(index)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Chapter Content
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Textarea
                        value={chapter.content}
                        onChange={(e) => {
                          const updated = [...chapters];
                          updated[index].content = e.target.value;
                          setChapters(updated);
                        }}
                        className="min-h-[300px]"
                      />
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => regenerateChapterContent(index)}
                        >
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Regenerate
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                          <Check className="mr-2 h-4 w-4" />
                          Save Chapter
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
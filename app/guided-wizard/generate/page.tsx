'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Plus, Minus } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface BookDetails {
  name: string;
  description: string;
  chapters: number;
}

interface ChapterOutline {
  title: string;
  points: string[];
  content?: string;
}

export default function GenerateChaptersPage() {
  const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
  const [outlines, setOutlines] = useState<ChapterOutline[]>([]);
  
  useEffect(() => {
    const storedDetails = localStorage.getItem('bookDetails');
    if (storedDetails) {
      const details = JSON.parse(storedDetails);
      setBookDetails(details);
      
      // Initialize outlines based on number of chapters
      const initialOutlines = Array.from({ length: details.chapters }, (_, i) => ({
        title: `Chapter ${i + 1}`,
        points: [
          'Introduction',
          'Main Point 1',
          'Main Point 2',
          'Conclusion'
        ]
      }));
      setOutlines(initialOutlines);
    }
  }, []);

  const handleAddPoint = (chapterIndex: number) => {
    setOutlines(current => {
      const updated = [...current];
      updated[chapterIndex].points.push(`New Point ${updated[chapterIndex].points.length + 1}`);
      return updated;
    });
  };

  const handleRemovePoint = (chapterIndex: number, pointIndex: number) => {
    setOutlines(current => {
      const updated = [...current];
      updated[chapterIndex].points.splice(pointIndex, 1);
      return updated;
    });
  };

  const handlePointChange = (chapterIndex: number, pointIndex: number, value: string) => {
    setOutlines(current => {
      const updated = [...current];
      updated[chapterIndex].points[pointIndex] = value;
      return updated;
    });
  };

  const handleTitleChange = (chapterIndex: number, value: string) => {
    setOutlines(current => {
      const updated = [...current];
      updated[chapterIndex].title = value;
      return updated;
    });
  };

  const generateChapter = (chapterIndex: number) => {
    setOutlines(current => {
      const updated = [...current];
      updated[chapterIndex].content = `Generated content for ${updated[chapterIndex].title}...`;
      return updated;
    });
  };

  if (!bookDetails) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-purple-500/10">
            <Sparkles className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{bookDetails.name}</h1>
            <p className="text-lg text-muted-foreground">Generate your chapters</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {outlines.map((chapter, chapterIndex) => (
            <Card key={chapterIndex}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Input
                    value={chapter.title}
                    onChange={(e) => handleTitleChange(chapterIndex, e.target.value)}
                    className="text-lg font-semibold"
                  />
                  
                  <div className="space-y-2">
                    {chapter.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-2">
                        <Input
                          value={point}
                          onChange={(e) => handlePointChange(chapterIndex, pointIndex, e.target.value)}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemovePoint(chapterIndex, pointIndex)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    
                    <Button
                      variant="outline"
                      onClick={() => handleAddPoint(chapterIndex)}
                      className="w-full mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Point
                    </Button>
                  </div>
                  
                  {!chapter.content ? (
                    <Button
                      onClick={() => generateChapter(chapterIndex)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
                    >
                      Generate Chapter
                    </Button>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <h3 className="font-medium">Generated Content</h3>
                      <Textarea
                        value={chapter.content}
                        readOnly
                        className="min-h-[200px]"
                      />
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
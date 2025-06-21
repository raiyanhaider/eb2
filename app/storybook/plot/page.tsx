'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Plus, Minus } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface StoryDetails {
  bookName: string;
  genre: string;
  mainCharacter: {
    name: string;
    description: string;
  };
  supportingCharacters: Array<{
    name: string;
    description: string;
  }>;
  plotSummary: string;
  storyTone: string;
}

interface ChapterOutline {
  title: string;
  description: string;
  points: string[];
  content?: string;
}

export default function PlotGenerationPage() {
  const [storyDetails, setStoryDetails] = useState<StoryDetails | null>(null);
  const [chapters, setChapters] = useState<ChapterOutline[]>([]);
  
  useEffect(() => {
    const storedDetails = localStorage.getItem('storyDetails');
    if (storedDetails) {
      const details = JSON.parse(storedDetails);
      setStoryDetails(details);
      
      // Initialize 5 chapters with default content
      const initialChapters = Array.from({ length: 5 }, (_, i) => ({
        title: `Chapter ${i + 1}`,
        description: 'Chapter description...',
        points: [
          'Introduction',
          'Main Event',
          'Character Development',
          'Plot Advancement',
          'Chapter Conclusion'
        ]
      }));
      setChapters(initialChapters);
    }
  }, []);

  const handleAddPoint = (chapterIndex: number) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].points.push(`New Point ${updated[chapterIndex].points.length + 1}`);
      return updated;
    });
  };

  const handleRemovePoint = (chapterIndex: number, pointIndex: number) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].points.splice(pointIndex, 1);
      return updated;
    });
  };

  const handlePointChange = (chapterIndex: number, pointIndex: number, value: string) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].points[pointIndex] = value;
      return updated;
    });
  };

  const handleTitleChange = (chapterIndex: number, value: string) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].title = value;
      return updated;
    });
  };

  const handleDescriptionChange = (chapterIndex: number, value: string) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].description = value;
      return updated;
    });
  };

  const generateChapterContent = (chapterIndex: number) => {
    setChapters(current => {
      const updated = [...current];
      updated[chapterIndex].content = `Generated content for ${updated[chapterIndex].title}...`;
      return updated;
    });
  };

  if (!storyDetails) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-indigo-500/10">
            <Sparkles className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{storyDetails.bookName}</h1>
            <p className="text-lg text-muted-foreground">Generate your chapters</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {chapters.map((chapter, chapterIndex) => (
            <Card key={chapterIndex}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Input
                    value={chapter.title}
                    onChange={(e) => handleTitleChange(chapterIndex, e.target.value)}
                    className="text-lg font-semibold"
                  />
                  
                  <Textarea
                    value={chapter.description}
                    onChange={(e) => handleDescriptionChange(chapterIndex, e.target.value)}
                    placeholder="Chapter description..."
                    className="h-24"
                  />
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Chapter Outline</h3>
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
                      onClick={() => generateChapterContent(chapterIndex)}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    >
                      Generate Chapter Content
                    </Button>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <h3 className="font-medium">Generated Content</h3>
                      <Textarea
                        value={chapter.content}
                        readOnly
                        className="min-h-[300px]"
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
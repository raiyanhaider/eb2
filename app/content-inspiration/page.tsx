'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, BookmarkPlus, RotateCcw } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface Idea {
  title: string;
  description: string;
  type: string;
  isSaved?: boolean;
}

export default function ContentInspirationPage() {
  const [genre, setGenre] = useState('');
  const [keyword, setKeyword] = useState('');
  const [ideas, setIdeas] = useState<Idea[]>([]);

  const generateIdeas = () => {
    // Simulated API call - in a real app, this would call an AI service
    setIdeas([
      {
        title: "The Hidden Impact",
        description: "Explore how small decisions can have far-reaching consequences in unexpected ways.",
        type: "Plot Concept"
      },
      {
        title: "Character Growth Through Adversity",
        description: "A character faces a series of escalating challenges that force personal growth.",
        type: "Character Arc"
      },
      {
        title: "Modern Myths in Daily Life",
        description: "Examining how ancient mythological themes manifest in contemporary situations.",
        type: "Theme Exploration"
      }
    ]);
  };

  const saveIdea = (index: number) => {
    setIdeas(ideas.map((idea, i) => 
      i === index ? { ...idea, isSaved: true } : idea
    ));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-amber-500/10">
            <Sparkles className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Content Inspiration Tool</h1>
            <p className="text-lg text-muted-foreground">
              Get inspired with creative writing prompts and ideas
            </p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="scifi">Science Fiction</SelectItem>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="thriller">Thriller</SelectItem>
                    <SelectItem value="horror">Horror</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Keyword (Optional)</label>
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Enter a keyword for inspiration"
                />
              </div>
            </div>

            <Button
              onClick={generateIdeas}
              className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Get Inspired
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                      {idea.type}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{idea.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {idea.description}
                    </p>
                  </div>
                  <Button
                    variant={idea.isSaved ? "outline" : "default"}
                    className="w-full"
                    onClick={() => saveIdea(index)}
                    disabled={idea.isSaved}
                  >
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    {idea.isSaved ? 'Saved' : 'Save Idea'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {ideas.length > 0 && (
          <Button
            variant="outline"
            className="mt-6 mx-auto block"
            onClick={generateIdeas}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Generate More Ideas
          </Button>
        )}
      </div>
    </DashboardLayout>
  );
}
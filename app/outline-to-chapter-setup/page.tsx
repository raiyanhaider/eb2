'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function OutlineToChapterSetupPage() {
  const router = useRouter();
  const [bookTitle, setBookTitle] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [numChapters, setNumChapters] = useState('5');
  const [chapterTitles, setChapterTitles] = useState<string[]>(Array(5).fill(''));

  const handleNumChaptersChange = (value: string) => {
    const num = parseInt(value);
    setNumChapters(value);
    setChapterTitles(prev => {
      if (num > prev.length) {
        return [...prev, ...Array(num - prev.length).fill('')];
      }
      return prev.slice(0, num);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem('outlineDetails', JSON.stringify({
      bookTitle,
      bookGenre,
      bookDescription,
      numChapters: parseInt(numChapters),
      chapterTitles
    }));
    
    router.push('/outline-to-chapter-setup/generate');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <Sparkles className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Outline to Chapter</h1>
            <p className="text-lg text-muted-foreground">Convert your outline into full chapters</p>
          </div>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Title</label>
                <Input 
                  placeholder="Enter your book title"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <Select 
                  value={bookGenre}
                  onValueChange={setBookGenre}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self-help">Self-Help</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Description</label>
                <Textarea 
                  placeholder="Provide a brief summary of your book..."
                  className="min-h-[100px]"
                  value={bookDescription}
                  onChange={(e) => setBookDescription(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Chapters</label>
                <Select 
                  value={numChapters}
                  onValueChange={handleNumChaptersChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of chapters" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Chapter' : 'Chapters'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <label className="text-sm font-medium">Chapter Titles</label>
                {chapterTitles.map((title, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Chapter {index + 1}
                    </label>
                    <Input 
                      placeholder={`Enter title for Chapter ${index + 1}`}
                      value={title}
                      onChange={(e) => {
                        const newTitles = [...chapterTitles];
                        newTitles[index] = e.target.value;
                        setChapterTitles(newTitles);
                      }}
                      required
                    />
                  </div>
                ))}
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600"
              >
                Generate Chapters
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
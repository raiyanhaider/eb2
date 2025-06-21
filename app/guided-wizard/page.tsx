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

export default function GuidedWizardPage() {
  const router = useRouter();
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [chapters, setChapters] = useState('5');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store the book details in localStorage for the next page
    localStorage.setItem('bookDetails', JSON.stringify({
      name: bookName,
      description,
      chapters: parseInt(chapters)
    }));
    
    router.push('/guided-wizard/generate');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-purple-500/10">
            <Sparkles className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Guided E-book Wizard</h1>
            <p className="text-lg text-muted-foreground">Create your book step by step</p>
          </div>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Name</label>
                <Input 
                  placeholder="Enter your book name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Description</label>
                <Textarea 
                  placeholder="Describe your book..."
                  className="min-h-[150px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Chapters</label>
                <Select 
                  value={chapters}
                  onValueChange={setChapters}
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
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                Create Outlines
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
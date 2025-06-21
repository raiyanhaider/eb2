'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function ContentExpanderPage() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('');
  const [expansionLength, setExpansionLength] = useState('');
  const [additionalContent, setAdditionalContent] = useState({
    examples: false,
    statistics: false,
    quotes: false,
    bulletPoints: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem('contentDetails', JSON.stringify({
      content,
      tone,
      expansionLength,
      additionalContent
    }));
    
    router.push('/content-expander/preview');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <Sparkles className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Content Expander</h1>
            <p className="text-lg text-muted-foreground">
              Expand your brief content into detailed, well-structured text
            </p>
          </div>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Content</label>
                <Textarea 
                  placeholder="Enter your brief content, outline, or summary..."
                  className="min-h-[200px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Tone</label>
                  <Select 
                    value={tone}
                    onValueChange={setTone}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="conversational">Conversational</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expansion Length</label>
                  <Select 
                    value={expansionLength}
                    onValueChange={setExpansionLength}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="full">Full Chapter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Content Types</label>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox"
                      checked={additionalContent.examples}
                      onChange={(e) => setAdditionalContent(prev => ({
                        ...prev,
                        examples: e.target.checked
                      }))}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Add Examples</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox"
                      checked={additionalContent.statistics}
                      onChange={(e) => setAdditionalContent(prev => ({
                        ...prev,
                        statistics: e.target.checked
                      }))}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Add Statistics</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox"
                      checked={additionalContent.quotes}
                      onChange={(e) => setAdditionalContent(prev => ({
                        ...prev,
                        quotes: e.target.checked
                      }))}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Add Quotes</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox"
                      checked={additionalContent.bulletPoints}
                      onChange={(e) => setAdditionalContent(prev => ({
                        ...prev,
                        bulletPoints: e.target.checked
                      }))}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Add Bullet Points</span>
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600"
              >
                Expand Content
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Plus } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function StorybookPage() {
  const router = useRouter();
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const [customGenre, setCustomGenre] = useState('');
  const [isCustomGenre, setIsCustomGenre] = useState(false);
  const [mainCharacter, setMainCharacter] = useState({
    name: '',
    description: ''
  });
  const [supportingCharacters, setSupportingCharacters] = useState([
    { name: '', description: '' }
  ]);
  const [plotSummary, setPlotSummary] = useState('');
  const [storyTone, setStoryTone] = useState('');
  const [customTone, setCustomTone] = useState('');
  const [isCustomTone, setIsCustomTone] = useState(false);

  const handleAddSupportingCharacter = () => {
    if (supportingCharacters.length < 3) {
      setSupportingCharacters([...supportingCharacters, { name: '', description: '' }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem('storyDetails', JSON.stringify({
      bookName,
      genre: isCustomGenre ? customGenre : genre,
      mainCharacter,
      supportingCharacters,
      plotSummary,
      storyTone: isCustomTone ? customTone : storyTone
    }));
    
    router.push('/storybook/plot');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-indigo-500/10">
            <Sparkles className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Storybook Generator</h1>
            <p className="text-lg text-muted-foreground">Create engaging stories with AI assistance</p>
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
                <label className="text-sm font-medium">Genre</label>
                <Select 
                  value={isCustomGenre ? 'custom' : genre}
                  onValueChange={(value) => {
                    if (value === 'custom') {
                      setIsCustomGenre(true);
                      setGenre('');
                    } else {
                      setIsCustomGenre(false);
                      setGenre(value);
                    }
                  }}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Common Genres</SelectLabel>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="scifi">Science Fiction</SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="historical">Historical Fiction</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Other</SelectLabel>
                      <SelectItem value="custom">Custom Genre</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {isCustomGenre && (
                  <Input
                    placeholder="Enter custom genre"
                    value={customGenre}
                    onChange={(e) => setCustomGenre(e.target.value)}
                    className="mt-2"
                    required
                  />
                )}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Main Character</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="Enter character name"
                    value={mainCharacter.name}
                    onChange={(e) => setMainCharacter({ ...mainCharacter, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    placeholder="Describe the character's appearance, personality, and role..."
                    value={mainCharacter.description}
                    onChange={(e) => setMainCharacter({ ...mainCharacter, description: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Supporting Characters</h3>
                  {supportingCharacters.length < 3 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddSupportingCharacter}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Character
                    </Button>
                  )}
                </div>
                {supportingCharacters.map((char, index) => (
                  <div key={index} className="space-y-2 p-4 border rounded-lg">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Enter character name"
                      value={char.name}
                      onChange={(e) => {
                        const updated = [...supportingCharacters];
                        updated[index].name = e.target.value;
                        setSupportingCharacters(updated);
                      }}
                    />
                    <label className="text-sm font-medium">Description</label>
                    <Textarea 
                      placeholder="Describe the character's role and relationship to the main character..."
                      value={char.description}
                      onChange={(e) => {
                        const updated = [...supportingCharacters];
                        updated[index].description = e.target.value;
                        setSupportingCharacters(updated);
                      }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Plot Summary</label>
                <Textarea 
                  placeholder="Provide a brief overview of your story's plot..."
                  className="min-h-[150px]"
                  value={plotSummary}
                  onChange={(e) => setPlotSummary(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Story Tone</label>
                <Select 
                  value={isCustomTone ? 'custom' : storyTone}
                  onValueChange={(value) => {
                    if (value === 'custom') {
                      setIsCustomTone(true);
                      setStoryTone('');
                    } else {
                      setIsCustomTone(false);
                      setStoryTone(value);
                    }
                  }}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Common Tones</SelectLabel>
                      <SelectItem value="lighthearted">Light-hearted</SelectItem>
                      <SelectItem value="dramatic">Dramatic</SelectItem>
                      <SelectItem value="suspenseful">Suspenseful</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="whimsical">Whimsical</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Other</SelectLabel>
                      <SelectItem value="custom">Custom Tone</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {isCustomTone && (
                  <Input
                    placeholder="Enter custom tone"
                    value={customTone}
                    onChange={(e) => setCustomTone(e.target.value)}
                    className="mt-2"
                    required
                  />
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Generate Plot
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
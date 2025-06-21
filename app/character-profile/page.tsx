'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Plus, Minus } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function CharacterProfilePage() {
  const [character, setCharacter] = useState({
    name: '',
    age: '',
    gender: '',
    occupation: '',
    physicalDescription: '',
    personality: '',
    background: '',
    goals: '',
    fears: [],
    strengths: [],
    weaknesses: []
  });

  const [newTrait, setNewTrait] = useState('');
  const [traitType, setTraitType] = useState<'fears' | 'strengths' | 'weaknesses'>('fears');
  const [customTrait, setCustomTrait] = useState('');

  const handleTraitAdd = () => {
    const traitToAdd = customTrait.trim() || newTrait.trim();
    if (traitToAdd) {
      setCharacter(prev => ({
        ...prev,
        [traitType]: [...prev[traitType], traitToAdd]
      }));
      setNewTrait('');
      setCustomTrait('');
    }
  };

  const handleTraitRemove = (type: 'fears' | 'strengths' | 'weaknesses', index: number) => {
    setCharacter(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store character details for the next step
    localStorage.setItem('characterDetails', JSON.stringify(character));
    window.location.href = '/character-profile/steps/basic-info';
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-violet-500/10">
            <Users className="h-6 w-6 text-violet-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Character Profile Generator</h1>
            <p className="text-lg text-muted-foreground">Create detailed character profiles for your story</p>
          </div>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Character Name</label>
                  <Input 
                    value={character.name}
                    onChange={(e) => setCharacter(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter character name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age</label>
                  <Input 
                    value={character.age}
                    onChange={(e) => setCharacter(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Enter character age"
                  />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Gender</label>
                  <Select 
                    value={character.gender}
                    onValueChange={(value) => setCharacter(prev => ({ ...prev, gender: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Occupation</label>
                  <Input 
                    value={character.occupation}
                    onChange={(e) => setCharacter(prev => ({ ...prev, occupation: e.target.value }))}
                    placeholder="Enter character occupation"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Physical Description</label>
                <Textarea 
                  value={character.physicalDescription}
                  onChange={(e) => setCharacter(prev => ({ ...prev, physicalDescription: e.target.value }))}
                  placeholder="Describe the character's physical appearance..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Personality</label>
                <Textarea 
                  value={character.personality}
                  onChange={(e) => setCharacter(prev => ({ ...prev, personality: e.target.value }))}
                  placeholder="Describe the character's personality traits..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Background</label>
                <Textarea 
                  value={character.background}
                  onChange={(e) => setCharacter(prev => ({ ...prev, background: e.target.value }))}
                  placeholder="Describe the character's background story..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Goals</label>
                <Textarea 
                  value={character.goals}
                  onChange={(e) => setCharacter(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="What are the character's main goals and motivations?"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <Select 
                      value={traitType}
                      onValueChange={(value: 'fears' | 'strengths' | 'weaknesses') => setTraitType(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fears">Fears</SelectItem>
                        <SelectItem value="strengths">Strengths</SelectItem>
                        <SelectItem value="weaknesses">Weaknesses</SelectItem>
                        <SelectItem value="custom">Custom Trait</SelectItem>
                      </SelectContent>
                    </Select>
                    {traitType === 'custom' && (
                      <Input
                        value={customTrait}
                        onChange={(e) => setCustomTrait(e.target.value)}
                        placeholder="Enter custom trait"
                      />
                    )}
                    <Button 
                      type="button"
                      onClick={handleTraitAdd}
                      disabled={!customTrait.trim()}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Trait
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    {character.fears.map((fear, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm">{fear}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTraitRemove('fears', index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {character.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm">{strength}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTraitRemove('strengths', index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {character.weaknesses.map((weakness, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm">{weakness}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTraitRemove('weaknesses', index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600"
              >
                Generate Character Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
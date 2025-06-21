import React from 'react';
import { 
  Upload, BookOpen, Wand2, Users, Target, Layout, 
  Sparkles, Image, BookType, Pencil, Copy, Check, RotateCcw,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export const getStepContent = (featureId: string, step: number) => {
  const steps = {
    'instant-book': [
      {
        title: "Start Your Book",
        description: "Upload your existing manuscript or start writing directly in our editor",
        icon: Upload,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your manuscript here, or click to browse
                </p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Or start writing now</label>
                <Textarea 
                  placeholder="Begin typing your story..."
                  className="min-h-[200px]"
                />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Choose Format",
        description: "Select your preferred ebook format and styling options",
        icon: BookOpen,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ebook Format</label>
                  <Select defaultValue="epub">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epub">EPUB</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="mobi">MOBI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Style Template</label>
                  <Select defaultValue="modern">
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern Clean</SelectItem>
                      <SelectItem value="classic">Classic Book</SelectItem>
                      <SelectItem value="magazine">Magazine Style</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Custom Styling</label>
                <Card className="p-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="text-xs">Font Family</label>
                      <Select defaultValue="georgia">
                        <SelectTrigger>
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="georgia">Georgia</SelectItem>
                          <SelectItem value="merriweather">Merriweather</SelectItem>
                          <SelectItem value="lora">Lora</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs">Font Size</label>
                        <Select defaultValue="12">
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="11">11pt</SelectItem>
                            <SelectItem value="12">12pt</SelectItem>
                            <SelectItem value="13">13pt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs">Line Height</label>
                        <Select defaultValue="1.5">
                          <SelectTrigger>
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1.4">1.4</SelectItem>
                            <SelectItem value="1.5">1.5</SelectItem>
                            <SelectItem value="1.6">1.6</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Generate",
        description: "Review and generate your final ebook",
        icon: Wand2,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="aspect-[3/4] rounded-lg bg-muted/30 flex items-center justify-center">
                  <p className="text-muted-foreground">Book Preview</p>
                </div>
              </Card>
              <div className="space-y-2">
                <label className="text-sm font-medium">Export Options</label>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Preview in Browser
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Download EPUB
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }
    ],
    'chapter-crafter': [
      {
        title: "Topic Input",
        description: "Enter your book's main topic and key themes",
        icon: BookType,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Main Topic</label>
                <Input placeholder="e.g., Artificial Intelligence in Healthcare" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Key Themes</label>
                <Textarea 
                  placeholder="Enter one theme per line..."
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Audience Definition",
        description: "Define your target readers and their interests",
        icon: Users,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Knowledge Level</label>
                  <Select defaultValue="intermediate">
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age Range</label>
                  <Select defaultValue="adult">
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="young">Young Adult</SelectItem>
                      <SelectItem value="adult">Adult</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interest Areas</label>
                <Card className="p-4">
                  <div className="grid gap-2">
                    {["Technology", "Healthcare", "Business", "Education"].map((area) => (
                      <div key={area} className="flex items-center">
                        <input type="checkbox" id={area} className="mr-2" />
                        <label htmlFor={area} className="text-sm">{area}</label>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Chapter Generation",
        description: "Review and customize AI-generated chapter suggestions",
        icon: Layout,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((chapter) => (
                    <div key={chapter} className="flex items-start gap-4">
                      <div className="flex-none">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {chapter}
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <Input defaultValue={`Chapter ${chapter}: AI-Generated Title`} />
                        <Textarea 
                          className="text-sm"
                          defaultValue="AI-generated chapter description and key points..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="flex justify-center">
                <Button variant="outline" className="w-full max-w-sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate More Chapters
                </Button>
              </div>
            </div>
          </React.Fragment>
        )
      }
    ],
    'easy-book-flow': [
      {
        title: "Book Type",
        description: "Choose the type of book you want to create",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <BookOpen className="h-8 w-8 mb-2 text-blue-500" />
                  <h3 className="font-medium">Non-Fiction</h3>
                  <p className="text-sm text-muted-foreground">Educational or informative books</p>
                </Card>
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <BookOpen className="h-8 w-8 mb-2 text-purple-500" />
                  <h3 className="font-medium">Fiction</h3>
                  <p className="text-sm text-muted-foreground">Stories and novels</p>
                </Card>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Title</label>
                <Input placeholder="Enter your book title" />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Book Setup",
        description: "Configure your book's basic settings",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Length</label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (10-50 pages)</SelectItem>
                    <SelectItem value="medium">Medium (51-200 pages)</SelectItem>
                    <SelectItem value="long">Long (201+ pages)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Writing Style</label>
                <Select defaultValue="casual">
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Create Outline",
        description: "Generate and customize your book outline",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <h3 className="font-medium mb-2">Generated Outline</h3>
                <div className="space-y-2 text-sm">
                  <p>1. Introduction</p>
                  <p>2. Main Content</p>
                  <p>3. Conclusion</p>
                </div>
              </Card>
              <Button className="w-full">Start Writing</Button>
            </div>
          </React.Fragment>
        )
      }
    ],
    'story-sculptor': [
      {
        title: "Choose Genre",
        description: "Select your story's genre and style",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <Select defaultValue="fantasy">
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="scifi">Science Fiction</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Writing Style</label>
                <Select defaultValue="descriptive">
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="descriptive">Descriptive</SelectItem>
                    <SelectItem value="dialogue">Dialogue-heavy</SelectItem>
                    <SelectItem value="action">Action-packed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Create Characters",
        description: "Develop your story's characters",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Main Character</label>
                <Input placeholder="Character name" className="mb-2" />
                <Textarea placeholder="Character description" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Plot Points</label>
                <Textarea placeholder="Key plot points" className="min-h-[150px]" />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Design Plot",
        description: "Craft your story's plot structure",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Character Development</h4>
                    <p className="text-sm text-muted-foreground">AI-generated character arc</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Plot Structure</h4>
                    <p className="text-sm text-muted-foreground">AI-generated plot outline</p>
                  </div>
                </div>
              </Card>
              <Button className="w-full">Generate Story Elements</Button>
            </div>
          </React.Fragment>
        )
      }
    ],
    'title-genius': [
      {
        title: "Main Topic",
        description: "Define your book's main topic and keywords",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Main Topic</label>
                <Input placeholder="Enter your book's main topic" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Keywords</label>
                <Input placeholder="Enter keywords (comma-separated)" />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Title Style",
        description: "Choose your preferred title style and tone",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title Tone</label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Title Length</label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (1-3 words)</SelectItem>
                    <SelectItem value="medium">Medium (4-6 words)</SelectItem>
                    <SelectItem value="long">Long (7+ words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Get Suggestions",
        description: "Review AI-generated title suggestions",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                      <h4 className="font-medium">Generated Title {i}</h4>
                      <p className="text-sm text-muted-foreground">Subtitle suggestion</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Button className="w-full">Generate More Titles</Button>
            </div>
          </React.Fragment>
        )
      }
    ],
    'outline-master': [
      {
        title: "Choose Template",
        description: "Select an outline template for your book",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {['Basic', 'Academic', 'Business', 'Creative'].map((template) => (
                  <Card key={template} className="p-4 cursor-pointer hover:border-primary transition-colors">
                    <h3 className="font-medium">{template}</h3>
                    <p className="text-sm text-muted-foreground">Template description</p>
                  </Card>
                ))}
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Define Sections",
        description: "Set up the main sections of your outline",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Sections</label>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <Input key={i} defaultValue={`Section ${i}`} />
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-2">Add Section</Button>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Add Details",
        description: "Fill in the details for each section",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <h4 className="font-medium">Section {i}</h4>
                        <div className="pl-4 mt-2 space-y-2 text-sm text-muted-foreground">
                          <p>• Subsection 1</p>
                          <p>• Subsection 2</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </React.Fragment>
        )
      }
    ],
    'perfect-prose': [
      {
        title: "Input Content",
        description: "Enter or upload your content",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-6 w-6 mb-2 text-blue-500" />
                  <h3 className="font-medium">Upload Document</h3>
                  <p className="text-sm text-muted-foreground">Import existing content</p>
                </Card>
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <Pencil className="h-6 w-6 mb-2 text-purple-500" />
                  <h3 className="font-medium">Write Content</h3>
                  <p className="text-sm text-muted-foreground">Start from scratch</p>
                </Card>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Your Content</label>
                  <span className="text-xs text-muted-foreground">0/5000 characters</span>
                </div>
                <Textarea 
                  placeholder="Paste your content here..."
                  className="min-h-[300px] font-mono"
                />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Set Style",
        description: "Choose your writing style and tone",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h3 className="font-medium mb-3">Writing Style</h3>
                  <div className="space-y-3">
                    <Select defaultValue="professional">
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium mb-3">Tone</h3>
                  <div className="space-y-3">
                    <Select defaultValue="neutral">
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="confident">Confident</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Enhance Text",
        description: "Review and apply AI enhancements",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Original</h4>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 text-sm">
                        Your original text will appear here...
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Enhanced</h4>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/5 text-sm">
                        Enhanced version will appear here...
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Check className="h-4 w-4 mr-2" />
                  Apply Changes
                </Button>
              </div>
            </div>
          </React.Fragment>
        )
      }
    ],
    'visual-verse': [
      {
        title: "Scene Input",
        description: "Describe or upload your scene",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Image className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload an image or describe your scene
                </p>
                <Button variant="outline" size="sm">Choose Image</Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Scene Description</label>
                <Textarea 
                  placeholder="Describe your scene in detail..."
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Visual Style",
        description: "Choose your visual style preferences",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Visual Style</label>
                <Select defaultValue="realistic">
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="artistic">Artistic</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Color Scheme</label>
                <Select defaultValue="warm">
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warm">Warm</SelectItem>
                    <SelectItem value="cool">Cool</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Generate Visuals",
        description: "Generate and review AI visuals",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) =>
                  <Card key={i} className="p-2 aspect-square bg-muted/30">
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Generated Visual {i}</p>
                    </div>
                  </Card>
                )}
              </div>
              <Button className="w-full">Generate More Visuals</Button>
            </div>
          </React.Fragment>
        )
      }
    ],
    'niche-book-pro': [
      {
        title: "Select Niche",
        description: "Choose your book's niche market",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Niche</label>
                <Select defaultValue="tech">
                  <SelectTrigger>
                    <SelectValue placeholder="Select niche" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                    <SelectItem value="finance">Personal Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Specific Topic</label>
                <Input placeholder="Enter your specific topic" />
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Define Audience",
        description: "Identify your target audience",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <label className="text-xs">Age Range</label>
                      <Select defaultValue="25-34">
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-24">18-24</SelectItem>
                          <SelectItem value="25-34">25-34</SelectItem>
                          <SelectItem value="35-44">35-44</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs">Experience Level</label>
                      <Select defaultValue="intermediate">
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Market Analysis",
        description: "Review market insights and recommendations",
        icon: Target,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Market Analysis</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      AI-generated market insights
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Content Suggestions</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Recommended topics and angles
                    </p>
                  </div>
                </div>
              </Card>
              <Button className="w-full">Generate Content Plan</Button>
            </div>
          </React.Fragment>
        )
      }
    ]
  };

  const defaultStep = {
    title: "Step Configuration",
    description: "Configure your settings for this step",
    icon: Target,
    content: (
      <React.Fragment>
        <div>Default step content</div>
      </React.Fragment>
    )
  };

  return steps[featureId as keyof typeof steps]?.[step - 1] || defaultStep;
};
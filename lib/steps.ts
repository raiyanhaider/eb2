import React from 'react';
import { 
  Upload, BookOpen, Wand2, Users, Target, Layout, 
  Sparkles, Image, BookType, Pencil, Copy, Check, RotateCcw, Plus,
  ArrowRight, Users as UsersIcon, BookText, ListChecks, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export const getStepContent = (featureId: string, step: number) => {
  const steps = {
    'auto-chapter': [
      {
        title: "Book Details",
        description: "Enter book details and chapter information",
        icon: BookText,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Book Title</label>
                <Input placeholder="Enter your book title" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Chapter Number</label>
                <Input type="number" min="1" defaultValue="1" placeholder="Enter chapter number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Chapter Description</label>
                <Textarea 
                  placeholder="Describe what this chapter should be about..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Initial Outline</label>
                <Textarea 
                  placeholder="Enter your initial outline points (one per line)"
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Writing Style</label>
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
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Length</label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (500-1000 words)</SelectItem>
                      <SelectItem value="medium">Medium (1000-2000 words)</SelectItem>
                      <SelectItem value="long">Long (2000+ words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Select Outline",
        description: "Choose from generated outlines and customize",
        icon: ListChecks,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              {[
                {
                  title: "Outline Option 1",
                  outline: [
                    "1. Introduction",
                    "2. Background and Context",
                    "3. Main Arguments/Points",
                    "4. Analysis and Discussion",
                    "5. Supporting Evidence",
                    "6. Practical Implications",
                    "7. Conclusion"
                  ]
                },
                {
                  title: "Outline Option 2",
                  outline: [
                    "1. Opening Hook",
                    "2. Setting the Scene",
                    "3. Key Concepts Introduction",
                    "4. Main Discussion",
                    "5. Examples and Illustrations",
                    "6. Connecting Ideas",
                    "7. Summary and Takeaways"
                  ]
                },
                {
                  title: "Outline Option 3",
                  outline: [
                    "1. Executive Summary",
                    "2. Core Concepts",
                    "3. Key Points",
                    "4. Supporting Details",
                    "5. Practical Applications",
                    "6. Conclusion"
                  ]
                }
              ].map((option, index) => (
                <Card key={index} className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <input 
                        type="radio" 
                        name="outline" 
                        id={`outline-${index}`} 
                        className="mt-1"
                      />
                      <div>
                        <label 
                          htmlFor={`outline-${index}`}
                          className="text-lg font-medium block"
                        >
                          {option.title}
                        </label>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                  <div className="pl-8 space-y-2 text-sm text-muted-foreground">
                    {option.outline.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Input defaultValue={item} className="w-full" />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Section
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Generated Content",
        description: "Review the generated chapter content",
        icon: FileText,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Generated Chapter</h3>
                      <p className="text-sm text-muted-foreground mt-1">Content generated based on selected outline</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                  <Textarea 
                    className="min-h-[500px] font-serif text-base leading-relaxed p-6"
                    defaultValue="The generated chapter content will appear here, following your selected and customized outline structure."
                    readOnly
                  />
                </div>
              </Card>
              <div className="flex justify-center">
                <Button className="w-full max-w-sm bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Check className="mr-2 h-4 w-4" />
                  Save Chapter
                </Button>
              </div>
            </div>
          </React.Fragment>
        )
      }
    ],
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
                <label className="text-sm font-medium">Number of Chapters</label>
                <Select defaultValue="5">
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of chapters" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Chapter' : 'Chapters'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
        icon: UsersIcon,
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
                  <div className="max-h-[300px] overflow-y-auto pr-2 space-y-2">
                    {[
                      "Technology",
                      "Healthcare",
                      "Business",
                      "Education",
                      "Science",
                      "Self-Development",
                      "Psychology",
                      "Finance",
                      "Marketing",
                      "Arts & Culture",
                      "Environment",
                      "History",
                      "Politics",
                      "Sports",
                      "Travel",
                      "Food & Cooking",
                      "Music",
                      "Fashion",
                      "Real Estate",
                      "Spirituality",
                      "Engineering",
                      "Architecture",
                      "Photography",
                      "Film & Media",
                      "Gaming",
                      "Fitness",
                      "Parenting",
                      "Law",
                      "Agriculture",
                      "Sustainability"
                    ].map((area) => (
                      <div key={area} className="flex items-center">
                        <input type="checkbox" id={area} className="mr-2" />
                        <label htmlFor={area} className="text-sm">{area}</label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t space-y-2">
                    <label className="text-sm font-medium">Add Custom Interest</label>
                    <div className="flex gap-2">
                      <Input placeholder="Enter custom interest..." className="flex-1" />
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
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
    'outline-converter': [
      {
        title: "Create Outline",
        description: "Create or import your book outline",
        icon: ListTree,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-6 w-6 mb-2 text-blue-500" />
                  <h3 className="font-medium">Import Outline</h3>
                  <p className="text-sm text-muted-foreground">Upload existing outline</p>
                </Card>
                <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                  <Pencil className="h-6 w-6 mb-2 text-purple-500" />
                  <h3 className="font-medium">Create New</h3>
                  <p className="text-sm text-muted-foreground">Start from scratch</p>
                </Card>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Outline Structure</label>
                <Card className="p-4">
                  <div className="space-y-4">
                    {[1, 2, 3].map((section) => (
                      <div key={section} className="space-y-2">
                        <Input defaultValue={`Section ${section}`} />
                        <div className="pl-4 space-y-2">
                          <Input placeholder="Add subsection..." className="text-sm" />
                          <Button variant="outline" size="sm" className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Subsection
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Section
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Expand Content",
        description: "Convert outline into detailed content",
        icon: ArrowRightCircle,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Writing Style</label>
                  <Select defaultValue="professional">
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Detail Level</label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brief">Brief</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Content
              </Button>
            </div>
          </React.Fragment>
        )
      },
      {
        title: "Review Content",
        description: "Review and refine generated content",
        icon: Check,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <Card className="p-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((section) => (
                    <div key={section} className="space-y-2">
                      <h3 className="font-medium">Section {section}</h3>
                      <Textarea 
                        className="min-h-[200px]"
                        defaultValue="Generated content will appear here..."
                      />
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Regenerate
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Check className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </React.Fragment>
        )
      }
    ],
    'content-expander': [
      {
        title: "Input Content",
        description: "Enter your initial content",
        icon: Pencil,
        content: (
          <React.Fragment>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Content</label>
                <Textarea 
                  placeholder="Enter your content to expand..."
                  className="min-h-[200px]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Type</label>
                  <Select defaultValue="paragraph">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paragraph">Paragraph</SelectItem>
                      <SelectItem value="outline">Outline</SelectItem>
                      <SelectItem value="bullet">Bullet Points</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Length</label>
                  <Select defaultValue="double">
                    <SelectTrigger>
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
        )
      }
    ]
  }
}
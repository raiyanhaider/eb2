"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Clock, BookOpen } from "lucide-react";
import { Project } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden group transition-all duration-200 hover:shadow-md",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center mt-2 text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <Clock className="mr-1 h-3.5 w-3.5" />
            <span>{project.lastEdited}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 h-3.5 w-3.5" />
            <span>{project.words.toLocaleString()} words</span>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1.5" />
        </div>
        
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
            {project.category}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="default" size="sm" className="mt-2 w-full bg-primary/90 hover:bg-primary">
          Continue Writing
        </Button>
      </CardFooter>
    </Card>
  );
}
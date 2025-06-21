"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Zap, BookOpen, WalletCards as FlowParallel, Brush, Type, ListTree, Edit3, Image, Target, DivideIcon } from "lucide-react";
import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  BookOpen,
  FlowParallel,
  Brush,
  Type,
  ListTree,
  Edit3,
  Image,
  Target,
  DivideIcon,
};

export default function FeatureCard({ feature, className }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
  const IconComponent = iconMap[feature.icon] || DivideIcon;

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 group hover:shadow-lg border-border",
        isHovered && "scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "h-1.5 w-full transition-colors duration-300",
        feature.color,
        isHovered ? "opacity-100" : "opacity-70"
      )} />
      
      <CardContent className="p-6">
        <div className="flex flex-col items-start">
          <div className={cn(
            "p-3 rounded-xl mb-4 transition-colors duration-300",
            feature.color.replace('bg-', 'bg-opacity-10 ')
          )}>
            <IconComponent className={cn(
              "h-6 w-6 transition-colors duration-300",
              feature.color.replace('bg-', 'text-')
            )} />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="ghost" 
          className="mt-2 p-0 h-auto group-hover:underline"
          onClick={() => router.push(`/${feature.id}/steps/${feature.steps[0]}`)}
        >
          <span>Get Started</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
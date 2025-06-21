"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";
import { TIPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function TipCard() {
  const [currentTip, setCurrentTip] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % TIPS.length);
        setIsFading(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-none">
      <CardContent className="flex items-start p-4">
        <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1.5">
          <LightbulbIcon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-medium">Pro Tip</h4>
          <p className={cn(
            "text-xs text-muted-foreground mt-1 transition-opacity duration-500",
            isFading ? "opacity-0" : "opacity-100"
          )}>
            {TIPS[currentTip]}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
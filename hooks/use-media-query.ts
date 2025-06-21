"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      
      // Update the state initially
      setMatches(media.matches);
      
      // Set up the listener to update state
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      
      return () => media.removeEventListener("change", listener);
    }
    
    return undefined;
  }, [query]);
  
  return matches;
}
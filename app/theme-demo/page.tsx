"use client"

import { ThemeToggle } from "@/components/theme-toggle"

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-24-bold text-foreground">Dark Mode Demo</h1>
          <ThemeToggle />
        </div>
        
        <div className="grid gap-6">
          <div className="p-6 rounded-lg bg-card text-card-foreground border border-border">
            <h2 className="text-16-regular mb-4">Card Component</h2>
            <p className="text-muted-foreground">This card will change appearance based on the theme.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
            <h2 className="text-16-regular mb-4">Secondary Background</h2>
            <p>This section uses secondary colors from the theme.</p>
          </div>
          
          <button className="p-4 bg-primary text-primary-foreground rounded-md">
            Primary Button
          </button>
        </div>
      </div>
    </div>
  )
}
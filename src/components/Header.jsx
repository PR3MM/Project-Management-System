// Header.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useData } from '../Context/ProgressContext'; // Hook to access progress context

const Header = () => {
  // Destructure progress from the context
  const { progress } = useData();

  return (
    <div className="space-y-2">
      <nav className="border-b bg-white dark:bg-black px-3 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">Project Management System</h1>
          <Button variant="outline">Logout</Button>
          
        </div>
      </nav>

      <div className="px-6 py-4">
        <Card className="p-6 bg-zinc-50 dark:bg-zinc-900 border-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-xl font-semibold">Welcome back</p>
              <h2 className="text-2xl font-semibold tracking-tight">User👋</h2>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Current Score</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-semibold">{progress*1*2}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">points</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Overall Progress</p>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              
              <Progress value={progress} className="h-2 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Header;

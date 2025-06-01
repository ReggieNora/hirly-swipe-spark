
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SwipeableCards from '@/components/SwipeableCards';
import InstructionText from '@/components/InstructionText';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <Navigation />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            HIRLY
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-light max-w-2xl mx-auto">
            Find your perfect job match with the swipe of a finger
          </p>
        </div>
        
        <InstructionText />
        <SwipeableCards />
      </main>
    </div>
  );
};

export default Index;

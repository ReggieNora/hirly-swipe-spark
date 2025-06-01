
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SwipeableCards from '@/components/SwipeableCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-950 to-black relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      {/* Large background HIRLY branding - horizontal and centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-black text-white/[0.06] tracking-tighter leading-none" 
            style={{ 
              textShadow: '0 0 40px rgba(168, 85, 247, 0.15), 0 0 80px rgba(168, 85, 247, 0.1)' 
            }}>
          HIRLY
        </h1>
      </div>
      
      <Navigation />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <SwipeableCards />
      </main>
    </div>
  );
};

export default Index;

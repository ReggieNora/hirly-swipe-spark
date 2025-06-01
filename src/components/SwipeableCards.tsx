
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';
import TestimonialCard from './TestimonialCard';
import SignUpCard from './SignUpCard';

const SwipeableCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { type: 'job', data: { title: 'Senior Frontend Developer', company: 'TechCorp', salary: '$120k - $150k', location: 'Remote' } },
    { type: 'job', data: { title: 'UX Designer', company: 'DesignStudio', salary: '$90k - $110k', location: 'San Francisco' } },
    { type: 'testimonial', data: { quote: 'Hirly helped me find my dream job in just 2 weeks!', name: 'Sarah Chen', title: 'Software Engineer' } },
    { type: 'job', data: { title: 'Product Manager', company: 'StartupXYZ', salary: '$130k - $160k', location: 'New York' } },
    { type: 'testimonial', data: { quote: 'The swipe interface makes job hunting actually fun.', name: 'Michael Rodriguez', title: 'Data Scientist' } },
    { type: 'signup', data: {} }
  ];

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setDragOffset(e.clientX - startX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (Math.abs(dragOffset) > 100) {
        if (dragOffset > 0) {
          prevCard();
        } else {
          nextCard();
        }
      }
      setDragOffset(0);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const renderCard = (card: any) => {
    switch (card.type) {
      case 'job':
        return <JobCard {...card.data} />;
      case 'testimonial':
        return <TestimonialCard {...card.data} />;
      case 'signup':
        return <SignUpCard />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card Stack */}
      <div 
        ref={containerRef}
        className="relative h-96 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-300 ease-out"
              style={{
                transform: `
                  translateX(${offset * 20 + (isActive ? dragOffset : 0)}px) 
                  translateY(${Math.abs(offset) * 10}px) 
                  scale(${1 - Math.abs(offset) * 0.05})
                  rotateY(${offset * 5}deg)
                `,
                zIndex: cards.length - Math.abs(offset),
                opacity: 1 - Math.abs(offset) * 0.3,
              }}
            >
              {renderCard(card)}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextCard}
          disabled={currentIndex === cards.length - 1}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Card Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-purple-400 w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCards;

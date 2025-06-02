
import React, { useEffect, useRef } from 'react';

interface LanyardProps {
  children: React.ReactNode;
  mass?: number;
  tension?: number;
  friction?: number;
  style?: {
    cord?: {
      stroke?: string;
      strokeWidth?: number;
    };
  };
  className?: string;
}

export const Lanyard: React.FC<LanyardProps> = ({
  children,
  mass = 1,
  tension = 180,
  friction = 12,
  style,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const angleRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initial swing angle (small random swing)
    angleRef.current = (Math.random() - 0.5) * 0.1;

    const animate = () => {
      // Physics simulation for pendulum motion
      const angle = angleRef.current;
      const velocity = velocityRef.current;
      
      // Spring physics
      const acceleration = (-tension / mass) * angle - (friction / mass) * velocity;
      
      velocityRef.current += acceleration * 0.016; // 60fps
      angleRef.current += velocityRef.current * 0.016;
      
      // Apply transform
      card.style.transform = `rotate(${angle}rad)`;
      card.style.transformOrigin = 'top center';
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Add mouse interaction for gentle swing
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = e.clientX;
      const influence = (mouseX - centerX) / window.innerWidth;
      
      // Add subtle influence to the swing
      velocityRef.current += influence * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mass, tension, friction]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Lanyard cord */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
        width="2"
        height="200"
        style={{ zIndex: 1 }}
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="200"
          stroke={style?.cord?.stroke || 'rgba(168, 85, 247, 0.4)'}
          strokeWidth={style?.cord?.strokeWidth || 2}
        />
      </svg>
      
      {/* Swinging card container */}
      <div
        ref={cardRef}
        className={`relative ${className}`}
        style={{
          transformOrigin: 'top center',
          marginTop: '200px', // Account for cord length
        }}
      >
        {children}
      </div>
    </div>
  );
};

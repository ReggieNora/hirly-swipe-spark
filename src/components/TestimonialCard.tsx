
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
      <div className="text-center space-y-6">
        <Quote size={40} className="text-purple-400 mx-auto opacity-60" />
        
        <blockquote className="text-xl text-white font-light leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
        </div>
        
        <div className="space-y-1">
          <div className="text-lg font-semibold text-white">{name}</div>
          <div className="text-purple-200">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

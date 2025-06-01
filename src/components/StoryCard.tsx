
interface StoryCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const StoryCard = ({ title, subtitle, description }: StoryCardProps) => {
  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
      
      <div className="text-center space-y-6 relative z-10">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white leading-tight">
            {title}
          </h3>
          <h4 className="text-2xl font-light text-purple-200 leading-tight">
            {subtitle}
          </h4>
        </div>
        
        <p className="text-lg text-purple-100 font-light leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;

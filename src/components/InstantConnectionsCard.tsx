
import { Zap } from 'lucide-react';

const InstantConnectionsCard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8 flex flex-col justify-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-4 right-4 text-yellow-400 animate-pulse">
        <Zap size={24} />
      </div>
      <div className="absolute bottom-4 left-4 text-purple-300 animate-pulse" style={{ animationDelay: '1s' }}>
        <Zap size={20} />
      </div>
      
      <div className="text-center space-y-6 relative z-10">
        <h3 className="text-3xl font-bold text-white mb-4">
          Instant connections!
        </h3>
        
        {/* High-five image placeholder - using a visual representation */}
        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center border border-white/10 mb-6">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop&crop=faces"
            alt="People connecting and celebrating"
            className="w-28 h-28 rounded-full object-cover opacity-90"
          />
        </div>
        
        <p className="text-purple-200 text-lg font-light leading-relaxed">
          When you find the perfect match, connect instantly and start your journey together.
        </p>
      </div>
    </div>
  );
};

export default InstantConnectionsCard;

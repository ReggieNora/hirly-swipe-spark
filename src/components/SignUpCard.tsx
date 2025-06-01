
import { ArrowRight, Sparkles } from 'lucide-react';

const SignUpCard = () => {
  const handleSignUp = () => {
    // This would navigate to pricing page
    console.log('Navigating to pricing page...');
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl border border-white/30 p-8 flex flex-col justify-center shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-4 right-4 text-purple-300 animate-pulse">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-4 left-4 text-pink-300 animate-pulse" style={{ animationDelay: '1s' }}>
        <Sparkles size={20} />
      </div>
      
      <div className="text-center space-y-6 relative z-10">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to find your dream job?
        </h3>
        
        <p className="text-purple-200 text-lg font-light leading-relaxed">
          Join thousands of professionals who found their perfect match with Hirly
        </p>
        
        <div className="space-y-4 mt-8">
          <button 
            onClick={handleSignUp}
            className="w-full py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-purple-300">
            Free to start • Premium plans available
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;

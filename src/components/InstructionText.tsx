
import { Swipe } from 'lucide-react';

const InstructionText = () => {
  return (
    <div className="flex items-center gap-3 mb-8 text-purple-200 animate-pulse">
      <Swipe size={24} className="text-purple-400" />
      <span className="text-lg font-light">Swipe to find your match</span>
    </div>
  );
};

export default InstructionText;

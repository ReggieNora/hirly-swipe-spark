
import { MapPin, DollarSign, Building } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  location: string;
}

const JobCard = ({ title, company, salary, location }: JobCardProps) => {
  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center justify-center gap-2 text-purple-200">
            <Building size={16} />
            <span>{company}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-purple-200">
            <DollarSign size={20} className="text-green-400" />
            <span className="text-lg font-semibold">{salary}</span>
          </div>
          
          <div className="flex items-center gap-3 text-purple-200">
            <MapPin size={20} className="text-blue-400" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 py-3 px-6 bg-red-500/20 border border-red-400/50 rounded-2xl text-red-300 hover:bg-red-500/30 transition-all duration-300 hover:scale-105">
          Pass
        </button>
        <button className="flex-1 py-3 px-6 bg-green-500/20 border border-green-400/50 rounded-2xl text-green-300 hover:bg-green-500/30 transition-all duration-300 hover:scale-105">
          Like
        </button>
      </div>
    </div>
  );
};

export default JobCard;


import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm mb-6 animate-pulse">
            <Sparkles size={16} />
            <span>Welcome to your new learning journey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Learn With <span className="text-indigo-600">Amrutha</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 italic">
            Start fresh. Learn smart. Grow consistently.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            This space is for people who want real change, skill-based growth, and clarity.
            Transform your learning habits into practical engineering skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#community" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 hover:translate-y-[-2px]"
            >
              Join the Community
              <ArrowRight size={20} />
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Explore More
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-800">10+</span>
              <span className="text-sm font-medium">Domain Groups</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-800">Free</span>
              <span className="text-sm font-medium">Resources</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-800">100%</span>
              <span className="text-sm font-medium">Student Focused</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-800">No</span>
              <span className="text-sm font-medium">Promotions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

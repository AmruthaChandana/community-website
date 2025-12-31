
import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-indigo-500 p-2 rounded-lg">
                <GraduationCap size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">Learn With Amrutha</span>
            </div>
            <p className="text-slate-400 max-w-sm font-medium">
              Empowering students through domain-based peer learning and curated open-source resources.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Learn With Amrutha. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> for the student community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { User, Target, Rocket, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const sections = [
    {
      title: 'WHO AM I?',
      icon: <User className="text-indigo-600" size={28} />,
      content: "I’m Amrutha, a final-year Computer Science student with hands-on experience in technology, research projects, and digital learning initiatives. I’ve worked on real-world projects involving cybersecurity, AI-based systems, and application development, and I’m passionate about simplifying complex concepts into practical, easy-to-understand learning.",
      color: 'bg-indigo-50'
    },
    {
      title: 'WHY THIS?',
      icon: <Target className="text-sky-600" size={28} />,
      content: "This platform brings learners together as a community where students support and guide each other using real experiences in specific domains. Guidance is shared for certifications, hands-on practice, internships, and placement preparation through curated open-source resources. There is no pressure or promotion — learners are free to explore based on interest.",
      color: 'bg-sky-50'
    },
    {
      title: 'WHAT WILL YOU GAIN?',
      icon: <Rocket className="text-purple-600" size={28} />,
      content: "You join an interest-based community where curated resources and student experiences help you explore tools and technologies. Example: A learner interested in Python joins the Python community, where members share work, progress, and resources — motivating each other daily. Time spent on scrolling reels or memes is gradually replaced with productive learning and hands-on practice.",
      color: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 italic uppercase tracking-wider">About the Initiative</h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[2.5rem] ${section.color} border border-white transition-all hover:scale-[1.02] duration-300 shadow-sm hover:shadow-xl`}
            >
              <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{section.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-[2rem] border-2 border-dashed border-slate-200">
          <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Core Values</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Supportive Peer Network",
              "Curated Open Source Resources",
              "Practical Placement Guidance",
              "Zero-Pressure Learning Environment"
            ].map((val, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="font-semibold text-slate-700">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

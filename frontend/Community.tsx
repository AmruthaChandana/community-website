import React from 'react';
import { Instagram, Youtube, Send, MessageCircle, AlertCircle, ExternalLink } from 'lucide-react';

const Community: React.FC = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="text-pink-600" />,
      purpose: 'Showcasing projects, work, experiences, guidance, and marketing content',
      color: 'border-pink-100 bg-pink-50/30',
      btnColor: 'bg-pink-600 hover:bg-pink-700',
      link: 'https://www.instagram.com/learnwithamrutha?igsh=cmFyN3E1NmFidnU0'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="text-red-600" />,
      purpose: 'Courses, project walkthroughs, AI tools explanation, roadmaps, guidance',
      color: 'border-red-100 bg-red-50/30',
      btnColor: 'bg-red-600 hover:bg-red-700',
      link: 'https://www.youtube.com/@LearnWithAmrutha'
    },
    {
      name: 'Telegram',
      icon: <Send className="text-sky-600" />,
      purpose: 'Peer-to-peer doubt clearing, mentoring, updates, redirection links',
      color: 'border-sky-100 bg-sky-50/30',
      btnColor: 'bg-sky-600 hover:bg-sky-700',
      link: 'https://t.me/LearnWithAmruthaa'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="text-green-600" />,
      purpose: 'Structured groups based on interest for focused daily growth',
      color: 'border-green-100 bg-green-50/30',
      btnColor: 'bg-green-600 hover:bg-green-700',
      link: 'https://chat.whatsapp.com/KzuePFf2yhKF5n5NHFtDmx'
    }
  ];

  const whatsappGroups = [
    'Certifications', 'Internships & Placements', 'Python', 'Java',
    'Video Editing', 'Marketing', 'DSA', 'Frontend',
    'Backend', 'AI / ML / Data Science', 'Cybersecurity'
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 italic uppercase tracking-wider">
            Join Our Community
          </h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Connect with like-minded learners across different platforms. Each space has a unique role in your journey.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2rem] border-2 ${platform.color} transition-all hover:-translate-y-1 flex flex-col h-full`}
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4 shadow-sm">
                {platform.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {platform.name}
              </h3>

              <p className="text-sm text-slate-600 mb-6 flex-grow font-medium leading-relaxed">
                {platform.purpose}
              </p>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.btnColor} text-white w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2`}
              >
                {platform.name} Link
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* WhatsApp Groups */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-2xl text-green-600">
              <MessageCircle size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                WhatsApp Domain Groups
              </h3>
              <p className="text-slate-500 font-medium">
                Pick your interest and start learning today
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {whatsappGroups.map((group, i) => (
              <span
                key={i}
                className="bg-slate-50 text-slate-700 px-5 py-2.5 rounded-full border border-slate-100 font-semibold hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all cursor-default"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex gap-4">
            <AlertCircle className="text-yellow-600 shrink-0" size={24} />
            <div className="text-sm text-yellow-800 font-medium">
              <p className="font-bold mb-1 uppercase tracking-tight">Disclaimer</p>
              <p className="leading-relaxed opacity-90">
                This community is for educational purposes only. No guarantees regarding certifications,
                internships, or placements. Official links are shared ONLY by the admin.
                Please verify external resources before applying.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Community;

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

// Interface for type safety on the API response
interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = { name, email, message };

    try {
      // Connect to the backend route we created
      const res = await fetch('https://learnwithamrutha.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await res.json();

      if (res.ok && data.success) {
        // Success: Show server message and clear form
        alert(data.message || 'Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Error: Show specific message from backend (e.g., "All fields are required")
        alert(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Unable to connect to the server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 italic uppercase tracking-wider">
              Contact Me
            </h2>
            <div className="h-1.5 w-24 bg-indigo-600 rounded-full mb-8"></div>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Have questions about a specific domain? Want to collaborate or share resources?
              Feel free to reach out. I'm always happy to help fellow students grow.
            </p>

            {/* Email Card */}
            <div className="space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=learnwithamrutha2026@gmail.com&su=Contact from Learn With Amrutha Website&body=Hi Amrutha,%0D%0A%0D%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-[1.5rem] bg-indigo-50 border border-indigo-100 group transition-all hover:bg-indigo-600 hover:text-white"
              >
                <div className="bg-white p-3 rounded-xl text-indigo-600 shadow-sm group-hover:bg-indigo-500 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-70">
                    Email ID
                  </p>
                  <p className="text-lg font-bold">
                    learnwithamrutha2026@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Email ID
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Query / Comments
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
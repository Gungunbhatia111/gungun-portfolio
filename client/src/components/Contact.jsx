import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactInquiry } from '../services/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    budget: 'Flexible / Open to discussion',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ...status, error: 'Please fill in your name, email, and project message.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '', message: '' });

    try {
      const res = await sendContactInquiry(formData);
      setStatus({
        loading: false,
        success: true,
        error: '',
        message: res.message || 'Thank you! Gungun will review your inquiry and get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web Application',
        budget: 'Flexible / Open to discussion',
        message: '',
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Error submitting message. Please try emailing directly.',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            Let's Discuss Your <span className="text-indigo-400 light:text-indigo-600">Next Project</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Have a website project, need a bug fixed, or looking to collaborate? Drop a note or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl human-card p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1 leading-relaxed">
                  I typically respond within 12–24 hours. Feel free to call, WhatsApp, or send an email directly.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/15 text-indigo-400 light:text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">Email Address</span>
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800 group-hover:text-indigo-400 light:group-hover:text-indigo-600">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 light:text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">Phone / WhatsApp</span>
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800 group-hover:text-indigo-400 light:group-hover:text-indigo-600">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400 light:text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">LinkedIn Profile</span>
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800 group-hover:text-indigo-400 light:group-hover:text-indigo-600">
                      gungun-bhatia-524636323
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/15 text-purple-400 light:text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">GitHub Profile</span>
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800 group-hover:text-indigo-400 light:group-hover:text-indigo-600">
                      Gungunbhatia111
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl human-card p-6 sm:p-8 relative">
              <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-6">
                Send a Project Inquiry
              </h3>

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 light:text-emerald-700 flex items-center gap-3 text-xs font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 light:text-rose-700 flex items-center gap-3 text-xs font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Amit Verma"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. amit@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Business Website (like Bombay Bakers)">Business Website (like Bombay Bakers)</option>
                      <option value="Full-Stack Web Application">Full-Stack MERN Web App</option>
                      <option value="Landing Page / Portfolio">Landing Page / Portfolio</option>
                      <option value="Frontend UI/UX">Frontend React UI Development</option>
                      <option value="Website Fixes & Improvements">Website Bug Fixes & Improvements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Flexible / Open to discussion">Flexible / Open to discussion</option>
                      <option value="$100 - $300 (Rs. 8,000 - Rs. 25,000)">$100 - $300 (Rs. 8,000 - Rs. 25,000)</option>
                      <option value="$300 - $700 (Rs. 25,000 - Rs. 60,000)">$300 - $700 (Rs. 25,000 - Rs. 60,000)</option>
                      <option value="$700+ (Rs. 60,000+)">$700+ (Rs. 60,000+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Project Requirements / Details *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business or project, key features needed, timeline, etc..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

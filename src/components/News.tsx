import React from 'react';
import { Calendar, Star, User, Briefcase } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      category: 'CLIENT REVIEW',
      title: 'Outstanding MERN Stack Project Delivery',
      date: '2024-05-28',
      excerpt: 'Ashir exceeded our expectations with a robust, scalable web app. Communication was clear and deadlines were always met.',
      icon: Star,
      featured: true
    },
    {
      category: 'TEAM FEEDBACK',
      title: 'Great Team Player & Problem Solver',
      date: '2024-05-25',
      excerpt: 'Ashir brought innovative solutions to our React/Node challenges and was always ready to help teammates.',
      icon: User,
      featured: false
    },
    {
      category: 'CLIENT REVIEW',
      title: 'Professional & Reliable Developer',
      date: '2024-05-22',
      excerpt: 'Delivered a full-stack dashboard with MongoDB and Express. Highly recommend for any MERN stack project.',
      icon: Briefcase,
      featured: false
    },
    {
      category: 'PEER REVIEW',
      title: 'Clean Code & Best Practices',
      date: '2024-05-20',
      excerpt: 'Code reviews were a breeze. Ashir follows best practices and writes maintainable, readable code.',
      icon: User,
      featured: false
    },
    {
      category: 'CLIENT REVIEW',
      title: 'Excellent Communication & Support',
      date: '2024-05-18',
      excerpt: 'Quick responses and thorough explanations. Post-launch support was top-notch.',
      icon: Star,
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 px-4 bg-cyber-dark-gray/50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            CLIENT <span className="">REVIEWS</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            See what clients and colleagues say about Ashir's MERN stack development, teamwork, and professionalism.
          </p>
        </div>

        {/* Featured Review */}
        {newsItems.filter(item => item.featured).map((item, index) => (
          <div key={index} className="cyber-border p-8 mb-12 hover-glow">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-4">
                  <item.icon className="w-6 h-6 text-cyber-red" />
                  <span className="font-orbitron text-cyber-red text-sm font-bold tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-2 text-cyber-white/60">
                    <Calendar className="w-4 h-4" />
                    <span className="font-rajdhani text-sm">{formatDate(item.date)}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-orbitron font-bold text-cyber-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-rajdhani text-cyber-white/80 text-lg leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
              <div className="text-center">
                <button className="cyber-border px-6 py-3 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.filter(item => !item.featured).map((item, index) => (
            <div key={index} className="cyber-border p-6 hover-glow group cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <item.icon className="w-5 h-5 text-cyber-red" />
                <span className="font-orbitron text-cyber-red text-xs font-bold tracking-wider">
                  {item.category}
                </span>
                <div className="flex items-center space-x-2 text-cyber-white/60">
                  <Calendar className="w-4 h-4" />
                  <span className="font-rajdhani text-xs">{formatDate(item.date)}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-3 group-hover:text-cyber-red transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              
              <p className="font-rajdhani text-cyber-white/70 text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              
              <div className="w-full h-0.5 bg-cyber-red/30 group-hover:bg-cyber-red transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 cyber-border p-8 text-center">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
            STAY IN THE <span className="text-cyber-red">LOOP</span>
          </h3>
          <p className="font-rajdhani text-cyber-white/80 mb-6">
            Subscribe for updates on Ashir's latest MERN stack projects and client success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-cyber-light-gray border border-cyber-red/30 px-4 py-3 font-rajdhani text-cyber-white placeholder-cyber-white/50 focus:outline-none focus:border-cyber-red"
            />
            <button className="cyber-border px-6 py-3 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

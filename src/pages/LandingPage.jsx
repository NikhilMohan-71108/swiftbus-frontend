import React, { useState, useEffect } from 'react';
import { Bus, Clock, Shield, CreditCard, MapPin, ArrowRight, Star, Check, Zap, Users, TrendingUp, Menu, X, Calendar, Sparkles } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  });

  const handleSearch = () => {
    console.log('Searching for buses...', searchData);
    alert(`Searching buses from ${searchData.from} to ${searchData.to}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 100;
        if (isInView && !isVisible[index]) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const highlights = [
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking with accurate ETAs and instant notifications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified operators, background-checked drivers, 24/7 monitoring',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'UPI, cards, wallets - instant refunds with zero hassle',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book in 30 seconds. No paperwork, no queues, no stress',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: Users, value: '10M+', label: 'Happy Travelers' },
    { icon: Bus, value: '5000+', label: 'Bus Partners' },
    { icon: MapPin, value: '1500+', label: 'Destinations' },
    { icon: TrendingUp, value: '99.8%', label: 'On-Time Rate' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', location: 'Mumbai', text: 'Best bus booking experience! Clean buses and punctual service.', rating: 5 },
    { name: 'Rahul Kumar', location: 'Delhi', text: 'Love the live tracking feature. Never miss my bus anymore!', rating: 5 },
    { name: 'Anjali Patel', location: 'Bangalore', text: 'Safe, comfortable, and affordable. My go-to travel app!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4),
                        0 0 40px rgba(99, 102, 241, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.6),
                        0 0 60px rgba(99, 102, 241, 0.4);
          }
        }
        
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        .animate-wobble {
          animation: wobble 1s ease-in-out;
        }
        
        .hover-wobble:hover {
          animation: wobble 0.5s ease-in-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 animate-fadeInLeft">
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2.5 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 animate-glow-pulse hover-wobble cursor-pointer group">
                <Bus className="w-7 h-7 text-white group-hover:animate-bounce-subtle" />
                <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer">SwiftBus</h1>
                <p className="text-xs text-gray-500">Travel Reimagined</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Routes</a>
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">My Bookings</a>
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Help</a>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3 animate-fadeInRight">
              <button className="px-5 py-2.5 text-gray-700 font-semibold hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                Login
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Sign Up Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-fadeInUp">
              <nav className="flex flex-col p-4 space-y-3">
                <a href="#" className="px-4 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Home</a>
                <a href="#" className="px-4 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Routes</a>
                <a href="#" className="px-4 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">My Bookings</a>
                <a href="#" className="px-4 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Help</a>
                <div className="border-t border-gray-200 pt-3 space-y-2">
                  <button className="w-full px-4 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition-colors">
                    Login
                  </button>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Sign Up Free
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-indigo-100 animate-scaleIn">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">Rated 4.9/5 by 2M+ users</span>
            </div>

            {/* App Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-indigo-600 to-blue-500 p-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-110 animate-glow-pulse hover-wobble">
                  <Bus className="w-20 h-20 text-white animate-bounce-subtle" />
                  <div className="absolute inset-0 bg-white rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 border-4 border-transparent border-t-white/30 border-r-white/30 rounded-3xl animate-spin-slow"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
              Your Journey,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
                Simplified & Smart
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
              Book bus tickets in seconds. Travel with confidence. Experience comfort like never before.
            </p>

            {/* Search Form */}
            <div className="max-w-5xl mx-auto mb-12 animate-fadeInUp delay-300">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-indigo-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  {/* From */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 text-indigo-600" />
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="Mumbai"
                      value={searchData.from}
                      onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>

                  {/* To */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 text-indigo-600" />
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="Pune"
                      value={searchData.to}
                      onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      Journey Date
                    </label>
                    <input
                      type="date"
                      value={searchData.date}
                      onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      Passengers
                    </label>
                    <select
                      value={searchData.passengers}
                      onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 font-medium"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Bus className="w-5 h-5" />
                  Search Buses
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-16 animate-fadeInUp delay-400">
              <button className="px-10 py-5 bg-white text-gray-700 text-lg font-semibold rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Explore Popular Routes
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-2 animate-scaleIn delay-${(index + 1) * 100}`}
                >
                  <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3 animate-float" style={{animationDelay: `${index * 0.5}s`}} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0" style={isVisible[0] ? {animation: 'fadeInUp 0.6s ease-out forwards'} : {}}>
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              WHY SWIFTBUS
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              Travel Experience Redefined
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've thought of everything so you don't have to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`animate-on-scroll opacity-0 group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-4`}
                style={isVisible[index + 1] ? {
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                } : {}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-2xl shimmer"></div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0" style={isVisible[5] ? {animation: 'fadeInUp 0.6s ease-out forwards'} : {}}>
            <div className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-full text-sm font-semibold mb-4 shadow-md">
              TESTIMONIALS
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              Loved by Millions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={isVisible[index + 6] ? {
                  animation: `scaleIn 0.6s ease-out ${index * 0.15}s forwards`
                } : {}}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-500 fill-yellow-500 hover:scale-125 transition-transform duration-300" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform duration-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll opacity-0" style={isVisible[9] ? {animation: 'fadeInUp 0.8s ease-out forwards'} : {}}>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your Journey Today
          </h3>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join 10 million travelers who chose comfort, safety, and convenience
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-12 py-5 bg-white text-indigo-600 text-lg font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:scale-110 hover:rotate-2 flex items-center gap-2">
              Create Free Account
              <Check className="w-5 h-5" />
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:scale-110 hover:-rotate-2">
              Sign In
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            {['No booking fees', 'Instant confirmation', '24/7 support'].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Check className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-on-scroll opacity-0" style={isVisible[10] ? {animation: 'fadeInUp 0.6s ease-out forwards'} : {}}>
              <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl hover:scale-110 transition-transform duration-300 hover-wobble">
                  <Bus className="w-6 h-6 text-white group-hover:animate-bounce-subtle" />
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-xl font-bold group-hover:text-indigo-400 transition-colors duration-300">SwiftBus</span>
                  <p className="text-xs text-gray-400">Travel Reimagined</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">Making bus travel simple, safe, and smart for everyone.</p>
            </div>
            
            {[
              {title: 'Company', links: ['About Us', 'Careers', 'Press Kit', 'Blog']},
              {title: 'Support', links: ['Help Center', 'Contact Us', 'Safety', 'Terms']},
              {title: 'Download App', links: null}
            ].map((section, sIndex) => (
              <div 
                key={sIndex}
                className="animate-on-scroll opacity-0"
                style={isVisible[11 + sIndex] ? {animation: `fadeInUp 0.6s ease-out ${sIndex * 0.1}s forwards`} : {}}
              >
                <h5 className="font-bold mb-4 text-lg">{section.title}</h5>
                {section.links ? (
                  <ul className="space-y-3 text-gray-400">
                    {section.links.map((link, lIndex) => (
                      <li key={lIndex}>
                        <a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-3">
                    {['App Store', 'Google Play'].map((store, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="block px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 text-center font-semibold hover:scale-105"
                      >
                        {store}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <p>&copy; 2025 SwiftBus. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookie Policy'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
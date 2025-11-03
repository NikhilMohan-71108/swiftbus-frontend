import React, { useState, useEffect } from 'react';
import { Bus } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
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

  const footerSections = [
    { title: 'Company', links: ['About Us', 'Careers', 'Press Kit', 'Blog'] },
    { title: 'Support', links: ['Help Center', 'Contact Us', 'Safety', 'Terms'] },
    { title: 'Download App', links: null }
  ];

  const legalLinks = ['Privacy', 'Terms', 'Cookie Policy'];

  return (
    <>
      <style>{`
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
        
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .hover-wobble:hover {
          animation: wobble 0.5s ease-in-out;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>

      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div 
              className="animate-on-scroll opacity-0" 
              style={isVisible[0] ? { animation: 'fadeInUp 0.6s ease-out forwards' } : {}}
            >
              <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl hover:scale-110 transition-transform duration-300 hover-wobble">
                  <Bus className="w-6 h-6 text-white group-hover:animate-bounce-subtle" />
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-xl font-bold group-hover:text-indigo-400 transition-colors duration-300">
                    SwiftBus
                  </span>
                  <p className="text-xs text-gray-400">Travel Reimagined</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making bus travel simple, safe, and smart for everyone.
              </p>
            </div>
            
            {/* Footer Sections */}
            {footerSections.map((section, sIndex) => (
              <div 
                key={sIndex}
                className="animate-on-scroll opacity-0"
                style={isVisible[sIndex + 1] ? { 
                  animation: `fadeInUp 0.6s ease-out ${sIndex * 0.1}s forwards` 
                } : {}}
              >
                <h5 className="font-bold mb-4 text-lg">{section.title}</h5>
                {section.links ? (
                  <ul className="space-y-3 text-gray-400">
                    {section.links.map((link, lIndex) => (
                      <li key={lIndex}>
                        <a 
                          href="#" 
                          className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                        >
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
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <p>&copy; 2025 SwiftBus. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
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
    </>
  );
}
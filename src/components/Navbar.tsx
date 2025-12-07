import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../App';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageType }[] = [
    { name: 'Início', id: 'home' },
    { name: 'Tecnologia', id: 'technology' },
    { name: 'Produtos', id: 'products' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Contato', id: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
  };

  // Determine text color based on scroll and current page
  // If we are on 'home' and not scrolled, text is white. Otherwise dark.
  const isTransparent = currentPage === 'home' && !scrolled;
  const textColorClass = isTransparent ? 'text-white' : 'text-slate-800';
  const logoColorClass = isTransparent ? 'text-white' : 'text-slate-800';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${logoColorClass}`}>
            Filtratech
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors relative ${
                currentPage === link.id 
                  ? 'text-blue-500 font-bold' 
                  : `${isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500" 
                />
              )}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
              isTransparent
                ? 'bg-white text-blue-900 hover:bg-blue-50'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Orçamento
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden border-t border-slate-100"
          >
            <div className="flex flex-col px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg font-medium text-left ${
                    currentPage === link.id ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
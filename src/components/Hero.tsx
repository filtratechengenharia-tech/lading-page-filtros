import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageType } from '../App';

interface HeroProps {
  onNavigate?: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 -mt-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
        <img 
          src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2574&auto=format&fit=crop" 
          alt="Water background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">TECNOLOGIA CERTIFICADA ISO 9001</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              A pureza que sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                família merece.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Sistemas de filtragem molecular avançados que eliminam 99,9% das impurezas. 
              Transforme a água da torneira em uma fonte de saúde e vitalidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate?.('products')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-gray-900"
              >
                Ver Modelos
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate?.('technology')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 transition-all duration-200 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-slate-700"
              >
                Como Funciona
              </button>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1544985368-a46c3746c073?q=80&w=2669&auto=format&fit=crop" 
                  alt="Água sendo servida" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                     <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-white">7+</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Níveis de Filtragem</p>
                          <p className="text-slate-300 text-sm">Tecnologia Alcalina + UV</p>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
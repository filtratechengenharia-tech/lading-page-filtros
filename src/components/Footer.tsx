import React from 'react';
import { Facebook, Instagram, Linkedin, Droplets } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-white">
              <Droplets className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">Filtratech</span>
            </div>
            <p className="text-sm">
              Tecnologia de ponta para purificação de água. Transformando vidas através da saúde hídrica desde 2010.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate?.('products')} className="hover:text-blue-400 transition-colors text-left">Residencial Slim</button></li>
              <li><button onClick={() => onNavigate?.('products')} className="hover:text-blue-400 transition-colors text-left">Linha Pro UV</button></li>
              <li><button onClick={() => onNavigate?.('products')} className="hover:text-blue-400 transition-colors text-left">Filtros Centrais</button></li>
              <li><button onClick={() => onNavigate?.('products')} className="hover:text-blue-400 transition-colors text-left">Refis e Peças</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-blue-400 transition-colors text-left">Sobre Nós</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-blue-400 transition-colors text-left">Certificações</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-blue-400 transition-colors text-left">Suporte</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-blue-400 transition-colors text-left">Carreiras</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Filtratech Ambiental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
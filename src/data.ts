import { Users, Droplet, Award, Clock, Filter, RotateCcw, Microscope, Zap, Home, Building } from 'lucide-react';

// --- CONTATO E GERAL ---
export const contactInfo = {
  phone: "0800 123 4567",
  email: "contato@filtratech.com.br",
  address: "Av. Paulista, 1000 - São Paulo, SP",
  whatsapp: "(11) 99999-9999"
};

// --- ESTATÍSTICAS (Stats.tsx) ---
export const statsData = [
  { icon: Users, value: "15.000+", label: "Famílias Atendidas" },
  { icon: Droplet, value: "5 Milhões", label: "Litros Purificados/Dia" },
  { icon: Award, value: "ISO 9001", label: "Certificação Internacional" },
  { icon: Clock, value: "24/7", label: "Suporte Técnico" },
];

// --- TECNOLOGIA (Technology.tsx) ---
export const techSteps = [
  {
    icon: Filter,
    title: "1. Polipropileno",
    desc: "Retenção física de partículas sólidas como barro, areia e ferrugem de até 5 mícrons.",
    color: "bg-orange-500"
  },
  {
    icon: RotateCcw,
    title: "2. Carvão Ativado",
    desc: "Redução do cloro livre, sabores e odores desagradáveis através de adsorção química.",
    color: "bg-gray-800"
  },
  {
    icon: Microscope,
    title: "3. Membrana UF",
    desc: "Ultrafiltração de fibra oca que remove 99.9% de bactérias e vírus da água.",
    color: "bg-blue-600"
  },
  {
    icon: Zap,
    title: "4. Mineralização + UV",
    desc: "Adição de cálcio e magnésio, finalizando com esterilização por luz ultravioleta.",
    color: "bg-purple-600"
  }
];

// --- PRODUTOS (Products.tsx) ---
export const productsData = [
  // Residential
  {
    id: 1,
    name: "Filtratech Slim",
    category: "residential",
    price: "R$ 699,00",
    description: "Ideal para apartamentos e pequenos escritórios. Design compacto que cabe em qualquer lugar.",
    features: ["Filtragem em 3 estágios", "Vazão de 60L/hora", "Design Ultra-fino", "Instalação 'Faça você mesmo'"],
    image: "https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?q=80&w=2670&auto=format&fit=crop",
    popular: false
  },
  {
    id: 2,
    name: "Filtratech Pro UV",
    category: "residential",
    price: "R$ 1.299,00",
    description: "A escolha definitiva para famílias. Inclui esterilização UV e mineralização alcalina.",
    features: ["Filtragem em 5 estágios", "Esterilização UV Automática", "Água Alcalina (pH 8.5+)", "Painel Digital Touch"],
    image: "https://images.unsplash.com/photo-1585832770485-e68a5db8e155?q=80&w=2670&auto=format&fit=crop",
    popular: true
  },
  // Corporate / Commercial
  {
    id: 3,
    name: "Office Tower 500",
    category: "corporate",
    price: "R$ 3.590,00",
    description: "Alta capacidade para escritórios e clínicas. Água gelada e quente instantânea.",
    features: ["Atende até 50 pessoas", "Compressor Eco-friendly", "3 temperaturas", "Design em Aço Inox"],
    image: "https://images.unsplash.com/photo-1517056636733-149eb070d69f?q=80&w=2670&auto=format&fit=crop",
    popular: false
  },
  {
    id: 4,
    name: "Central Home",
    category: "residential",
    price: "Sob Consulta",
    description: "Solução completa para toda a residência. Água filtrada em todas as torneiras e chuveiros.",
    features: ["Sistema POE (Ponto de Entrada)", "Retrolavagem Automática", "Alta Vazão (2000L/hora)", "Proteção Anti-calcário"],
    image: "https://images.unsplash.com/photo-1606828859942-8700d8329b35?q=80&w=2574&auto=format&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Industrial Max",
    category: "corporate",
    price: "Sob Consulta",
    description: "Sistemas robustos para restaurantes, hotéis e hospitais. Qualidade máxima em grande escala.",
    features: ["Osmose Reversa Industrial", "Tanque de Pressão 100L", "Monitoramento via App", "Manutenção Preventiva Inclusa"],
    image: "https://images.unsplash.com/photo-1533580572719-c8529285090f?q=80&w=2670&auto=format&fit=crop",
    popular: false
  }
];

export const productCategories = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'residential', label: 'Residencial', icon: Home },
  { id: 'corporate', label: 'Empresarial', icon: Building }
];

// --- FAQ (Contact.tsx) ---
export const faqData = [
  { q: "Qual a durabilidade do refil?", a: "Nossos refis possuem tecnologia de longa duração, com vida útil média de 12 meses ou 3.000 litros, o que ocorrer primeiro." },
  { q: "A instalação é difícil?", a: "Não! O modelo Slim e Pro são 'Plug & Play'. Enviamos um kit completo e vídeo tutorial. Para a Central Home, recomendamos um encanador." },
  { q: "Remove o flúor da água?", a: "Sim, a tecnologia de osmose reversa (presente na linha Industrial) remove flúor. A linha residencial foca em manter sais minerais benéficos." },
  { q: "Vocês atendem em todo o Brasil?", a: "Sim, enviamos para todo o território nacional via transportadora expressa com seguro." }
];
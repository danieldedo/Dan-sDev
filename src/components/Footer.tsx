import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="mt-20 border-t border-white/5 bg-base-200/30 backdrop-blur-xl relative">
            {/* Bouton Retour en haut */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <motion.button 
                    whileHover={{ y: -5 }}
                    onClick={scrollToTop}
                    className="btn btn-circle btn-accent shadow-lg shadow-accent/20 border-0"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Colonne Logo & Texte */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold italic mb-4">
                            Dan'<span className="text-accent">sDev</span>
                        </h2>
                        <p className="text-base-content/60 max-w-sm leading-relaxed">
                            Ingénieur Backend & Fullstack passionné. Je bâtis des infrastructures solides et des expériences numériques de haute qualité.
                        </p>
                    </div>

                    {/* Colonne Navigation */}
                    <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent">Navigation</h3>
                        <nav className="flex flex-col gap-4">
                            <a href="#Home" className="text-sm text-base-content/70 hover:text-accent transition-colors">Accueil</a>
                            <a href="#Services" className="text-sm text-base-content/70 hover:text-accent transition-colors">Services</a>
                            <a href="#About" className="text-sm text-base-content/70 hover:text-accent transition-colors">À propos</a>
                            <a href="#Experiences" className="text-sm text-base-content/70 hover:text-accent transition-colors">Expériences</a>
                            <a href="#Project" className="text-sm text-base-content/70 hover:text-accent transition-colors">Projets</a>
                        </nav>
                    </div>

                    {/* Colonne Contact & Social */}
                    <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent">Contact</h3>
                        <div className="flex flex-col gap-6">
                            <a href="mailto:danieldedo182@gmail.com" className="text-sm text-base-content/70 hover:text-accent transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" /> danieldedo182@gmail.com
                            </a>
                            <div className="flex gap-4">
                                <a href="https://github.com/danieldedo" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-base-300/50 hover:bg-accent hover:text-white transition-all duration-300 border border-white/5">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/daniel-dedo" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-base-300/50 hover:bg-accent hover:text-white transition-all duration-300 border border-white/5">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2.5 rounded-xl bg-base-300/50 hover:bg-accent hover:text-white transition-all duration-300 border border-white/5">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-base-content/40 font-medium">
                    <p>© {currentYear} Daniel O. DEDO — Tous droits réservés.</p>
                    <p className="flex items-center gap-2">
                        Conçu avec <span className="text-accent animate-pulse">❤️</span> au Bénin
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mt-20 border-t border-white/5 bg-base-200/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-5 py-12 flex flex-col items-center">
                <h2 className="text-2xl font-bold italic mb-6">
                    Dan'<span className="text-accent">sDev</span>
                </h2>
                
                <nav className="flex flex-wrap justify-center gap-8 mb-8">
                    <a href="#Home" className="text-sm hover:text-accent transition-colors">Accueil</a>
                    <a href="#About" className="text-sm hover:text-accent transition-colors">À propos</a>
                    <a href="#Experiences" className="text-sm hover:text-accent transition-colors">Expériences</a>
                    <a href="#Project" className="text-sm hover:text-accent transition-colors">Projets</a>
                </nav>
                
                <div className="flex gap-6 mb-8">
                    <a href="https://github.com/danieldedo" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-base-300 hover:bg-accent hover:text-accent-content transition-all duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/daniel-dedo" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-base-300 hover:bg-accent hover:text-accent-content transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-base-300 hover:bg-accent hover:text-accent-content transition-all duration-300">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:danieldedo182@gmail.com" className="p-3 rounded-full bg-base-300 hover:bg-accent hover:text-accent-content transition-all duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
                
                <div className="text-center text-sm text-base-content/50">
                    <p>© {currentYear} Daniel O. DEDO. Fait avec ❤️ et React.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import Title from "./Title";
import { motion } from "framer-motion";
import { Github, Video } from "lucide-react";

import imgNews from '../assets/projects/news_portal.png';
import imgBenin from '../assets/projects/informatique_benin.png';
import imgWeather from '../assets/projects/weather_app.png';
import imgAcademia from '../assets/projects/academiaplus.png';
import imgPortfolio from '../assets/projects/portfolio_v2.png';

const projects = [
    {
        id: 1,
        title: 'Portail d\'Actualités "News TV"',
        description: 'Une plateforme dynamique de gestion d\'articles avec sidebar personnalisée, diffusion en direct et interface ultra-réactive.',
        technologies: ['React', 'Tailwind CSS', 'Node.js'],
        demoLink: '#',
        repoLink: '#',
        image: imgNews,
    },
    {
        id: 2,
        title: 'AcademiaPlus',
        description: 'Système complet de gestion académique permettant le suivi des étudiants, la gestion des dossiers et le pilotage administratif.',
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        demoLink: '#',
        repoLink: '#',
        image: imgAcademia,
    },
    {
        id: 3,
        title: 'Informatique Bénin',
        description: 'La plateforme IT N°1 au Bénin pour propulser les carrières numériques et connecter les talents aux meilleures opportunités.',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: imgBenin,
    },
    {
        id: 4,
        title: 'Météo App',
        description: 'Application de prévisions météorologiques précises avec géolocalisation, interface intuitive et prévisions sur 5 jours.',
        technologies: ['JavaScript', 'API OpenWeather', 'CSS3'],
        demoLink: '#',
        repoLink: '#',
        image: imgWeather,
    },
    {
        id: 5,
        title: 'Portfolio Professionnel v2',
        description: 'Mon propre portfolio moderne, conçu avec une esthétique premium, des animations avancées et un système de thèmes dynamique.',
        technologies: ['React 19', 'Framer Motion', 'Tailwind 4'],
        demoLink: '#',
        repoLink: '#',
        image: imgPortfolio,
    },
];

const Projects = () => {
    return (
        <section className="mt-20" id="Project">
            <Title title="Mes Projets" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass-card flex flex-col h-full rounded-3xl overflow-hidden group border border-white/5 shadow-2xl"
                    >
                        {/* Image avec Overlay au survol */}
                        <div className="relative overflow-hidden h-52">
                            <img 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src={project.image} 
                                alt={project.title} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-xs font-medium">Voir les détails</span>
                            </div>
                        </div>

                        {/* Contenu */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-base-content/70 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-full border border-accent/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Liens */}
                            <div className="flex items-center gap-3 mt-auto">
                                <a 
                                    href={project.demoLink} 
                                    className="flex-1 btn btn-accent btn-sm rounded-xl gap-2"
                                >
                                    Démo <Video className="w-4 h-4"/>
                                </a>
                                <a 
                                    href={project.repoLink} 
                                    className="btn btn-neutral btn-sm rounded-xl px-3"
                                    aria-label="Code Source"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects;

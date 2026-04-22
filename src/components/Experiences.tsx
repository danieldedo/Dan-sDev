import Title from "./Title";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiAngular, 
  SiTypescript, 
  SiLaravel, 
  SiPhp, 
  SiSpringboot, 
  SiSymfony, 
  SiPostgresql,
  SiNestjs
} from "react-icons/si";

const skills = [
  { id: 1, name: "React / Next.js", icon: <SiNextdotjs className="w-10 h-10 text-base-content" />, color: "currentColor" },
  { id: 2, name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-[#339933]" />, color: "#339933" },
  { id: 3, name: "NestJS", icon: <SiNestjs className="w-10 h-10 text-[#E0234E]" />, color: "#E0234E" },
  { id: 4, name: "Angular", icon: <SiAngular className="w-10 h-10 text-[#DD0031]" />, color: "#DD0031" },
  { id: 5, name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-[#3178C6]" />, color: "#3178C6" },
  { id: 6, name: "Laravel", icon: <SiLaravel className="w-10 h-10 text-[#FF2D20]" />, color: "#FF2D20" },
  { id: 7, name: "Symfony", icon: <SiSymfony className="w-10 h-10 text-base-content" />, color: "currentColor" },
  { id: 8, name: "Spring Boot", icon: <SiSpringboot className="w-10 h-10 text-[#6DB33F]" />, color: "#6DB33F" },
  { id: 9, name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" />, color: "#4169E1" },
];

const experiences = [
  {
    id: 1,
    role: "Développeur Full Stack",
    company: "HSMC",
    period: "Mars 2025 - Présent",
    description: [
      "Prise en main de l'ERP Odoo : architecture et modules fonctionnels.",
      "Maintenance et évolution de projets Next.js et Laravel.",
      "Gestion de bases de données MySQL et développement frontend avec React.js.",
    ],
  },
  {
    id: 2,
    role: "Développeur Full Stack (Freelance)",
    company: "VNB-IT",
    period: "Jan 2025 - Avril 2025",
    description: [
      "Intégration de maquettes Figma en composants React Native.",
      "Développement d'APIs REST sécurisées en Node.js.",
      "Gestion de base de données PostgreSQL et architecture backend.",
    ],
  },
  {
    id: 3,
    role: "Développeur Full Stack",
    company: "EDS TELECOM & CONSULTING",
    period: "Février 2024 - Janvier 2025",
    description: [
      "Conception et développement d'applications web avec Angular et Node.js.",
      "Gestion de bases de données PostgreSQL et MySQL.",
      "Collaboration technique pour définir les spécifications et livrer dans les délais.",
    ],
  },
  {
    id: 4,
    role: "Développeur Web",
    company: "FORMAT+",
    period: "Janvier 2024",
    description: [
      "Développement de fonctionnalités web avec PHP.",
      "Intégration de templates Bootstrap.",
      "Réponse aux besoins spécifiques des clients."
    ],
  },
  {
    id: 5,
    role: "Développeur Web (Freelance)",
    company: "NET2ALL",
    period: "Mai 2023 - Juillet 2023",
    description: [
      "Développement de fonctionnalités avec Symfony.",
      "Création d'une plateforme d'intelligence économique gratuite pour les entreprises.",
      "Intégration de templates complexes aux projets."
    ],
  },
  {
    id: 6,
    role: "Développeur Web",
    company: "Fractal in",
    period: "Janvier 2023 - Mars 2023",
    description: [
      "Création d'applications de gestion des citoyens en PHP.",
      "Développement d'applications de gestion des recettes et des employés avec Symfony.",
      "Introduction approfondie au framework Symfony."
    ],
  },
];

const Experiences = () => {
  return (
    <section className="mt-20" id="Experiences">
      <Title title="Compétences & Parcours" />

      {/* Grille des Compétences - Utilisation de React Icons */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mt-10 mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 p-3 rounded-xl bg-base-200 border border-white/5 shadow-md group-hover:border-accent/50 transition-all flex justify-center items-center">
               {skill.icon}
            </div>
            <span className="mt-2 text-[10px] font-bold uppercase text-base-content/40 group-hover:text-accent transition-colors text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Timeline Chronologique */}
      <div className="relative max-w-6xl mx-auto">
        {/* Ligne centrale */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/20"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Point sur la ligne */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-base-100 z-10"></div>

              {/* Contenu de l'expérience */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="glass-card p-6 rounded-2xl hover:border-accent/30 transition-all group">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm font-semibold text-base-content/60 mb-4 italic">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm text-base-content/70 flex items-start gap-2">
                        <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Espace vide pour l'autre côté sur desktop */}
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

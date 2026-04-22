import Title from "./Title";
import img from "../assets/avatar.png";
import { GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "Formation Académique",
    description: "Titulaire d'une Licence en Informatique, Réseaux et Télécommunications, option Architecture Logicielle.",
    icon: <GraduationCap className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Expertise Backend",
    description: "Certifié en développement Backend et API (FreeCodeCamp) et formé aux pratiques DevOps/SRE (Linux Foundation).",
    icon: <Award className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Développement Fullstack",
    description: "Maîtrise du cycle de vie complet des applications, de l'intégration Figma à la mise en place d'architectures scalables.",
    icon: <Code2 className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <section className="p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <img 
            src={img} 
            alt="Daniel O. DEDO" 
            className="w-96 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" 
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="glass-card flex flex-col md:flex-row items-center p-6 rounded-2xl md:w-[450px] transition-all"
            >
              <div className="mb-4 md:mb-0 bg-accent/10 p-4 rounded-xl">
                {section.icon}
              </div>

              <div className="md:ml-6 text-center md:text-left">
                <h2 className="text-xl font-bold mb-2 text-accent">{section.title}</h2>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

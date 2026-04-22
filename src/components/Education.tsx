import Title from "./Title";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    id: 1,
    title: "Introduction to DevOps and SRE (LFS162)",
    institution: "The Linux Foundation",
    date: "Juin 2025",
    description: "Formation approfondie sur les pratiques DevOps, l'automatisation et la fiabilité des sites.",
  },
  {
    id: 2,
    title: "Certification Backend & API",
    institution: "FreeCodeCamp",
    date: "2025",
    description: "Spécialisation dans le développement d'architectures serveurs et d'APIs performantes.",
  },
  {
    id: 3,
    title: "Licence en Informatique, Réseaux et Télécoms",
    institution: "ESGIS, Bénin",
    date: "2023",
    description: "Option Architecture Logicielle. Acquisition des bases solides en algorithmique, réseaux et génie logiciel.",
  },
];

const Education = () => {
  return (
    <section className="py-20" id="Education">
      <Title title="Formation & Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-6 rounded-3xl relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <GraduationCap className="text-accent w-6 h-6" />
              </div>
              <span className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
                <Calendar className="w-3 h-3" /> {item.date}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-base-content/60 mb-3">
              {item.institution}
            </p>
            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

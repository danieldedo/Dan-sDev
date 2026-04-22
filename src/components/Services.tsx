import { Code2, Smartphone, Database, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

const services = [
  {
    id: 1,
    title: "Développement Web",
    description: "Conception d'applications web modernes et performantes avec React, Next.js, Angular, Symfony ou Laravel.",
    icon: <Code2 className="w-10 h-10 text-accent" />,
  },
  {
    id: 2,
    title: "Développement Mobile",
    description: "Création d'applications mobiles hybrides fluides et réactives en utilisant React Native pour iOS et Android.",
    icon: <Smartphone className="w-10 h-10 text-accent" />,
  },
  {
    id: 3,
    title: "Architecture Backend",
    description: "Mise en place d'APIs REST et GraphQL sécurisées, scalables et robustes avec Node.js, Spring Boot ou PHP.",
    icon: <Database className="w-10 h-10 text-accent" />,
  },
  {
    id: 4,
    title: "DevOps & ERP",
    description: "Automatisation des déploiements (CI/CD), gestion d'infrastructure et maintenance technique de solutions ERP comme Odoo.",
    icon: <Settings className="w-10 h-10 text-accent" />,
  },
];

const Services = () => {
  return (
    <section className="py-20" id="Services">
      <Title title="Mes Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group"
          >
            <div className="mb-6 p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

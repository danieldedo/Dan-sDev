import { Mail } from "lucide-react";
import img from "../assets/avatar.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-between items-center md:my-32 my-10 gap-10"
      id="Home"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left leading-tight">
          Bonjour, <br /> je suis <span className="text-accent">Daniel O. DEDO</span>
        </h1>
        <p className="my-6 text-xl text-center md:text-left text-base-content/80 leading-relaxed font-medium">
          Ingénieur orienté <span className="text-primary font-bold">Backend</span>, je me spécialise dans la conception d'architectures robustes, performantes et sécurisées. Ma mission : bâtir le socle technique essentiel qui propulse vos solutions numériques.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="#Contact"
            className="btn btn-accent btn-lg shadow-lg shadow-accent/20"
          >
            <Mail className="w-5 h-5" />
            Discutons de votre projet
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Un petit cercle décoratif derrière l'image */}
        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>

        <motion.img
          src={img}
          alt="Daniel O. DEDO Avatar"
          className="w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-accent shadow-2xl relative z-10"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33% ",
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0], 
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home;

import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const navLinks = [
    { name: "Accueil", href: "#Home" },
    { name: "Services", href: "#Services" },
    { name: "À propos", href: "#About" },
    { name: "Expériences", href: "#Experiences" },
    { name: "Formation", href: "#Education" },
    { name: "Projets", href: "#Project" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav className="glass-navbar px-5 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold italic"
        >
          Dan'<span className="text-accent">sDev</span>
        </motion.h1>

        <ul className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={link.href} 
                className="text-sm font-medium hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Bouton pour mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button className="btn btn-ghost btn-sm">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

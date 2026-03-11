import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVars = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>KR</h2>
        </motion.div>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.ul
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          variants={menuVars}
          initial="hidden"
          animate={isDesktop || isOpen ? 'visible' : 'hidden'}
        >
          <motion.li variants={itemVars}>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          </motion.li>
          <motion.li variants={itemVars}>
            <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
          </motion.li>
          <motion.li variants={itemVars}>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          </motion.li>
          <motion.li variants={itemVars}>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </motion.li>
          <motion.li variants={itemVars}>
            <a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
          </motion.li>
          <motion.li variants={itemVars}>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.li>
        </motion.ul>

        <motion.button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>
      </div>
    </motion.nav>
  );
}

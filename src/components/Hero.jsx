import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-image-container" variants={itemVariants}>
          <motion.img
            src="/profile.jpg"
            alt="Kumar Rishikesh"
            className="profile-image"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="image-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Hi, I'm <span className="highlight">Kumar Rishikesh</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Full Stack Web Developer
        </motion.p>

        <motion.p variants={itemVariants} className="hero-description">
          I build beautiful, responsive web applications with modern technologies
          and clean code. Passionate about creating amazing user experiences.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <motion.a
            href="https://github.com/321Rishikesh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kumar-rishikesh62/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://x.com/RishikeshK5164"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter"
          >
            <span>Twitter</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/rishikesh__ydv__?igsh=MTc2enN6cHoyeWQ2eA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Instagram"
          >
            <span>Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}

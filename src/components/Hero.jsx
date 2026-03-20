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
        <div className="hero-grid">
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
            <div className="image-glow" aria-hidden="true" />
          </motion.div>

          <motion.div className="hero-text" variants={itemVariants}>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>
              Kumar <span className="highlight">Rishikesh</span>
            </h1>

            <p className="hero-subtitle">Aspiring Full Stack Web Developer</p>

            <p className="hero-description">
              I build beautiful, responsive web applications with modern technologies
              and clean code. Passionate about creating amazing user experiences.
            </p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(63, 181, 255, 0.45)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(63, 181, 255, 0.45)' }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
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
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.9.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.02 10.02 0 0022 12.24C22 6.58 17.52 2 12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="social-label">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kumar-rishikesh62/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M4.98 3.5C3.33 3.5 2 4.85 2 6.5s1.33 3 2.98 3 3-1.35 3-3-1.33-3-3-3zM2.4 20.5h5.16V9.5H2.4v11zM9.6 9.5v11h5.16v-6.1c0-1.63.3-3.2 2.32-3.2 2 0 2.02 1.87 2.02 3.3v6h5.1v-7c0-3.44-.74-6.08-4.76-6.08-1.93 0-3.22 1.06-3.75 2.06h-.07V9.5H9.6z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="social-label">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://x.com/RishikeshK5164"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M18.9 2h3.2l-7 8 8.2 12h-6.4l-5-7.4-6.2 7.4H2.5l7.5-8.9L2 2h6.6l4.5 6.7L18.9 2zm-1.1 18h1.8L7.8 4H5.9l11.9 16z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="social-label">Twitter</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/rishikesh__ydv__?igsh=MTc2enN6cHoyeWQ2eA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 7.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zm5.2-7.9a1.12 1.12 0 11-1.12-1.12 1.12 1.12 0 011.12 1.12z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.7 2.5H7.3A4.8 4.8 0 002.5 7.3v9.4a4.8 4.8 0 004.8 4.8h9.4a4.8 4.8 0 004.8-4.8V7.3a4.8 4.8 0 00-4.8-4.8zm3.1 14.2a3.1 3.1 0 01-3.1 3.1H7.3a3.1 3.1 0 01-3.1-3.1V7.3a3.1 3.1 0 013.1-3.1h9.4a3.1 3.1 0 013.1 3.1z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="social-label">Instagram</span>
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/rishikeshkumar43210/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LeetCode"
              >
                <span className="social-icon leetcode-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
                    <path
                      d="M9.45 3.4l2.12-2.12a1 1 0 011.41 0l1.04 1.04a1 1 0 010 1.41L11.9 5.65"
                      fill="#F59F0B"
                    />
                    <path
                      d="M12.9 5.65l-1.56 1.56a1 1 0 01-1.41 0l-1.04-1.04a1 1 0 010-1.41L10.45 3.2"
                      fill="#F59F0B"
                    />
                    <path
                      d="M8.2 7.85l-2.7 2.7a4.6 4.6 0 000 6.5l2.95 2.95a4.6 4.6 0 006.5 0l2.3-2.3"
                      fill="none"
                      stroke="#F59F0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12h-7.2"
                      fill="none"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="social-label">LeetCode</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
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

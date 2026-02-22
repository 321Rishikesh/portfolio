import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="header-underline"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            I'm a passionate full-stack web developer with expertise in building scalable,
            user-friendly web applications. With a strong foundation in both frontend and
            backend technologies, I love turning ideas into reality through clean code and
            innovative solutions.
          </p>
          <p>
            My journey in web development started with a curiosity about how websites work,
            and it has evolved into a career where I continuously learn and adapt to new
            technologies and best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech trends, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div className="about-highlights" variants={itemVariants}>
          <motion.div
            className="highlight-box"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
          >
            <h3>🎯 Focus</h3>
            <p>User-centric design and clean architecture</p>
          </motion.div>
          <motion.div
            className="highlight-box"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
          >
            <h3>⚡ Performance</h3>
            <p>Fast, responsive, and optimized applications</p>
          </motion.div>
          <motion.div
            className="highlight-box"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
          >
            <h3>🔒 Quality</h3>
            <p>Well-tested code and best practices</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

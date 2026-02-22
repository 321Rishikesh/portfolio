import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Authentication']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Webpack', 'VS Code']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
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
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.map((category, idx) => (
          <motion.div key={idx} className="skill-category" variants={itemVariants}>
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-tag"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: '#6366f1'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    •
                  </motion.span>
                  {' '}{skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="skills-chart"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>Proficiency</h3>
        <div className="proficiency-list">
          {[
            { name: 'Frontend Development', level: 95 },
            { name: 'Backend Development', level: 90 },
            { name: 'Full Stack Development', level: 92 },
            { name: 'Problem Solving', level: 88 }
          ].map((item, idx) => (
            <motion.div key={idx} className="proficiency-item">
              <span className="proficiency-label">{item.name}</span>
              <div className="proficiency-bar">
                <motion.div
                  className="proficiency-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="proficiency-number">{item.level}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

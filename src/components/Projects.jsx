import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'YouTube Clone',
      description: 'A fully functional YouTube clone application featuring video browsing, search functionality, and video playback capabilities. Built with modern web technologies for seamless user experience.',
      technologies: ['React', 'Node.js', 'API Integration', 'Video Streaming'],
      image: '/image/youtube.png',
      link: 'https://youtube-c-three.vercel.app/',
      source: 'https://github.com/321Rishikesh/youtube-c'
    },
    {
      id: 2,
      title: 'Srijan Labs',
      description: 'An innovative web application showcasing modern development practices and cutting-edge technologies. Features interactive components and responsive design for optimal user engagement.',
      technologies: ['React', 'Tailwind CSS', 'Modern JavaScript', 'Web Design'],
      image: '/image/srijan.png',
      link: 'https://srijanlabs.vercel.app/',
      source: 'https://github.com/321Rishikesh/Srijan_Lab'
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
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
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
          >
            <motion.div
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
            >
              <img src={project.image} alt={project.title} />
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </motion.div>
            </motion.div>

            <div className="project-content">
              <motion.h3
                whileHover={{ color: '#6366f1' }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="tech-badge"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {project.source && (
                <a
                  className="project-source"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Interested in seeing more projects?</p>
        <motion.a
          href="https://github.com/321Rishikesh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit My GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}

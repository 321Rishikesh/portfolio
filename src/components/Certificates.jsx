import { motion } from 'framer-motion';
import './Certificates.css';

export default function Certificates() {
  const training = [
    {
      id: 'mern-training',
      title: 'MERN Full-Stack Development',
      provider: 'Programming Pathshala',
      duration: 'Jun 2025 – Jul 2025'
    }
  ];

  const certificates = [
    {
      id: 'no-code-tools',
      title: 'No-Code Tools',
      file: '/certificates/no-code-tools.pdf',
      tags: ['No-Code', 'Tools']
    },
    {
      id: 'ai-generative-ai-tools',
      title: 'AI: Generative AI Tools',
      file: '/certificates/ai-generative-ai-tools.pdf',
      tags: ['AI', 'Generative AI']
    },
    {
      id: 'ai-essentials-for-beginners',
      title: 'AI Essentials for Beginners',
      file: '/certificates/ai-essentials-for-beginners.pdf',
      tags: ['AI', 'Fundamentals']
    },
    {
      id: 'automata',
      title: 'Automata',
      file: '/certificates/automata.pdf',
      tags: ['CS', 'Theory']
    },
    {
      id: 'mooc-fb6sdz7-certificate',
      title: 'MOOC Certificate',
      file: '/certificates/mooc-fb6sdz7-certificate.pdf',
      tags: ['MOOC']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 110, damping: 16 }
    }
  };

  return (
    <section id="certificates" className="certificates">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Training & Certificates
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
        className="training-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="subsection-heading">
          <span className="subsection-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M4 5.5C4 4.12 5.12 3 6.5 3H20v14h-1.5c-1.38 0-2.5 1.12-2.5 2.5V21H6.5C5.12 21 4 19.88 4 18.5V5.5zm13.5 10.1V5H6.5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1H16v-.5c0-1.22.56-2.3 1.5-2.9z" />
            </svg>
          </span>
          <h3>Training</h3>
        </div>

        <div className="training-grid">
          {training.map((item) => (
            <motion.article
              key={item.id}
              className="training-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="training-title">{item.title}</div>
              <div className="training-provider">{item.provider}</div>
              <div className="training-duration">{item.duration}</div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="certificates-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {certificates.map((cert) => (
          <motion.article
            key={cert.id}
            className="certificate-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            role="link"
            tabIndex={0}
            onClick={() => window.open(cert.file, '_blank', 'noopener,noreferrer')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                window.open(cert.file, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className="certificate-body">
              <div className="certificate-top">
                <div className="certificate-mark" aria-hidden="true">
                  <span>PDF</span>
                </div>
                <div className="certificate-meta">
                  <h3>{cert.title}</h3>
                  <div className="certificate-tags">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="certificate-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="certificate-actions">
                <motion.a
                  className="cert-action cert-view"
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  View
                </motion.a>
                <motion.a
                  className="cert-action cert-download"
                  href={cert.file}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  Download
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

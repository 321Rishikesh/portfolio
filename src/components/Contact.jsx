import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'rishikeshkumar43210@gmail.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rishikeshkumar43210@gmail.com', newTab: true },
    { icon: '📱', label: 'Phone', value: '+91 6200132407', link: 'tel:+916200132407' },
    { icon: '📍', label: 'Location', value: 'India', link: '#' }
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/321Rishikesh' },
    { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kumar-rishikesh62/' },
    { icon: '🐦', label: 'Twitter', url: 'https://x.com/RishikeshK5164' },
    { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/rishikesh__ydv__?igsh=MTc2enN6cHoyeWQ2eA%3D%3D&utm_source=qr' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="header-underline"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any opportunities, collaborations, or just to say hi!</p>

          <div className="info-items">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                className="info-item"
                target={info.newTab ? '_blank' : undefined}
                rel={info.newTab ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="info-icon">{info.icon}</span>
                <div className="info-content">
                  <p className="info-label">{info.label}</p>
                  <p className="info-value">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="social-section">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Name</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              whileFocus={{
                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
                borderColor: '#6366f1'
              }}
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email">Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              whileFocus={{
                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
                borderColor: '#6366f1'
              }}
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message">Message</label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
              whileFocus={{
                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
                borderColor: '#6366f1'
              }}
            />
          </motion.div>

          <motion.button
            type="submit"
            className={`btn btn-primary ${isSubmitted ? 'submitted' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 Kumar Rishikesh. All rights reserved.</p>
        <p>Built with React, Framer Motion, and Vite</p>
      </motion.footer>
    </section>
  );
}

import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/constants';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setStatus('');
        e.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Something went wrong. Please email directly.');
      setTimeout(() => setStatus(''), 5000);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStatus('');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | {personalInfo.name}</title>
      </Helmet>
      <section className="section" id="contact" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container">
          <div className="section-label">LET'S CONNECT</div>
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <p style={{ color: 'var(--on-surface-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
                I'm currently exploring new opportunities and would love to chat!
              </p>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ color: 'var(--primary)' }}><FaEnvelope /></div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value interactive">{personalInfo.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon" style={{ color: '#86efac' }}><FaMapMarkerAlt /></div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-value">{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="contact-socials" style={{ marginTop: '2rem' }}>
                {socialLinks.map(social => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link-btn interactive">
                    {social.name === 'LinkedIn' ? <FaLinkedin size={18} /> : <FaGithub size={18} />} {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="contact-form-wrap glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {isSubmitted ? (
                <Motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="success-message-container"
                  style={{ textAlign: 'center', padding: '2rem 1rem' }}
                >
                  <FaCheckCircle size={64} color="#86efac" style={{ marginBottom: '1.5rem', margin: '0 auto' }} />
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--on-surface)', margin: '1rem 0', fontFamily: 'var(--font-head)' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--on-surface-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    Thank you for reaching out. I'll get back to you as soon as possible, usually within 24 hours.
                  </p>
                  <button onClick={resetForm} className="btn btn-ghost interactive" type="button" style={{ margin: '0 auto' }}>
                    Submit Another Inquiry
                  </button>
                </Motion.div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY || ''} />
                  
                  <div className="form-group">
                    <input type="text" name="name" id="name" className="form-input" placeholder="Name" required />
                    <label htmlFor="name" className="form-label">Name</label>
                  </div>
                  
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-input" placeholder="Email" required />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                  
                  <div className="form-group">
                    <textarea name="message" id="message" className="form-input form-textarea" placeholder="Message" required></textarea>
                    <label htmlFor="message" className="form-label">Message</label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary interactive" style={{ width: '100%' }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                  <div className="form-status" style={{ color: status.includes('❌') ? '#fca5a5' : '#86efac' }}>{status}</div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

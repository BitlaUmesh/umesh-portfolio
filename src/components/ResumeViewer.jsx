import { useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';

export default function ResumeViewer({ isOpen, onClose, resumeUrl }) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div 
          className="resume-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 15, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <Motion.div 
            className="resume-modal-content glass-card"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              height: '85vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'var(--surface-high)'
            }}
          >
            <div className="resume-modal-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'rgba(0, 0, 0, 0.2)'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-head)' }}>Resume Preview</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={resumeUrl} download className="btn interactive" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', background: 'var(--surface-highest)' }}>
                  <FaDownload /> Download
                </a>
                <button onClick={onClose} className="btn interactive" style={{ padding: '0.4rem', background: 'transparent', color: 'var(--on-surface-muted)' }}>
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
            
            <object 
              data={`${resumeUrl}#toolbar=0`} 
              type="application/pdf" 
              width="100%" 
              height="100%"
              style={{ flex: 1 }}
            >
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem' }}>It appears your browser doesn't support built-in PDFs.</p>
                <a href={resumeUrl} className="btn btn-primary" download>Download PDF Instead</a>
              </div>
            </object>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

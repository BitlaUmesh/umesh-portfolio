import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        setPercent(100);
        clearInterval(interval);
      } else {
        setPercent(current);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0d0d1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#c4c0ff',
        fontFamily: "'Space Grotesk', monospace",
      }}
    >
      <div style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
        System Boot
      </div>
      <div
        style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #a78eff, #00d2ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
        }}
      >
        {percent}%
      </div>
      <div style={{ width: '200px', height: '2px', background: '#1e1e2c', marginTop: '2rem', overflow: 'hidden' }}>
        <motion.div
          animate={{ width: `${percent}%` }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          style={{ height: '100%', background: 'linear-gradient(135deg, #a78eff, #00d2ff)' }}
        />
      </div>
    </motion.div>
  );
}

import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Not Found | Bitla Umesh Kumar</title>
      </Helmet>
      <section className="section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: '-0.05em' }} className="gradient-text">
              404
            </h1>
            <div className="section-label" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Gradient Vanished</div>
            
            <p style={{ color: 'var(--on-surface-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              Fatal Error: The neural network failed to converge on the page you requested. It might have been deleted, or the route simply doesn't exist.
            </p>
            
            <Link to="/" className="btn btn-primary interactive" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Return to Safe Space
            </Link>
          </Motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

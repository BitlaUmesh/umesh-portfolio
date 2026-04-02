import { useEffect, useRef } from 'react';

const randomBetween = (a, b) => a + Math.random() * (b - a);

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }
  reset() {
    this.x = randomBetween(0, this.canvas.width);
    this.y = randomBetween(0, this.canvas.height);
    this.size = randomBetween(0.5, 2);
    this.speedX = randomBetween(-0.2, 0.2);
    this.speedY = randomBetween(-0.3, -0.05);
    this.alpha = randomBetween(0.2, 0.7);
    this.color = Math.random() > 0.5 ? '108,99,255' : '0,210,255';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < 0 || this.x < 0 || this.x > this.canvas.width) {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = `rgb(${this.color})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: Star[] = [];
    const numStars = 800;
    const centerX = width / 2;
    const centerY = height / 2;
    const focalLength = width * 2;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
        size: 1 + Math.random()
      });
    }

    let animationFrameId: number;

    const moveStars = () => {
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        // Move star closer
        star.z -= 0.5; // Speed

        // Reset if passed viewer
        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }
      }
    };

    const drawStars = () => {
      if (!ctx) return;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle Nebula gradient background
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      gradient.addColorStop(0, "rgba(20, 10, 40, 0.4)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        const x = (star.x / star.z) * focalLength + centerX;
        const y = (star.y / star.z) * focalLength + centerY;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          const size = (1 - star.z / width) * 2.5 * star.size;
          const alpha = 1 - star.z / width;
          
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const animate = () => {
      moveStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
};
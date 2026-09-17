import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Canvas3D = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create 3D floating nodes
    const nodeCount = Math.min(Math.floor(width / 22), 65);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 400 + 50, // 3D depth layer
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
      });
    }

    const render = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme !== 'light';
      const nodeColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
      const lineColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(79, 70, 229, ';

      // Update and draw 3D nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx + (mouse.x - width / 2) * 0.0001 * (node.z / 200);
        node.y += node.vy + (mouse.y - height / 2) * 0.0001 * (node.z / 200);
        node.z += node.vz;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        if (node.z < 20 || node.z > 450) node.vz *= -1;

        // 3D Perspective Projection
        const perspective = 350;
        const scale = perspective / (perspective + node.z);
        const projX = (node.x - width / 2) * scale + width / 2;
        const projY = (node.y - height / 2) * scale + height / 2;
        const projRadius = node.radius * scale * 1.5;

        // Node Glow
        ctx.beginPath();
        ctx.arc(projX, projY, projRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${0.4 * scale})`;
        ctx.fill();

        // Connect 3D Neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dz = node.z - other.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 130) {
            const otherScale = perspective / (perspective + other.z);
            const otherProjX = (other.x - width / 2) * otherScale + width / 2;
            const otherProjY = (other.y - height / 2) * otherScale + height / 2;

            const alpha = (1 - dist / 130) * 0.25 * scale;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(otherProjX, otherProjY);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1 * scale;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60 transition-opacity duration-500"
    />
  );
};

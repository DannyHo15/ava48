import { useEffect, useRef } from 'react';

const GradientWrapper = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = 200, h = 150;
    const radius = 15; // Border radius

    // Set canvas size
    canvas.width = w;
    canvas.height = h;

    // Draw polygon with rounded corners using arcTo
    ctx.beginPath();
    
    // Điểm 1: (55%, 41%)
    const x1 = w * 0.55, y1 = h * 0.41;
    // Điểm 2: (82%, 58%)
    const x2 = w * 0.82, y2 = h * 0.58;
    // Điểm 3: (82%, 100%)
    const x3 = w * 0.82, y3 = h;
    // Điểm 4: (0, 100%)
    const x4 = 0, y4 = h;
    // Điểm 5: (0, 42%)
    const x5 = 0, y5 = h * 0.42;

    // Bắt đầu từ điểm đầu tiên
    ctx.moveTo(x1, y1);
    
    // Vẽ với góc bo tròn
    ctx.arcTo(x2, y2, x3, y3, radius);
    ctx.arcTo(x3, y3, x4, y4, radius);
    ctx.arcTo(x4, y4, x5, y5, radius);
    ctx.arcTo(x5, y5, x1, y1, radius);
    ctx.arcTo(x1, y1, x2, y2, radius);
    
    ctx.closePath();

    // Fill
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fill();

    // Gradient border
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default GradientWrapper;

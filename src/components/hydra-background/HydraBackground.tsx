'use client';

import { useEffect, useRef } from 'react';

export default function HydraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let hydra: any;

    const initHydra = async () => {
      const Hydra = (await import('hydra-synth')).default;

      hydra = new Hydra({
        canvas: canvasRef.current,
        detectAudio: false,
      });

      const w = window as any;

      w.noise(10)
        .modulatePixelate(w.noise(1).pixelate(20, 30), 1024, 8)
        .out(w.o0);

      w.src(w.o0).modulate(w.o1, 0.5).out(w.o2);

      w.render(w.o2);
    };

    initHydra();

    return () => {
      hydra?.synth?.clear?.();
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
        zIndex: -1,
      }}
    />
  );
}

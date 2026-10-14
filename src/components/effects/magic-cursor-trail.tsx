"use client";

import React, { useEffect, useRef } from "react";
import { ParticleEngine } from "./particle-engine";

interface MagicCursorTrailProps {
  className?: string;
}

export function MagicCursorTrail({ className = "" }: MagicCursorTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const engine = new ParticleEngine({}, isMobile);

    let animationFrameId: number;
    let lastTime = performance.now();
    let isPageVisible = !document.hidden;

    // Track pointer positions for interpolation
    let currentPointerX: number | null = null;
    let currentPointerY: number | null = null;
    let lastPointerX: number | null = null;
    let lastPointerY: number | null = null;
    let lastPointerTime = performance.now();

    // Canvas resize handling with DPR
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      engine.resize(width, height, isMobile);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Pointer move handler (tracks clientX/clientY for viewport-fixed alignment)
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      currentPointerX = clientX;
      currentPointerY = clientY;

      const now = performance.now();
      const dt = Math.max(1, now - lastPointerTime);

      if (lastPointerX !== null && lastPointerY !== null) {
        const dx = clientX - lastPointerX;
        const dy = clientY - lastPointerY;
        const dist = Math.hypot(dx, dy);
        const speed = dist / dt;

        // Dynamic speed factor (intensifies trail on fast movement)
        const speedFactor = Math.min(Math.max(speed * 0.8, 0.8), 2.2);

        // Interpolate trail between points
        engine.emitTrail(lastPointerX, lastPointerY, clientX, clientY, 7, speedFactor);
      } else {
        engine.emit(clientX, clientY, 1);
      }

      lastPointerX = clientX;
      lastPointerY = clientY;
      lastPointerTime = now;
    };

    // Pointer leave / end handlers
    const onPointerLeave = () => {
      currentPointerX = null;
      currentPointerY = null;
      lastPointerX = null;
      lastPointerY = null;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerLeave, { passive: true });

    // Visibility change
    const onVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (!isPageVisible) {
        cancelAnimationFrame(animationFrameId);
        engine.clear();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Optimized Animation Loop
    const renderLoop = (currentTime: number) => {
      if (!isPageVisible) return;

      animationFrameId = requestAnimationFrame(renderLoop);

      const dt = Math.min(currentTime - lastTime, 40);
      lastTime = currentTime;

      // Reset pointer if user stays idle for more than 150ms
      if (lastPointerX !== null && currentTime - lastPointerTime > 150) {
        lastPointerX = null;
        lastPointerY = null;
        currentPointerX = null;
        currentPointerY = null;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      engine.update(dt, currentPointerX, currentPointerY);
      engine.render(ctx);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      engine.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-30 ${className}`}
    />
  );
}

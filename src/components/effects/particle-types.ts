export interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  isSparkle: boolean;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  color: string;
  glowColor: string;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  isSparkle: boolean;
  decay: number;
}

export interface ParticleConfig {
  maxParticles: number;
  minRadius: number;
  maxRadius: number;
  minLife: number; // in milliseconds
  maxLife: number; // in milliseconds
  sparkleChance: number;
  colorPalette: {
    color: string;
    glow: string;
  }[];
}

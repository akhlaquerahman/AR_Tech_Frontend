import { AmbientParticle, Particle, ParticleConfig } from "./particle-types";

export const DEFAULT_CONFIG: ParticleConfig = {
  maxParticles: 100,
  minRadius: 1.2,
  maxRadius: 3.2,
  minLife: 350,
  maxLife: 750,
  sparkleChance: 0.18,
  colorPalette: [
    { color: "#ec4899", glow: "rgba(236, 72, 153, 0.65)" }, // Hot pink
    { color: "#f472b6", glow: "rgba(244, 114, 182, 0.6)" }, // Light pink
    { color: "#a855f7", glow: "rgba(168, 85, 247, 0.65)" }, // Electric purple
    { color: "#c084fc", glow: "rgba(192, 132, 252, 0.6)" }, // Lilac
    { color: "#818cf8", glow: "rgba(129, 140, 248, 0.55)" }, // Periwinkle/blue
    { color: "#38bdf8", glow: "rgba(56, 189, 248, 0.55)" }, // Cyan
    { color: "#ffffff", glow: "rgba(255, 255, 255, 0.9)" }, // White sparkle
  ],
};

export class ParticleEngine {
  private particles: Particle[] = [];
  private pool: Particle[] = [];
  private ambientParticles: AmbientParticle[] = [];
  private config: ParticleConfig;
  private maxParticles: number;
  private width: number = 0;
  private height: number = 0;
  private isMobile: boolean = false;

  constructor(config: Partial<ParticleConfig> = {}, isMobile: boolean = false) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.isMobile = isMobile;
    this.maxParticles = isMobile ? 35 : this.config.maxParticles;

    // Pre-populate pool to prevent mid-frame allocations
    for (let i = 0; i < this.maxParticles; i++) {
      this.pool.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,
        maxRadius: 0,
        color: "",
        glowColor: "",
        alpha: 0,
        maxAlpha: 0,
        life: 0,
        maxLife: 0,
        isSparkle: false,
        decay: 0,
      });
    }
  }

  public get activeCount(): number {
    return this.particles.length + this.ambientParticles.length;
  }

  public get hasActiveParticles(): boolean {
    return this.particles.length > 0 || this.ambientParticles.length > 0;
  }

  public resize(width: number, height: number, isMobile: boolean = false): void {
    this.width = width;
    this.height = height;
    this.isMobile = isMobile;

    const ambientCount = isMobile ? 12 : 28;
    this.initAmbientParticles(ambientCount);
  }

  private initAmbientParticles(count: number): void {
    this.ambientParticles = [];
    if (this.width === 0 || this.height === 0) return;

    for (let i = 0; i < count; i++) {
      const paletteItem = this.config.colorPalette[
        Math.floor(Math.random() * this.config.colorPalette.length)
      ];

      const isSparkle = Math.random() < 0.2;
      const baseRadius = isSparkle ? 1.2 + Math.random() * 1.6 : 0.7 + Math.random() * 1.4;
      const baseAlpha = 0.18 + Math.random() * 0.32;

      // Random gentle velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.45;

      this.ambientParticles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: baseRadius,
        baseRadius,
        color: paletteItem.color,
        glowColor: paletteItem.glow,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: 0.5 + Math.random() * 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
        isSparkle,
      });
    }
  }

  public emit(x: number, y: number, velocityScale: number = 1): void {
    if (this.particles.length >= this.maxParticles) {
      const oldest = this.particles.shift();
      if (oldest) {
        this.pool.push(oldest);
      }
    }

    const paletteItem = this.config.colorPalette[
      Math.floor(Math.random() * this.config.colorPalette.length)
    ];

    const isSparkle = Math.random() < this.config.sparkleChance;
    const angle = Math.random() * Math.PI * 2;
    const speed = (0.2 + Math.random() * 1.1) * velocityScale;
    const maxRadius = isSparkle
      ? this.config.maxRadius * 1.3
      : this.config.minRadius + Math.random() * (this.config.maxRadius - this.config.minRadius);

    const maxLife = this.config.minLife + Math.random() * (this.config.maxLife - this.config.minLife);

    let particle: Particle;
    if (this.pool.length > 0) {
      particle = this.pool.pop()!;
      particle.x = x;
      particle.y = y;
      particle.vx = Math.cos(angle) * speed;
      particle.vy = Math.sin(angle) * speed;
      particle.radius = maxRadius;
      particle.maxRadius = maxRadius;
      particle.color = paletteItem.color;
      particle.glowColor = paletteItem.glow;
      particle.alpha = 1.0;
      particle.maxAlpha = 0.85 + Math.random() * 0.15;
      particle.life = maxLife;
      particle.maxLife = maxLife;
      particle.isSparkle = isSparkle;
      particle.decay = 1 / maxLife;
    } else {
      particle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: maxRadius,
        maxRadius,
        color: paletteItem.color,
        glowColor: paletteItem.glow,
        alpha: 1.0,
        maxAlpha: 0.85 + Math.random() * 0.15,
        life: maxLife,
        maxLife,
        isSparkle,
        decay: 1 / maxLife,
      };
    }

    this.particles.push(particle);
  }

  public emitTrail(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    spacing: number = 6,
    speedFactor: number = 1
  ): void {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) {
      this.emit(x2, y2, speedFactor);
      return;
    }

    const steps = Math.min(Math.floor(distance / spacing), 18);
    if (steps <= 1) {
      this.emit(x2, y2, speedFactor);
      return;
    }

    for (let i = 0; i <= steps; i++) {
      const progress = i / steps;
      const jitterAmount = (Math.random() - 0.5) * 3.5;
      const normalX = -dy / distance;
      const normalY = dx / distance;

      const px = x1 + dx * progress + normalX * jitterAmount;
      const py = y1 + dy * progress + normalY * jitterAmount;
      this.emit(px, py, speedFactor);
    }
  }

  public update(dt: number, pointerX: number | null, pointerY: number | null): void {
    const step = dt / 16;
    const nowSec = performance.now() * 0.001;

    // 1. Update ambient background particles with gentle organic movement & cursor attraction
    const attractRadius = 220;
    const attractRadiusSq = attractRadius * attractRadius;

    for (let i = 0; i < this.ambientParticles.length; i++) {
      const ap = this.ambientParticles[i];

      // Subtle pulsating twinkle
      const pulse = Math.sin(nowSec * ap.pulseSpeed + ap.pulsePhase) * 0.35 + 0.65;
      ap.alpha = ap.baseAlpha * pulse;
      ap.radius = ap.baseRadius * (0.85 + pulse * 0.25);

      // Cursor interaction: when cursor is active nearby, particles gently gravitate toward it and accelerate
      if (pointerX !== null && pointerY !== null) {
        const dx = pointerX - ap.x;
        const dy = pointerY - ap.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < attractRadiusSq && distSq > 20) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / attractRadius) * 0.45;
          ap.vx += (dx / dist) * force;
          ap.vy += (dy / dist) * force;
          // Temporarily boost brightness when interacting with cursor
          ap.alpha = Math.min(1.0, ap.alpha + force * 0.6);
        }
      }

      // Air friction to maintain peaceful drifting speed
      ap.vx *= 0.985;
      ap.vy *= 0.985;

      // Ensure minimum gentle floating speed
      const currentSpeed = Math.hypot(ap.vx, ap.vy);
      if (currentSpeed < 0.1) {
        ap.vx += (Math.random() - 0.5) * 0.08;
        ap.vy += (Math.random() - 0.5) * 0.08;
      }

      ap.x += ap.vx * step;
      ap.y += ap.vy * step;

      // Wrap around screen boundaries smoothly
      if (this.width > 0 && this.height > 0) {
        if (ap.x < -10) ap.x = this.width + 10;
        else if (ap.x > this.width + 10) ap.x = -10;

        if (ap.y < -10) ap.y = this.height + 10;
        else if (ap.y > this.height + 10) ap.y = -10;
      }
    }

    // 2. Update dynamic cursor trail particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        this.pool.push(p);
        continue;
      }

      p.x += p.vx * step;
      p.y += p.vy * step;
      p.vx *= 0.96;
      p.vy *= 0.96;

      const progress = 1 - p.life / p.maxLife;
      p.alpha = Math.max(0, p.maxAlpha * (1 - progress));
      p.radius = Math.max(0.2, p.maxRadius * (1 - progress * 0.75));
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    if (this.particles.length === 0 && this.ambientParticles.length === 0) return;

    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    // 1. Render ambient floating particles (batched)
    for (let i = 0; i < this.ambientParticles.length; i++) {
      const ap = this.ambientParticles[i];
      if (ap.alpha <= 0.01) continue;

      ctx.globalAlpha = ap.alpha;
      ctx.fillStyle = ap.color;
      ctx.beginPath();
      ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle halo only for prominent sparkles on non-mobile devices
      if (!this.isMobile && ap.isSparkle && ap.radius > 1.2) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(ap.x, ap.y, ap.radius * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 2. Render cursor trail particles (batched, zero context save/restore)
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (p.alpha <= 0.01) continue;

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // White inner core for high-energy sparkle particles
      if (p.isSparkle && p.radius > 1) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();
  }

  public clear(): void {
    while (this.particles.length > 0) {
      this.pool.push(this.particles.pop()!);
    }
  }
}

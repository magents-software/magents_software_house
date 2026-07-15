"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const NODE_COUNT = 130;
const LINK_DISTANCE = 3.1;
const BOUNDS = { x: 13, y: 7.5, z: 4 };
const PULSE_COUNT = 6; // "pacotes de dados" viajando pelas conexões
const REPULSE_RADIUS = 3.2;
const REPULSE_FORCE = 1.6;

const BRAND_COLORS = ["#43afe0", "#2E8998", "#46A2C6", "#157a73"];

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(255,255,255,0.7)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const pointsGeo = useRef<THREE.BufferGeometry>(null);
  const linesGeo = useRef<THREE.BufferGeometry>(null);
  const pulsesGeo = useRef<THREE.BufferGeometry>(null);
  const { pointer, viewport } = useThree();

  const { basePositions, phases, speeds, colors, pairs, dotTexture } =
    useMemo(() => {
      const basePositions = new Float32Array(NODE_COUNT * 3);
      const phases = new Float32Array(NODE_COUNT * 3);
      const speeds = new Float32Array(NODE_COUNT);
      const colors = new Float32Array(NODE_COUNT * 3);
      const c = new THREE.Color();

      for (let i = 0; i < NODE_COUNT; i++) {
        basePositions[i * 3] = (Math.random() - 0.5) * 2 * BOUNDS.x;
        basePositions[i * 3 + 1] = (Math.random() - 0.5) * 2 * BOUNDS.y;
        basePositions[i * 3 + 2] = (Math.random() - 0.5) * 2 * BOUNDS.z;
        phases[i * 3] = Math.random() * Math.PI * 2;
        phases[i * 3 + 1] = Math.random() * Math.PI * 2;
        phases[i * 3 + 2] = Math.random() * Math.PI * 2;
        speeds[i] = 0.25 + Math.random() * 0.5;
        c.set(BRAND_COLORS[i % BRAND_COLORS.length]);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      // Topologia fixa: liga pares próximos (evita recomputar O(n²) por frame)
      const pairs: [number, number][] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = basePositions[i * 3] - basePositions[j * 3];
          const dy = basePositions[i * 3 + 1] - basePositions[j * 3 + 1];
          const dz = basePositions[i * 3 + 2] - basePositions[j * 3 + 2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < LINK_DISTANCE) {
            pairs.push([i, j]);
          }
        }
      }

      return {
        basePositions,
        phases,
        speeds,
        colors,
        pairs,
        dotTexture: makeDotTexture(),
      };
    }, []);

  const positions = useMemo(
    () => new Float32Array(basePositions),
    [basePositions]
  );
  const linePositions = useMemo(
    () => new Float32Array(pairs.length * 6),
    [pairs]
  );

  // Deslocamento acumulado por nó causado pelo cursor (com inércia)
  const repulse = useMemo(() => new Float32Array(NODE_COUNT * 3), []);

  // Pulsos: cada um viaja por uma aresta aleatória e escolhe outra ao chegar
  const pulses = useMemo(
    () =>
      Array.from({ length: PULSE_COUNT }, () => ({
        pair: Math.floor(Math.random() * pairs.length),
        t: Math.random(),
        speed: 0.35 + Math.random() * 0.5,
      })),
    [pairs]
  );
  const pulsePositions = useMemo(() => new Float32Array(PULSE_COUNT * 3), []);

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();

    // Cursor em coordenadas de mundo (plano z=0)
    const mx = (pointer.x * viewport.width) / 2;
    const my = (pointer.y * viewport.height) / 2;

    for (let i = 0; i < NODE_COUNT; i++) {
      const s = speeds[i];
      const fx = basePositions[i * 3] + Math.sin(t * s + phases[i * 3]) * 0.55;
      const fy = basePositions[i * 3 + 1] + Math.cos(t * s * 0.9 + phases[i * 3 + 1]) * 0.45;
      const fz = basePositions[i * 3 + 2] + Math.sin(t * s * 0.7 + phases[i * 3 + 2]) * 0.4;

      // Repulsão: nós próximos do cursor são empurrados com falloff suave
      const dx = fx - mx;
      const dy = fy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let tx = 0;
      let ty = 0;
      if (dist < REPULSE_RADIUS && dist > 0.001) {
        const force = ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) ** 2 * REPULSE_FORCE;
        tx = (dx / dist) * force;
        ty = (dy / dist) * force;
      }
      const k = 1 - Math.exp(-4 * delta); // suavização independente de FPS
      repulse[i * 3] += (tx - repulse[i * 3]) * k;
      repulse[i * 3 + 1] += (ty - repulse[i * 3 + 1]) * k;

      positions[i * 3] = fx + repulse[i * 3];
      positions[i * 3 + 1] = fy + repulse[i * 3 + 1];
      positions[i * 3 + 2] = fz;
    }

    for (let k = 0; k < pairs.length; k++) {
      const [a, b] = pairs[k];
      linePositions[k * 6] = positions[a * 3];
      linePositions[k * 6 + 1] = positions[a * 3 + 1];
      linePositions[k * 6 + 2] = positions[a * 3 + 2];
      linePositions[k * 6 + 3] = positions[b * 3];
      linePositions[k * 6 + 4] = positions[b * 3 + 1];
      linePositions[k * 6 + 5] = positions[b * 3 + 2];
    }

    // Pulsos de dados percorrendo as arestas
    for (let p = 0; p < pulses.length; p++) {
      const pulse = pulses[p];
      pulse.t += delta * pulse.speed;
      if (pulse.t >= 1) {
        pulse.t = 0;
        pulse.pair = Math.floor(Math.random() * pairs.length);
        pulse.speed = 0.35 + Math.random() * 0.5;
      }
      const [a, b] = pairs[pulse.pair];
      const e = pulse.t;
      pulsePositions[p * 3] = positions[a * 3] + (positions[b * 3] - positions[a * 3]) * e;
      pulsePositions[p * 3 + 1] = positions[a * 3 + 1] + (positions[b * 3 + 1] - positions[a * 3 + 1]) * e;
      pulsePositions[p * 3 + 2] = positions[a * 3 + 2] + (positions[b * 3 + 2] - positions[a * 3 + 2]) * e;
    }

    if (pointsGeo.current) pointsGeo.current.attributes.position.needsUpdate = true;
    if (linesGeo.current) linesGeo.current.attributes.position.needsUpdate = true;
    if (pulsesGeo.current) pulsesGeo.current.attributes.position.needsUpdate = true;

    // Parallax suave seguindo o mouse
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.18 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-pointer.y * 0.12 - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry ref={pointsGeo}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          map={dotTexture}
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <lineSegments>
        <bufferGeometry ref={linesGeo}>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#2E8998"
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Pacotes de dados: pontos brilhantes viajando entre nós */}
      <points>
        <bufferGeometry ref={pulsesGeo}>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.32}
          map={dotTexture}
          color="#7dd6ff"
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(supportsWebGL());
  }, []);

  // Pausa o render loop quando o hero sai da tela (economiza GPU/bateria)
  useEffect(() => {
    if (!wrapper.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(wrapper.current);
    return () => obs.disconnect();
  }, [enabled]);

  // Sem WebGL, o hero continua funcionando só com os orbs/anéis em CSS
  if (!enabled) return null;

  return (
    <div ref={wrapper} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 11], fov: 55 }}
        dpr={[1, 1.75]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
        aria-hidden
      >
        <Network />
      </Canvas>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  attribute float aScale;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    float wave = sin(p.x * 0.72 + uTime * 0.22) * cos(p.y * 0.58 - uTime * 0.16);
    p.z += wave * 0.34;
    p.xy += uPointer * (0.14 + aScale * 0.08) * (2.2 - p.z * 0.12);

    vec4 viewPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = (1.2 + aScale * 2.1) * (7.0 / -viewPosition.z);
    vAlpha = 0.25 + aScale * 0.55;
  }
`;

const fragmentShader = `
  varying float vAlpha;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
    gl_FragColor = vec4(0.92, 0.91, 0.87, strength * vAlpha);
  }
`;

function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2());

  const { positions, scales } = useMemo(() => {
    const count = 760;
    const positionArray = new Float32Array(count * 3);
    const scaleArray = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positionArray[index * 3] = (seededValue(index * 4 + 1) - 0.5) * 15;
      positionArray[index * 3 + 1] = (seededValue(index * 4 + 2) - 0.5) * 10;
      positionArray[index * 3 + 2] = (seededValue(index * 4 + 3) - 0.5) * 7;
      scaleArray[index] = seededValue(index * 4 + 4);
    }

    return { positions: positionArray, scales: scaleArray };
  }, []);

  const linePositions = useMemo(() => {
    const result: number[] = [];
    for (let index = 0; index < 72; index += 1) {
      const a = Math.floor(seededValue(index * 2 + 9001) * (positions.length / 3));
      const b = Math.floor(seededValue(index * 2 + 9002) * (positions.length / 3));
      result.push(
        positions[a * 3],
        positions[a * 3 + 1],
        positions[a * 3 + 2],
        positions[b * 3],
        positions[b * 3 + 1],
        positions[b * 3 + 2],
      );
    }
    return new Float32Array(result);
  }, [positions]);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / window.innerWidth - 0.5) * 2,
        -(event.clientY / window.innerHeight - 0.5) * 2,
      );
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
      material.current.uniforms.uPointer.value.lerp(pointer.current, 0.025);
    }
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.06) * 0.08;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.04) * 0.035;
    }
    state.camera.position.x += (pointer.current.x * 0.22 - state.camera.position.x) * 0.015;
    state.camera.position.y += (pointer.current.y * 0.15 - state.camera.position.y) * 0.015;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uTime: { value: 0 },
            uPointer: { value: new THREE.Vector2() },
          }}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#df6f3c" transparent opacity={0.055} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export function NeuralField() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="webgl-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 58 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#080808", 6, 16]} />
        <ParticleField />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}

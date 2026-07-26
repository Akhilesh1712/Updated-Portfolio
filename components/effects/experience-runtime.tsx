"use client";

import dynamic from "next/dynamic";
import { SmoothScroll } from "./smooth-scroll";
import { ScrollEffects } from "./scroll-effects";

const WebGLBackground = dynamic(
  () => import("@/components/three/neural-field").then((module) => module.NeuralField),
  { ssr: false },
);

const CustomCursor = dynamic(
  () => import("@/components/cursor/custom-cursor").then((module) => module.CustomCursor),
  { ssr: false },
);

export function ExperienceRuntime() {
  return (
    <>
      <SmoothScroll />
      <ScrollEffects />
      <WebGLBackground />
      <CustomCursor />
    </>
  );
}

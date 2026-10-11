"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Layers, Maximize2, Minimize2 } from "lucide-react";

interface LayerPlaneProps {
  position: [number, number, number];
  color: string;
  wireframeColor: string;
  label: string;
  sublabel: string;
  opacity?: number;
  isSelected?: boolean;
  onSelect: () => void;
}

function LayerPlane({
  position,
  color,
  wireframeColor,
  opacity = 0.9,
  isSelected,
  onSelect,
}: LayerPlaneProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {/* Main Solid Slab */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.05}
          transparent={opacity < 1}
          opacity={hovered ? Math.min(1, opacity + 0.1) : opacity}
        />
      </mesh>

      {/* Hairline Edge Wireframe */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3.205, 0.125, 2.205)]} />
        <lineBasicMaterial
          color={hovered || isSelected ? "#77CFFF" : wireframeColor}
          linewidth={1}
          transparent
          opacity={0.8}
        />
      </lineSegments>

      {/* Architectural Surface Datum Grid on top face */}
      <gridHelper
        args={[2.0, 4, wireframeColor, wireframeColor]}
        position={[0, 0.065, 0]}
      />
    </group>
  );
}

function StackRig({
  exploded,
  activeLayer,
  setActiveLayer,
}: {
  exploded: boolean;
  activeLayer: number;
  setActiveLayer: (idx: number) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const targetY = useRef({ l3: 0.8, l2: 0, l1: -0.8 });

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth cursor tilt parallax
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.35 + 0.55, // Isometric base angle
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.25 + 0.42, // Isometric elevation
      0.05
    );

    // Dynamic layer vertical displacement
    const spread = exploded ? 1.4 : 0.8;
    targetY.current.l3 = spread;
    targetY.current.l2 = 0;
    targetY.current.l1 = -spread;
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* 4 Corner Interconnection Bus Conduits */}
      <group>
        {[-1.5, 1.5].map((cx) =>
          [-1.0, 1.0].map((cz) => (
            <mesh key={`${cx}-${cz}`} position={[cx, 0, cz]}>
              <cylinderGeometry args={[0.02, 0.02, exploded ? 3.0 : 1.8, 8]} />
              <meshBasicMaterial color="#4FA8DE" transparent opacity={0.6} />
            </mesh>
          ))
        )}
      </group>

      {/* L3: Web Platform / RTL Interfaces (Top Translucent Blue) */}
      <LayerPlane
        position={[0, targetY.current.l3, 0]}
        color="#D9F2FD"
        wireframeColor="#4FA8DE"
        opacity={0.88}
        label="L3: Web Platform"
        sublabel="RTL Architecture & UI"
        isSelected={activeLayer === 3}
        onSelect={() => setActiveLayer(3)}
      />

      {/* L2: Application State & Logic (Middle Matte White) */}
      <LayerPlane
        position={[0, targetY.current.l2, 0]}
        color="#FFFFFF"
        wireframeColor="#080B10"
        opacity={0.96}
        label="L2: Application Logic"
        sublabel="State Machine & Luhn Validation"
        isSelected={activeLayer === 2}
        onSelect={() => setActiveLayer(2)}
      />

      {/* L1: Hardware & Connected Systems (Bottom Ink Slate) */}
      <LayerPlane
        position={[0, targetY.current.l1, 0]}
        color="#080B10"
        wireframeColor="#77CFFF"
        opacity={1}
        label="L1: Connected Systems"
        sublabel="Raspberry Pi & Arduino Bus"
        isSelected={activeLayer === 1}
        onSelect={() => setActiveLayer(1)}
      />
    </group>
  );
}

export default function LayerStackScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [exploded, setExploded] = useState(false);
  const [activeLayer, setActiveLayer] = useState(3);
  const [isInView, setIsInView] = useState(true);

  // Pause rendering when canvas is scrolled off-screen or tab hidden
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibility = () => {
      setIsInView(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const layerInfo = {
    3: {
      tag: "L3 // Web Platform Layer",
      title: "RTL-First Web Systems",
      desc: "40+ page university portal architecture, responsive layouts & data-driven client rendering.",
    },
    2: {
      tag: "L2 // Application & State Layer",
      title: "Interactive State Machines",
      desc: "Debounced scan pipeline, client-side Luhn verification & Canvas data visualisations.",
    },
    1: {
      tag: "L1 // Connected Systems & Data",
      title: "Hardware Integration & Persistence",
      desc: "Raspberry Pi, Arduino microcontrollers, physical barcode sensing & relational persistence.",
    },
  }[activeLayer];

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Interactive 3D Layer Stack Model"
      className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-3xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] shadow-card overflow-hidden flex flex-col justify-between p-4 sm:p-6"
    >
      {/* 3D Canvas (Hidden from screen readers via aria-hidden) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Canvas
          frameloop={isInView ? "always" : "never"}
          dpr={[1, 1.5]}
          camera={{ position: [3.8, 3.2, 4.2], fov: 36 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[6, 8, 4]} intensity={1.5} />
          <directionalLight position={[-4, 2, -4]} intensity={0.4} color="#77CFFF" />
          <StackRig
            exploded={exploded}
            activeLayer={activeLayer}
            setActiveLayer={setActiveLayer}
          />
        </Canvas>
      </div>

      {/* Accessible HUD & Controls (Overlayed cleanly over canvas) */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none pb-2 border-b border-[rgba(8,11,16,0.08)]">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-[#4FA8DE]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#080B10]">
            3D System Model
          </span>
        </div>

        <button
          type="button"
          onClick={() => setExploded(!exploded)}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[rgba(8,11,16,0.1)] text-xs font-mono text-[#080B10] hover:bg-[#D9F2FD] hover:border-[#77CFFF] transition-all shadow-sm"
          title={exploded ? "Collapse stack" : "Unpack layers"}
        >
          {exploded ? (
            <>
              <Minimize2 className="h-3 w-3" />
              <span>Collapse</span>
            </>
          ) : (
            <>
              <Maximize2 className="h-3 w-3" />
              <span>Unpack Stack</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Interactive Layer Inspector HUD */}
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[rgba(8,11,16,0.1)] shadow-sm space-y-1.5 transition-all">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="font-bold text-[#080B10]">{layerInfo?.tag}</span>
            <div className="flex items-center gap-1">
              {[3, 2, 1].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveLayer(idx)}
                  className={`h-5 w-5 rounded-md flex items-center justify-center text-[10px] font-mono transition-colors ${
                    activeLayer === idx
                      ? "bg-[#080B10] text-white"
                      : "bg-[#F5F7FA] text-[#080B10]/60 hover:bg-[#E6E8EB]"
                  }`}
                  aria-label={`Select layer ${idx}`}
                >
                  {idx}
                </button>
              ))}
            </div>
          </div>
          <div className="text-xs font-display font-bold text-[#080B10]">
            {layerInfo?.title}
          </div>
          <p className="text-[11px] font-sans text-[#080B10]/70 leading-relaxed">
            {layerInfo?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

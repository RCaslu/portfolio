"use client";

import { useState, useRef, Suspense } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const generateSpherePoints = (count: number, radius: number): Float32Array => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2; // ângulo azimutal
        const phi = Math.acos(2 * Math.random() - 1); // ângulo polar
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        positions[i * 3 + 2] = radius * Math.cos(phi); // z
    }
    return positions;
};

import { PointsProps } from "@react-three/fiber";

const StarBackground = (props: PointsProps) => {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => generateSpherePoints(5000, 1.2));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color='white'
                    size={0.0002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-[20]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;

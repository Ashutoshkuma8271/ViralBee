import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Master Architectural Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Abstract Sculptural Polyhedron (Black Chrome & Graphite finish)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c0c0c,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // 2. Surgical Gold Hairline Cage
    const wireGeometry = new THREE.IcosahedronGeometry(1.605, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xF5B90F,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    masterGroup.add(wireMesh);

    // 3. Orbital Precision Rings
    const ringGeometry1 = new THREE.TorusGeometry(2.45, 0.012, 16, 140);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xF5B90F,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 7;
    masterGroup.add(ringMesh1);

    const ringGeometry2 = new THREE.TorusGeometry(2.8, 0.008, 16, 140);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 5;
    masterGroup.add(ringMesh2);

    // 4. Subtle Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const goldRimLight = new THREE.PointLight(0xF5B90F, 3.5, 14);
    goldRimLight.position.set(-4, -3, 3);
    scene.add(goldRimLight);

    const fillLight = new THREE.DirectionalLight(0x888888, 0.6);
    fillLight.position.set(-5, 0, -4);
    scene.add(fillLight);

    // Parallax mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (!prefersReducedMotion) {
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        masterGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.4;
        masterGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.08 + targetY * 0.25;

        ringMesh1.rotation.z = elapsedTime * 0.1;
        ringMesh2.rotation.z = -elapsedTime * 0.08;
      }

      const scrollFactor = Math.max(0, 1 - scrollY / 650);
      masterGroup.scale.set(scrollFactor, scrollFactor, scrollFactor);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      aria-hidden="true"
    />
  );
};

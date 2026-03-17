import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Mouse tracking
    const mouse = new THREE.Vector2(0, 0)
    const targetRotation = new THREE.Vector2(0, 0)

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    // --- Icosahedron wireframe mesh (main centerpiece) ---
    const geoSphere = new THREE.IcosahedronGeometry(1.4, 2)
    const matSphere = new THREE.MeshBasicMaterial({
      color: 0xc8b8a2,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const sphere = new THREE.Mesh(geoSphere, matSphere)
    scene.add(sphere)

    // Inner solid sphere (subtle glow core)
    const geoCore = new THREE.IcosahedronGeometry(0.85, 1)
    const matCore = new THREE.MeshBasicMaterial({
      color: 0xc8b8a2,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    })
    const core = new THREE.Mesh(geoCore, matCore)
    scene.add(core)

    // --- Floating particles ---
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const r = 3.5 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      sizes[i] = Math.random() * 2 + 0.5
      speeds[i] = Math.random() * 0.3 + 0.1
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const particleMat = new THREE.PointsMaterial({
      color: 0xa0a0a0,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // --- Torus ring ---
    const geoTorus = new THREE.TorusGeometry(2.2, 0.008, 8, 80)
    const matTorus = new THREE.MeshBasicMaterial({
      color: 0xc8b8a2,
      transparent: true,
      opacity: 0.15,
    })
    const torus = new THREE.Mesh(geoTorus, matTorus)
    torus.rotation.x = Math.PI / 2.5
    scene.add(torus)

    // Second torus at angle
    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.005, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0xa0a0a0, transparent: true, opacity: 0.08 })
    )
    torus2.rotation.x = Math.PI / 4
    torus2.rotation.z = Math.PI / 6
    scene.add(torus2)

    // Resize handler
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Animation loop
    let animId
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (prefersReduced) return
      const elapsed = clock.getElapsedTime()

      // Smooth mouse-reactive rotation
      targetRotation.x += (mouse.y * 0.4 - targetRotation.x) * 0.03
      targetRotation.y += (mouse.x * 0.4 - targetRotation.y) * 0.03

      sphere.rotation.x = elapsed * 0.08 + targetRotation.x
      sphere.rotation.y = elapsed * 0.12 + targetRotation.y

      core.rotation.x = -elapsed * 0.1 + targetRotation.x * 0.5
      core.rotation.y = elapsed * 0.15 + targetRotation.y * 0.5

      torus.rotation.z = elapsed * 0.05
      torus2.rotation.y = elapsed * 0.04

      particles.rotation.y = elapsed * 0.015 + targetRotation.y * 0.2
      particles.rotation.x = elapsed * 0.01 + targetRotation.x * 0.1

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

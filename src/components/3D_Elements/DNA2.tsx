import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Sphere } from '@react-three/drei'
import React from 'react'

export function DNA() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <group key={i} position={[0, i * 0.4 - 4, 0]} rotation={[0, (i * Math.PI) / 10, 0]}>
          <Cylinder args={[0.05, 0.05, 2, 8]} position={[0.5, 0, 0]}>
            <meshStandardMaterial color="#00ff00" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 2, 8]} position={[-0.5, 0, 0]}>
            <meshStandardMaterial color="#00ff00" />
          </Cylinder>
          <Sphere args={[0.1, 16, 16]} position={[0.5, -1, 0]}>
            <meshStandardMaterial color="#ff0000" />
          </Sphere>
          <Sphere args={[0.1, 16, 16]} position={[-0.5, 1, 0]}>
            <meshStandardMaterial color="#0000ff" />
          </Sphere>
        </group>
      ))}
    </group>
  )
}
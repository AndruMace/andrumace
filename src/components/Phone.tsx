import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MathUtils, TextureLoader } from 'three';
import { RoundedBox } from '@react-three/drei';

const Phone = () => {
  const phoneRef = useRef<any>(null);
  
  // Load the screenshot texture
  const texture = useLoader(TextureLoader, 'screenshot.png');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -((event.clientY / window.innerHeight) * 2 - 1),
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Update rotation based on mouse position
  useFrame(() => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = MathUtils.lerp(
        phoneRef.current.rotation.y,
        mousePosition.x * 0.2,
        0.1
      );
      phoneRef.current.rotation.x = MathUtils.lerp(
        phoneRef.current.rotation.x,
        mousePosition.y * 0.1,
        0.1
      );
    }
  });
  
  return (
    <group position={[0, 0, 0]}>
      {/* Phone body with rounded corners */}
      <RoundedBox args={[2.2, 4.5, 0.2]} radius={0.15} smoothness={4} ref={phoneRef}>
        <meshPhysicalMaterial 
          color="#222222" 
          metalness={0.7}
          roughness={0.3}
          reflectivity={0.7}
        />
        
        {/* Phone screen with bezel */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[2.05, 4.3]} />
          <meshBasicMaterial color="#111111" />
        </mesh>
        
        {/* Actual screen content with screenshot */}
        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[2, 4.2]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </RoundedBox>
    </group>
  );
};

export default Phone; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center, ContactShadows, AccumulativeShadows, RandomizedLight, Preload } from '@react-three/drei';
import Phone from './Phone';

const PhoneScene = () => {
  return (
    <div className="phone-scene">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows gl={{ alpha: true }}>
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Key light */}
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        
        {/* Fill light */}
        <spotLight 
          position={[-10, 5, 10]} 
          angle={0.25} 
          penumbra={1} 
          intensity={0.5} 
          color="#4676ff"
        />
        
        {/* Environment */}
        <Environment preset="city" />
        
        {/* Shadows */}
        <ContactShadows 
          position={[0, -2.25, 0]} 
          opacity={0.3}
          scale={10} 
          blur={2} 
          far={4.5}
          color="#1e3a8a"
        />
        
        <Center>
          <Phone />
        </Center>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        <Preload all />
      </Canvas>
    </div>
  );
};

export default PhoneScene; 
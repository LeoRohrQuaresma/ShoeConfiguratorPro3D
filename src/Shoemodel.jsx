import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';



export default function Shoemodel({ customColors, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/shoe.gltf');


  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const elevation = Math.sin(time) * 0.5; // Adjust the amplitude and speed as needed
    group.current.position.y = elevation;
  });

  return (
    <group ref={group}  {...props} dispose={null} scale={10}  castShadow >
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={customColors.laces} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={customColors.mesh} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps } material-color={customColors.capes}  />
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={customColors.inner} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={customColors.sole} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={customColors.stripes} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={customColors.band} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={customColors.patch}/>
    </group>
  );
}

useGLTF.preload('/shoe.gltf');

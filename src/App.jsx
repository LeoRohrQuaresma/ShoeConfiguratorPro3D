import React, { useRef, useState } from 'react';
import styles from './app.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import Shoemodel from './Shoemodel';
import { OrbitControls, SpotLight, Environment, ContactShadows, Shadow, Center } from '@react-three/drei';
import ColorPicker from './ColorPicker';



const App = () => {
  const [meshColor, setMeshColor] = useState('white');
  const [stripesColor, setStripesColor] = useState('white');
  const [solesColor, setSolesColor] = useState('white');
  const [innerColor, setInnerColor] = useState('white');
  const [bandColor, setBandColor] = useState('white');
  const [patchColor, setPatchColor] = useState('white');
  const [capesColor, setCapesColor] = useState('white');
  const [lacesColor, setLacesColor] = useState('white');





  const handleMeshColorChange = (newColor) => {
    setMeshColor(newColor);
  };

  const handleStripesColorChange = (newColor) => {
    setStripesColor(newColor);
  };

  const handleSoleColorChange = (newColor) => {
    setSolesColor(newColor);
  };

  const handleInnerColorChange = (newColor) => {
    setInnerColor(newColor);
  };

  const handleBandColorChange = (newColor) => {
    setBandColor(newColor);
  };

  const handlePatchColorChange = (newColor) => {
    setPatchColor(newColor);
  };

  const handleCapesColorChange = (newColor) => {
    setCapesColor(newColor);
  };

  const handleLacesColorChange = (newColor) => {
    setLacesColor(newColor);
  };

  return (
    <>
      <div className={styles.containerimage}>
        <h1 className={styles.title} >ShoeConfiguratorPro</h1>
        <div className={styles.container}>

          <div className={styles.canvascontainer}>
            <Canvas shadows camera={{ position: [-1, 20, 10], fov: 70 }}>
              <ambientLight intensity={0.7} />
              <SpotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 30, 10]} castShadow={true} />
              <Environment preset="city" />
              <Shadow
                position={[0, -7, 0]} // Adjust the position of the shadow
                rotation={[-Math.PI / 2, 0, 0]} // Adjust the rotation of the shadow
                scale={[20, 10, 40]} // Adjust the scale of the shadow
                opacity={0.5} // Adjust the opacity of the shadow
              />
              <Shoemodel customColors={{ mesh: meshColor, stripes: stripesColor, sole: solesColor, inner: innerColor, band: bandColor, patch: patchColor, capes: capesColor, laces: lacesColor }} />

              <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} dampingFactor={0.002} />

            </Canvas>

            <div className={styles.coloroptions}>
              <ColorPicker colorType="Mesh" onChange={handleMeshColorChange} />
              <ColorPicker colorType="Stripes" onChange={handleStripesColorChange} />
              <ColorPicker colorType="Sole" onChange={handleSoleColorChange} />
              <ColorPicker colorType="Capes" onChange={handleCapesColorChange} />
            </div>
            <div className={styles.coloroptions2}>
              <ColorPicker colorType="Inner" onChange={handleInnerColorChange} />
              <ColorPicker colorType="Band" onChange={handleBandColorChange} />
              <ColorPicker colorType="Patch" onChange={handlePatchColorChange} />
              <ColorPicker colorType="Laces" onChange={handleLacesColorChange} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

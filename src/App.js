import React, { Suspense, useState } from "react";
import "./App.css";
import * as THREE from "three";
import { Canvas, extend, useThree, useLoader } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

function App() {
  const defaultCameraPositions = {
    px: 0.47856748561778645,
    rx: -2.75498783175586,
    py: 0.37579497215950963,
    ry: 0.534669096966282,
    pz: -0.8481077970051053,
    rz: 2.919532627963722
  };

  const [cameraPos, setCameraPos] = useState(defaultCameraPositions);

  const Cube = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color="hotpink"
          opacity={0.5}
          transparent
        />
      </mesh>
    );
  };

  function Asset({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    return (
      <primitive
        object={gltf.scene}
        dispose={null}
        position={new THREE.Vector3(0, -0.45, 0)}
      />
    );
  }

  const Scene = () => {
    const {
      camera,
      gl: { domElement }
    } = useThree();
    camera.position.x = cameraPos.px;
    camera.rotation.x = cameraPos.rx;
    camera.position.y = cameraPos.py;
    camera.rotation.y = cameraPos.ry;
    camera.position.z = cameraPos.pz;
    camera.rotation.z = cameraPos.rz;

    return (
      <>
        <Suspense fallback={<Cube />}>
          <Asset url="Mavi_sandalye.glb" />
        </Suspense>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <orbitControls args={[camera, domElement]} />
      </>
    );
  };
  return (
    <div className="main-container">
      <div className="viewport-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="modificaiton-buttons-container">Color Buttons</div>
    </div>
  );
}

export default App;

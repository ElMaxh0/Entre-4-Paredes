import React, { useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styledComponents from "styled-components";
import { useTexture } from "@react-three/drei"
import { DoubleSide, Vector3 } from 'three';
import { Suspense } from 'react';
import { useImgUrl } from "../../hooks/imgurl";

const MergulharteAppWindowStyle = styledComponents.div `
width:100%; height:100vh;`
function Mergulharte(){
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 5;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  
  const {ImgUrl, setImgUrl}= useImgUrl();
  var image = ImgUrl
  console.log(ImgUrl)
  const Cena = () => {
    const texture = useTexture(image);
  
    return (
      <mesh scale={new Vector3(-1, 1, 1)}>
        <cylinderBufferGeometry args={[30, 20, 100, 12]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
    );
  }
  
    return (
      <MergulharteAppWindowStyle>
        <Canvas camera={{
          near: 1,
          far: 1100,
          aspect: 16 / 9,
          fov: 70
        }}>
          <CameraController />
          <Suspense fallback={null}>
            <Cena />
          </Suspense>
        </Canvas>
      </MergulharteAppWindowStyle>
    );
  }
export default Mergulharte
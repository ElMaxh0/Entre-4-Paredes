import React, { useEffect, useRef , useState } from "react";
import { Canvas, useThree , useFrame} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import styledComponents from "styled-components";
import { useTexture } from "@react-three/drei"
import { DoubleSide, Vector3 } from 'three';
import { Suspense } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { useImgUrl } from "../../hooks/imgurl";
import { BackSide } from "three";
import { useLargura } from "../../hooks/largura";
import { useAltura } from "../../hooks/altura";
import { useComprimento } from "../../hooks/comprimento";
import { useImgsData } from "../../hooks/ImagesData ";
const MergulharteAppWindowStyle = styledComponents.div `
width:90vw; height:80vh; border-radius:"25px";`
function Room(){
  const {larguraid, setlarguraid} = useLargura();
  const {Alturaid, setAlturaid} = useAltura();
  const {comprimentoid, setcomprimentoid} = useComprimento();
  const {ImgUrl, setImgUrl}= useImgUrl();
  const {ImgsData, setImgsData} = useImgsData();
  let largura= 10
  let altura = 2
  let Profundidade = 5
  function Imersive(){
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 1;
        controls.maxDistance = 5;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  



  function Parede01(props) {
    const texture0 = useTexture(ImgsData[0]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(0),(altura*10), (largura*10)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede02(props) {
    const texture0 = useTexture(ImgsData[1]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(largura*10),(altura*10), (1)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede03(props) {
    const texture0 = useTexture(ImgsData[2]["image"]);


    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(0),(altura*10), (largura*10)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede04(props) {
    const texture0 = useTexture(ImgsData[3]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(largura*10),(altura*10), (1)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  const Cena = () => {
    const texture = useTexture(ImgsData[3]["image"]);

    return (
      <mesh scale={new Vector3(-1, 1, 1)}>
        <boxBufferGeometry args={[2, 2,2,2]} />
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
            <Parede01 position={[((- largura/2) *10), 0, 0]} />
            <Parede02 position={[0, 0, ((comprimentoid/2)*10)]} />
            <Parede03 position={[((largura/2) *10), 0, 0]} />
            <Parede04 position={[0, 0, (-((comprimentoid/2)*10))]} />
          </Suspense>
        </Canvas>
      </MergulharteAppWindowStyle>
    );
  }  
  return Imersive()
  }
export default Room
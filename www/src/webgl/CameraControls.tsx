import React, { useRef } from "react";
import { useThree, extend, ReactThreeFiber } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// https://spectrum.chat/react-three-fiber/general/property-orbitcontrols-does-not-exist-on-type-jsx-intrinsicelements~44712e68-4601-4486-b4b4-5e112f3dc09e
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

type CameraControlsProps = {
  position: [
    x: number,
    y: number,
    z: number,
  ]
}

const CameraControls: React.FC<CameraControlsProps> = ({position}) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  // useFrame((state) => {
  //   console.log("use frame!");
  //   // @ts-ignore
  //   controls.current.update();
  // });
  camera.position.set(...position)
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI }
      minAzimuthAngle={-Math.PI}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={0}
    />
  );
};
export default CameraControls;

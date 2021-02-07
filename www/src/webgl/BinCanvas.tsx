import React from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import Bin from "./Bin";
import { PackedBinWithPosition } from "../BinPackerInterfaces";

type BinCanvasProps = {
  packedBin: PackedBinWithPosition;
};

const BinCanvas: React.FC<BinCanvasProps> = ({ packedBin }) => {
  return (
    <div>
      <Canvas className="z-10">
        <CameraControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Bin dims={[3, 3, 3]} />
      </Canvas>
    </div>
  );
};

export default BinCanvas;

// import React from "react";
// import ReactDOM from "react-dom";
// // import { Canvas, extend, useThree } from "react-three-fiber";
// // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// // import "./styles.css";
//
// // import { ReactThreeFiber } from 'react-three-fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//
// // https://spectrum.chat/react-three-fiber/general/property-orbitcontrols-does-not-exist-on-type-jsx-intrinsicelements~44712e68-4601-4486-b4b4-5e112f3dc09e
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
//     }
//   }
// }
//
// extend({ OrbitControls });
//
// // const Cube = () => {
// //   return (
// //     <mesh>
// //       <boxBufferGeometry attach="geometry" />
// //       <meshBasicMaterial
// //         attach="material"
// //         color="blue"
// //         opacity={0.5}
// //         transparent
// //       />
// //     </mesh>
// //   );
// // };
// //
// // const Scene = () => {
// //   const {
// //     camera,
// //     gl: { domElement },
// //   } = useThree();
// //   return (
// //     <>
// //       <Cube />
// //       <orbitControls args={[camera, domElement]} />
// //     </>
// //   );
// // };
// //
// // type ResultsVisualizerProps = {
// //   packedBins: PackedBin[];
// // };
// //
// // const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
// //   packedBins,
// // }) => {
// //   return (
// //     <Canvas
// //       style={{zIndex: 1}}
// //     >
// //       <Scene />
// //     </Canvas>
// //   );
// // };
// // export default ResultsVisualizer;

import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import Bin from "./Bin";
import { PackedBinWithPosition } from "../BinPackerInterfaces";

type BinCanvasProps = {
  packedBin: PackedBinWithPosition;
};

const ResultsCanvas: React.FC<BinCanvasProps> = ({ packedBin }) => {
  return (
    <div className="min-h-full" >
      <Canvas className="z-10 bg-black min-h-full">
        <CameraControls />
        <ambientLight args={[0x444444]} intensity={0.5} />
        <pointLight args={[0xffffff, 1.25, 1000]} position={[-10, -10, -10]} />
        <directionalLight args={[0xffffff]} position={[1, -0.5, -1]} />
        {/*<Suspense fallback={<p>"unavailable"</p>}>*/}
          <Bin dims={[3, 3, 3]} />
        {/*</Suspense>*/}
      </Canvas>
    </div>
  );
};

export default ResultsCanvas;

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

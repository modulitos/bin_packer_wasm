import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import Bin from "./Bin";
import {
  PackedBinWithPosition,
  PackedItemWithPosition,
} from "../BinPackerInterfaces";
import Item from "./Item";

type BinCanvasProps = {
  packedBin: PackedBinWithPosition;
};

const COLORS = ["teal", "blue", "red", "pink", "gray", "white"];

// TODO: we should auto-scale and auto-position based on the bin's dimensions. This is currently hard-coded to work for
// our hard-coded bin's dims of [12, 8, 8]

const SCALE = [0.4, 0.4, 0.4];
const CAMERA_POSITION: [x: number, y: number, z: number] = [16, 9, 12];

// Map our item positioning (relative to the back corner of the bin) into coordinates that Three will understand
// (relative to the center of the bin).
const relativeToAbsolute = (
  itemPos: number,
  itemDim: number,
  binPosition: number,
  scale: number,
) => {
  return (itemPos - binPosition / 2 + itemDim / 2) * scale;
};

const ResultsCanvas: React.FC<BinCanvasProps> = ({ packedBin }) => {
  const [scaleX, scaleY, scaleZ] = SCALE;
  const scale: [x: number, y: number, z: number] = [scaleX, scaleY, scaleZ];

  const camera_position = CAMERA_POSITION.map((pos, i) => SCALE[i] * pos) as [
    x: number,
    y: number,
    z: number,
  ];

  const [binDX, binDY, binDZ] = packedBin.dims;
  const items: PackedItemWithPosition[] = packedBin.items.map((item) => {
    const [itemPX, itemPY, itemPZ] = item.position;
    const [itemDX, itemDY, itemDZ] = item.dims;
    return {
      ...item,
      position: [
        relativeToAbsolute(itemPX, itemDX, binDX, scaleX),
        relativeToAbsolute(itemPY, itemDY, binDY, scaleY),
        relativeToAbsolute(itemPZ, itemDZ, binDZ, scaleZ),
      ],
    };
  });

  const uniqueItemIds = [...new Set(items.map((item) => item.id))];
  if (uniqueItemIds.length > COLORS.length) {
    console.warn(
      `not enough colors! We only have ${COLORS.length} colors, but ${uniqueItemIds} items.`,
    );
  }
  const colorMap = uniqueItemIds.reduce(
    (acc: { [itemId: string]: string }, id, i) => {
      acc[id] = COLORS[i];
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-full">
      <Canvas className="z-10 bg-black min-h-full" style={{ height: "420px" }}>
        <CameraControls position={camera_position} />
        <ambientLight args={[0x444444]} intensity={0.5} />
        <pointLight args={[0xffffff, 1.25, 1000]} position={[10, 10, 10]} />
        <directionalLight args={[0xffffff]} position={[-1, 0.5, 1]} />
        {/*<Suspense fallback={<p>"unavailable"</p>}>*/}
        <Bin dims={packedBin.dims} scale={scale} />
        {/*</Suspense>*/}
        {items.map((item, i) => {
          return (
            <Item
              key={i}
              dims={item.dims}
              position={item.position}
              color={colorMap[item.id]}
              scale={scale}
            />
          );
        })}
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

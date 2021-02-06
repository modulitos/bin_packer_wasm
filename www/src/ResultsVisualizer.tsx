import React from "react";
import { PackedBin, PackedItem } from "./BinPackerInterfaces";
import { Canvas, extend, useThree, ReactThreeFiber } from 'react-three-fiber';
import CameraControls from "./webgl/CameraControls";
import Bin from './webgl/Bin'

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  if (packedBins.length == 0) {
    return <div>{"Fill out the form to start packing."}</div>;
  }

  // return (
  //   <div className="object-fill">
  //     {`Results: `}
  //     {packedBins.map((bin: PackedItem[], bin_index) => {
  //       return (
  //         <div className="p-2" key={bin_index}>
  //           <p>{`Bin #${bin_index + 1}`}</p>
  //           <p>{`${bin.length} item(s):`}</p>
  //           {bin.map((item: PackedItem, item_index) => {
  //             return (
  //               <div className="p-4" key={item_index}>
  //                 {JSON.stringify(item, null, 2)}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <Canvas className="z-10">
      <CameraControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Bin dims={[3, 3, 3]} />
    </Canvas>
  )
};

export default ResultsVisualizer;

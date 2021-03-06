import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type BinProps = {
  dims: [
    x: number,
    y: number,
    z: number,
  ];
  scale: [
    x: number,
    y: number,
    z: number
  ]
};

const Bin: React.FC<BinProps> = ({ dims, scale}) => {
  const mesh = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  const geom = useMemo(() => new THREE.BoxGeometry(...dims), dims);

  return (
    <mesh
      ref={mesh}
      scale={scale}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}
    >
      <lineSegments>
        <lineBasicMaterial color={0xffffff} attach="material"/>
        <edgesGeometry attach="geometry" args={[geom]}>
        </edgesGeometry>
      </lineSegments>
    </mesh>
  );
};
export default Bin;


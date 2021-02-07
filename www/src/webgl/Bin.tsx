import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type BinProps = {
  dims: [
    x?: number,
    y?: number,
    z?: number,
    // width?: number,
    // height?: number,
    // depth?: number,
    // widthSegments?: number,
    // heightSegments?: number,
    // depthSegments?: number,
  ];
};

const Bin: React.FC<BinProps> = (props) => {
  const mesh = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  const geom = useMemo(() => new THREE.BoxGeometry(...props.dims), props.dims);
  return (
    // {...props}
    <mesh
      ref={mesh}
      scale={[1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}
    >
      <lineSegments>
        <lineBasicMaterial color={0xffffff} attach="material"/>
        <edgesGeometry attach="geometry" >
        </edgesGeometry>
      </lineSegments>
    </mesh>
  );
};
export default Bin;

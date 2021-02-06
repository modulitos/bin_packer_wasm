import React, { useRef, useState } from "react";

type BinProps = {
  dims: [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number,
  ];
};

const Bin: React.FC<BinProps> = (props) => {
  const mesh = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  return (
    // {...props}
    <mesh
      ref={mesh}
      scale={[1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}
    >
      <boxBufferGeometry args={props.dims} />
      <meshStandardMaterial color={state.isActive ? "#820263" : "#D90368"} />
    </mesh>
  );
};
export default Bin;

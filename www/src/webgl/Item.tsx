import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ItemProps = {
  dims: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
  color: string; // one of the colors from our Tailwind.config
  scale: [x: number, y: number, z: number];
};

const Item: React.FC<ItemProps> = ({ dims, position, color, scale }) => {
  const mesh = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  const geom = useMemo(() => new THREE.BoxGeometry(...dims), dims);
  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}
    >
      <meshStandardMaterial color={color} />
      <boxBufferGeometry args={dims} />
      <lineSegments>
        <lineBasicMaterial color={"black"} attach="material" />
        <edgesGeometry attach="geometry" args={[geom]}></edgesGeometry>
      </lineSegments>
    </mesh>
  );
};

export default Item;

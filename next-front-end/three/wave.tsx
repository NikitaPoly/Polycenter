import { useFrame } from "@react-three/fiber";
import helper from "./helper";
import { useEffect, useRef, useState } from "react";

/*
    This is suppose to be the animation for the wave in the packground of the main page.
*/
//each vertex has an x y and z meaning its a vector
const NUMBER_OF_VERTEX = 176;
const MAX_APLITUDE = 0.2;
const MIN_APLITUDE = -0.2;
const RATE_OF_CHANGE_MULTIPLIER = 0.003;
//This is an array that is filled with 1 or -1.
//@ts-ignore
let ARRAY_OF_DIRECTION = new Array(NUMBER_OF_VERTEX).fill(0);
//randomly assign the flow of the vertex -1 or 1
ARRAY_OF_DIRECTION.forEach((_, i) => {
  ARRAY_OF_DIRECTION[i] = Math.random() <= 0.5 ? -1 : 1;
});

export default function Wave() {
  //plane mesh refference
  const mesh: any = useRef(null);
  const [opacity, setOpacity] = useState(0);
  function animate() {
    //boiler plate for getting the actual array of vertex from the plane mesh
    const { geometry } = mesh.current;
    const { position } = geometry.attributes;
    if (true) {
      //@ts-ignore
      for (const i of helper.Enumerate(position.count)) {
        //edit final postion array[vertex index * vertext size + x,y,z index]
        position.array[i * 3 + 2] += ARRAY_OF_DIRECTION[i] * RATE_OF_CHANGE_MULTIPLIER * Math.random();
        /*
                    -1 or 1 *  .005
                    This gives the vertex a velocity eithre going up or down
                    multiple by a random number between 0 and 1 not inclusive
                    This gives the wave more shifting waves. The wave patterns change constantly
                */
        // if -.2 < z < .2 then chane the direction of the velocity
        if (position.array[i * 3 + 2] > MAX_APLITUDE || position.array[i * 3 + 2] < MIN_APLITUDE) {
          //oposite direction
          ARRAY_OF_DIRECTION[i] *= -1;
        }
        //boilder plate to update the vertex position
        position.needsUpdate = true;
        geometry.computeVertexNormals();
      }
    }
    if (opacity < 1) {
      setOpacity(opacity + 0.01);
    }
  }
  function set_ridges() {
    //boiler plate for getting the actual array of vertex from the plane mesh
    const { geometry } = mesh.current;
    const { position } = geometry.attributes;
    //@ts-ignore
    for (const i of helper.Enumerate(position.count)) {
      //set the staring positon of the vertex randomly between -.2 and .2
      position.array[i * 3 + 2] = Math.random() > 0.5 ? MIN_APLITUDE : MAX_APLITUDE;
      //boilder plate to update the vertex position
      position.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  }
  //run once
  useEffect(() => {
    set_ridges();
  }, []);
  //run every frame
  useFrame(() => {
    animate();
  });

  return (
    <>
      <perspectiveCamera />
      <directionalLight args={["#7FE2DB", 1.5]} position={[-10, 0, 1]} />

      <mesh ref={mesh} position={[1, 1, 1]}>
        <planeGeometry args={[20, 10, 10, 15]}></planeGeometry>
        <meshPhongMaterial
          color="white"
          opacity={opacity < 0.7 ? opacity : 0.7}
          transparent
        ></meshPhongMaterial>
      </mesh>
    </>
  );
}

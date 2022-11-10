import { NextPage } from "next";
import Ecard from "./ecard";
import Nav from "./nav";
import Wave from "../three/wave";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Ecard />
      <header>
        <Nav />
      </header>
      <div className="homeBackgrounds">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
      </div>
      {props.children}
    </>
  );
};
export default Home;

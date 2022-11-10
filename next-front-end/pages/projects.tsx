import ProjectsContainer from "../components/projectsContainer";
import ProjectsOptionsBar from "../components/projectsOptionsBar";
import Layout from "../layouts/home";
import styles from "../styles/projects.module.css";
import Wave from "../three/wave";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function Projects() {
  return (
    //@ts-ignore
    <Layout>
      <div className="homeBackgrounds">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
      </div>
      <main className={`${styles.projects} projects`}>
        <ProjectsContainer />
        <ProjectsOptionsBar />
      </main>
    </Layout>
  );
}

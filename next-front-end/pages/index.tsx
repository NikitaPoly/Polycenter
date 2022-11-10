import styles from "../styles/Home.module.css";
import Layout from "../layouts/home";
import Wave from "../three/wave";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    //@ts-ignore
    <Layout>
      <main className={`${styles.home} home`}>
        <div className="homeBackgrounds">
          <Canvas shadows>
            <Suspense fallback={null}>
              <Wave />
            </Suspense>
          </Canvas>
        </div>
        <section>
          <h1>New</h1>
          <p>information about new features of website</p>
        </section>
        <section>
          <h2>Links</h2>
          <p>Links to othere "apps" on the website and projects</p>
        </section>
        <section>
          <h2>About</h2>
          <p> short summary of purpose of website</p>
        </section>
      </main>
    </Layout>
  );
}

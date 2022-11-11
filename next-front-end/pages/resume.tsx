import styles from "../styles/resume.module.css";
import Layout from "../layouts/home";
export default function Resume() {
  return (
    //@ts-ignore
    <Layout>
      <main className={`${styles.resume} resume`}>
        <ul>
          <button className="github">GitHub</button>
          <button className="linkedin">LinkedIn</button>
          <button className="resume">Resume</button>
        </ul>
        <p></p>
      </main>
    </Layout>
  );
}

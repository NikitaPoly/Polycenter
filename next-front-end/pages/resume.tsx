import styles from "../styles/resume.module.css";
import Layout from "../layouts/home";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
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
};
export default Resume;

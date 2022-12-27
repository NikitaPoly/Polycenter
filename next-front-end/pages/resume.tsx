import styles from "../styles/resume.module.css";
import Layout from "../layouts/home";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <Layout>
      <main className={`${styles.resume} resume`}>
        <ul>
          <button
            className="github"
            onClick={() => {
              window.open("https://github.com/NikitaPoly");
            }}
          >
            GitHub
          </button>
          <button
            className="linkedin"
            onClick={() => {
              window.open("https://www.linkedin.com/in/nikitapolyakovlink/");
            }}
          >
            LinkedIn
          </button>
          <button
            className="resume"
            onClick={() => {
              alert("sorry no resume yet");
            }}
          >
            Resume
          </button>
        </ul>
        <p></p>
      </main>
    </Layout>
  );
};
export default Resume;

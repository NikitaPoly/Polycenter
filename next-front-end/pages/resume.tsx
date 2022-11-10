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
        <p>
          I am a software engineer from the greater Seattle area. My high school passion for programming lead
          to graduate from DePauw University with a computer science degree. In addition to working in Seattle
          programming continues to stay my passion. Teaching others is an important part of software
          development as it helps look at problems from different perspectives, while having an open mind to
          learning not only increases tech skills but also exercises the brain.
        </p>
      </main>
    </Layout>
  );
}

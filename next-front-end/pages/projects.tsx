import ProjectsContainer from "../components/projectsContainer";
import ProjectsOptionsBar from "../components/projectsOptionsBar";
import Layout from "../layouts/home";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    //@ts-ignore
    <Layout>
      <main className={`${styles.projects} projects`}>
        <ProjectsContainer />
        <ProjectsOptionsBar />
      </main>
    </Layout>
  );
}

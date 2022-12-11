import { NextPage } from "next";
import ProjectsContainer from "../components/projectsContainer";
import ProjectsOptionsBar from "../components/projectsOptionsBar";
import Layout from "../layouts/home";
import styles from "../styles/projects.module.css";

const Projects: NextPage = () => {
  return (
    <Layout>
      <main className={`${styles.projects} projects`}>
        <ProjectsContainer />
        <ProjectsOptionsBar />
      </main>
    </Layout>
  );
};
export default Projects;

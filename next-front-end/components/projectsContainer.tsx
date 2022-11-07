import { useRef } from "react";
import { ListOfProjects } from "../static-content/projectsList";
import ProjectCard from "./projectsCard";
import styles from "../styles/projects.module.css";

export default function ProjectsContainer() {
  const container = useRef(null);
  const projectsComponentList = ListOfProjects.map((projectData) => (
    <ProjectCard
      key={Math.random()}
      name={projectData.name}
      type={projectData.type}
      tags={projectData.tags}
      link={projectData.link}
      bio={projectData.bio}
    />
  ));
  return (
    <div className={styles.projectsContainer} ref={container}>
      {projectsComponentList}
    </div>
  );
}

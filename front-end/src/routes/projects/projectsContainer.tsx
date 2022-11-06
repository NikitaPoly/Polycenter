import { component$, useRef } from "@builder.io/qwik";
import { ListOfProjects } from "./projectsList";
import ProjectCard from "./projectCard";

export default component$(() => {
  const container = useRef();
  const projectsComponentList = ListOfProjects.map((projectData) => (
    <ProjectCard
      name={projectData.name}
      type={projectData.type}
      tags={projectData.tags}
      link={projectData.link}
      bio={projectData.bio}
    />
  ));
  return (
    <div
      class="projectsContainer"
      ref={container}
      onWheel$={(e: WheelEvent) => {
        if (container && container.current) {
          container.current.scrollLeft += e.deltaY;
        }
      }}
    >
      {projectsComponentList}
    </div>
  );
});

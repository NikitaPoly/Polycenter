import { component$ } from "@builder.io/qwik";
import { Project } from "./projectsList";

export default component$((props: Project) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <h2>{props.type}</h2>
      <ul>
        Tags:
        {props.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <a>{props.link}</a>
      <p>{props.bio}</p>
    </section>
  );
});

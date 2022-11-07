export default function ProjectCard(props: any) {
  return (
    <section>
      <h1>{props.name}</h1>
      <h2>{props.type}</h2>
      <ul>
        Tags:
        {props.tags.map((tag: any, idx: number) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
      <a>{props.link}</a>
      <p>{props.bio}</p>
    </section>
  );
}

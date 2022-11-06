import { component$, useStyles$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import styles from "./nav.css";

export default component$(() => {
  useStyles$(styles);
  const documentMeta = useDocumentHead();
  return (
    <nav>
      <a href="/" className={documentMeta.title === "PolyCenter" ? "selected" : ""}>
        Home
      </a>
      <a href="/projects" className={documentMeta.title === "Projects" ? "selected" : ""}>
        Projects
      </a>
      <div>
        <img src="PCLogo.svg" />
      </div>
      <a href="/resume" className={documentMeta.title === "Resume" ? "selected" : ""}>
        Resume
      </a>
      <a href="/contact" className={documentMeta.title === "Contact" ? "selected" : ""}>
        Contact
      </a>
    </nav>
  );
});

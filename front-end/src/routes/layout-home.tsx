import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, DocumentLink } from "@builder.io/qwik-city";
import Nav from "../components/layout/home/Nav";
import Ecard from "../components/layout/home/Ecard";

const fontLinks: DocumentLink[] = [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "crossorigin" },
  {
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
    rel: "stylesheet",
  },
];
export const head: DocumentHead = {
  links: fontLinks,
};

export default component$(() => {
  return (
    <>
      <Ecard />
      <header>
        <Nav />
      </header>
      <Slot />
    </>
  );
});

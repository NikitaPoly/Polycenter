import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Contact Page</div>;
});
export const head: DocumentHead = {
  title: "Contact",
};

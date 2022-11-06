import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./index.css";

export default component$(() => {
  useStyles$(styles);
  return (
    <main class="contact">
      <label class="email">
        Email <input type="email" />
      </label>
      <label class="title">
        Title <input type="text" />
      </label>
      <label class="body">
        Body <textarea />
      </label>
      <div class="button">
        <button>Send</button>
      </div>
      <div class="error">Error message</div>
    </main>
  );
});
export const head: DocumentHead = {
  title: "Contact",
};

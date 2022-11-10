import { useState } from "react";
import styles from "../styles/contact.module.css";
import Layout from "../layouts/home";
import { ContactMessage } from "./api/contact";
import Wave from "../three/wave";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function SendMessage(message: ContactMessage) {
  try {
    const res = fetch("/api/contact", { method: "POST", body: JSON.stringify(message) });
  } catch (e) {
    console.log(e);
  }
}
function CheckInputs(emai: string, title: string, body: string): string {
  if (emai === "" || title === "" || body === "") {
    return "All inputs are required";
  }
  return "";
}
export default function Contact() {
  const [errorMsg, setErrorMsg] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");
  return (
    //@ts-ignore
    <Layout>
      <div className="homeBackgrounds">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
      </div>
      <main className={`${styles.contact} contact`}>
        <label className={styles.email}>
          Email{" "}
          <input
            value={userEmail}
            type="email"
            onChange={(e) => {
              setUserEmail((e.target as any).value);
            }}
          />
        </label>

        <label className={styles.title}>
          Title{" "}
          <input
            value={messageTitle}
            type="text"
            onChange={(e) => {
              setMessageTitle((e.target as any).value);
            }}
          />
        </label>

        <label className={styles.body}>
          Body{" "}
          <textarea
            value={messageBody}
            onChange={(e) => {
              setMessageBody((e.target as any).value);
            }}
          />
        </label>
        <div className={styles.error}>{errorMsg}</div>
        <div className={styles.button}>
          <button
            onClick={() => {
              const errorMsg: string = CheckInputs(userEmail, messageTitle, messageBody);
              if (errorMsg !== "") {
                setErrorMsg(errorMsg);
                return;
              }
              SendMessage({ email: userEmail, title: messageTitle, body: messageBody });
              setErrorMsg("Thank you");
              setUserEmail("");
              setMessageBody("");
              setMessageTitle("");
            }}
          >
            Send
          </button>
        </div>
      </main>
    </Layout>
  );
}

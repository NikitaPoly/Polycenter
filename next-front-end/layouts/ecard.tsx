import Image from "next/image";
import styles from "./ecard.module.css";
import ecardBackground from "../images/ecardBackground.jpg";
export default function Ecard() {
  return (
    <div className={styles.ecard}>
      <span className={styles.span1}>Nikita Polyakov</span>
      <span className={styles.span2}>Software Engineer</span>
      <span className={styles.span3}>Greater Seattle Area</span>
      <a href="https://www.linkedin.com/in/nikitapolyakovlink/"> LinkedIn</a>
    </div>
  );
}

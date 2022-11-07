import Image from "next/image";
import styles from "./nav.module.css";
import logo from "../images/PCLogo.svg";
import { useRef } from "react";
export default function Nav() {
  const root = useRef(null);
  return (
    <nav ref={root} className={styles.home}>
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <div>
        <Image src={logo} alt="PC Logo" />
      </div>
      <a href="/resume">Resume</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

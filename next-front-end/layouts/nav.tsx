import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import logo from "../images/PCLogo.svg";
import { useRef } from "react";
export default function Nav() {
  const root = useRef(null);
  return (
    <nav ref={root} className={styles.home}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <div>
        <Image src={logo} alt="PC Logo" />
      </div>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

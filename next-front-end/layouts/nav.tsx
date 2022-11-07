import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import logo from "../images/PCLogo.svg";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className={styles.home}>
      <Link href="/" className={router.pathname === "/" ? styles.selected : ""}>
        Home
      </Link>
      <Link href="/projects" className={router.pathname === "/projects" ? styles.selected : ""}>
        Projects
      </Link>
      <div>
        <Image src={logo} alt="PC Logo" />
      </div>
      <Link href="/resume" className={router.pathname === "/resume" ? styles.selected : ""}>
        Resume
      </Link>
      <Link href="/contact" className={router.pathname === "/contact" ? styles.selected : ""}>
        Contact
      </Link>
    </nav>
  );
}

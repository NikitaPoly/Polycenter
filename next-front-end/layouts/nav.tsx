import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import logo from "../images/PCLogo.svg";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className={styles.home}>
      <Link href="/" className={router.pathname === "/" ? styles.selected : ""}>
        <HomeIcon />
      </Link>
      <Link href="/projects" className={router.pathname === "/projects" ? styles.selected : ""}>
        <CodeIcon />
      </Link>
      <div>
        <Image src={logo} alt="PC Logo" />
      </div>
      <Link href="/resume" className={router.pathname === "/resume" ? styles.selected : ""}>
        <DescriptionIcon />
      </Link>
      <Link href="/contact" className={router.pathname === "/contact" ? styles.selected : ""}>
        <ContactMailIcon />
      </Link>
    </nav>
  );
}

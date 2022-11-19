import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import logo from "../images/PCLogo.svg";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Head from "next/head";

export default function Nav() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.pathname === "/" ? "home" : router.pathname.replace("/", "")}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <nav className={styles.home}>
        <Link href="/" className={router.pathname === "/" ? styles.selected : ""}>
          <HomeIcon fontSize="large" />
        </Link>
        <Link href="/projects" className={router.pathname === "/projects" ? styles.selected : ""}>
          <CodeIcon fontSize="large" />
        </Link>
        <div>
          <Image src={logo} alt="PC Logo" />
        </div>
        <Link href="/resume" className={router.pathname === "/resume" ? styles.selected : ""}>
          <DescriptionIcon fontSize="large" />
        </Link>
        <Link href="/contact" className={router.pathname === "/contact" ? styles.selected : ""}>
          <ContactMailIcon fontSize="large" />
        </Link>
      </nav>
    </>
  );
}

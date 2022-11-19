import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./sdsnav.module.css";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SdsNav() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.pathname === "/sds" ? "PT SDS" : router.pathname.replace("/", "")}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <nav className={styles.sds}>
        <Link href="/sds" className={router.pathname === "/sds" ? styles.selected : ""}>
          <HomeIcon className={styles.svgIcon} />
        </Link>
        <Link href="/sds/order" className={router.pathname === "/sds/order" ? styles.selected : ""}>
          <FastfoodIcon className={styles.svgIcon} />
        </Link>
        <Link href="/sds/deliver" className={router.pathname === "/sds/deliver" ? styles.selected : ""}>
          <DeliveryDiningIcon className={styles.svgIcon} />
        </Link>
        <Link href="/sds/settings" className={router.pathname === "/sds/settings" ? styles.selected : ""}>
          <SettingsIcon className={styles.svgIcon} />
        </Link>
      </nav>
    </>
  );
}

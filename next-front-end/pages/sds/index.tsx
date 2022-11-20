import Layout from "../../layouts/sds";
import { useSession, signIn, signOut } from "next-auth/react";
import LoggedIn from "../../components/loggedInSDSHome";
import LoggedOut from "../../components/loggedOutSDSHome";
import styles from "../../styles/sdsHome.module.css";

export default function SDShome() {
  const { data: session } = useSession();
  return (
    <Layout>
      <main className={`${styles.sdsHome} sds`}>{session ? <LoggedIn /> : <LoggedOut />}</main>
    </Layout>
  );
}

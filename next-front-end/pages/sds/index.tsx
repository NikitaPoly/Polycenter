import Layout from "../../layouts/sds";
import LoggedIn from "../../components/loggedInSDSHome";
import LoggedOut from "../../components/loggedOutSDSHome";
import styles from "../../styles/sdsHome.module.css";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export type PROPS = { session: any };
export default function SDShome({ session }: PROPS) {
  return (
    <Layout>
      <main className={`${styles.sdsHome} sds`}>
        {session ? <LoggedIn userName={session.user.name} /> : <LoggedOut />}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await unstable_getServerSession(context.req, context.res, authOptions),
    },
  };
}

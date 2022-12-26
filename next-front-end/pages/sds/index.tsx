import Layout from "../../layouts/sds";
import LoggedIn from "../../components/loggedInSDSHome";
import LoggedOut from "../../components/loggedOutSDSHome";
import styles from "../../styles/sdsHome.module.css";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SDShome(props: any) {
  return (
    <Layout>
      <main className={`${styles.sdsHome} sds`}>
        {props.session ? <LoggedIn userName={props.session.user.name} /> : <LoggedOut />}
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

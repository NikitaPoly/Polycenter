import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import { Host } from "../../static-content/utils";
import { SDSUserData } from "../../static-content/types";
import { unstable_getServerSession } from "next-auth/next";

export type PROPS = {
  session: any;
  userData: SDSUserData;
};

export default function SDShome({ session, userData }: PROPS) {
  return (
    <Layout>
      <main className="sds">
        <header>
          <h1>Deliver Order</h1>
        </header>
      </main>
      <style jsx>{`
        header {
          background-color: var(--sds-dark);
          color: white;
          padding: 1rem;
        }
      `}</style>
    </Layout>
  );
}
export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  //if no session then redirect to home
  if (!session) {
    return {
      redirect: {
        destination: "/sds",
      },
    };
  } else {
    const SDSUserDataRequest = await fetch(
      "http://" + Host() + `:8080/sdsUsers/getUserData?email=${session.user?.email}`
    );
    const GoResponseBody: SDSUserData = await SDSUserDataRequest.json();
    return {
      props: {
        session: await unstable_getServerSession(context.req, context.res, authOptions),
        userData: GoResponseBody,
      },
    };
  }
};

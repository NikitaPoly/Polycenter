import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import InfoWindowSDSSettings from "../../components/infoWindowSDSSettings";
import { Host } from "../../static-content/utils";
import { SDSUserData } from "../../static-content/types";

export type PROPS = {
  session: any;
  userData: SDSUserData;
};
export default function SDShome({ session, userData }: PROPS) {
  return (
    <Layout>
      <main className="sds">
        <h1>{`Welcome ${session.user.name}`}</h1>
        <InfoWindowSDSSettings userData={userData} />
      </main>
      <style jsx>{`
        h1 {
          height: 10vh;
          color: white;
          background-color: var(--sds-dark);
          padding-top: 1rem;
          padding-left: 1rem;
        }
        @media only screen and (max-width: 425px) {
          h1 {
            text-align: center;
            font-size: 1.5rem;
          }
        }
        @media only screen and (max-width: 920px) and (orientation: landscape) {
          h1 {
            text-align: center;
            font-size: 1.5rem;
          }
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

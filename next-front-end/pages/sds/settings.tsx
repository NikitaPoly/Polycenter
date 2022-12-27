import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import InfoWindowSDSSettings from "../../components/infoWindowSDSSettings";

export default function SDShome(props: any) {
  return (
    <Layout>
      <main className="sds">
        <h1>{`Welcome ${props.session.user.name}`}</h1>
        <InfoWindowSDSSettings />
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
        @media only screen and (max-width: 899px) and (orientation: landscape) {
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
    return {
      props: {
        session: await unstable_getServerSession(context.req, context.res, authOptions),
      },
    };
  }
};

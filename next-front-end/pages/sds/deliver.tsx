import Layout from "../../layouts/sds";
import { useSession, getSession } from "next-auth/react";

export default function SDShome() {
  return (
    <Layout>
      <main className="sds"></main>
    </Layout>
  );
}
export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/sds",
      },
    };
  }
  return { props: { session } };
};

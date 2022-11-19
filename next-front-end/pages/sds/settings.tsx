import Layout from "../../layouts/sds";
import { useSession, getSession } from "next-auth/react";

export default function SDShome() {
  const { data: session } = useSession();

  return (
    <Layout>
      <main className="sds">{`Welcome ${((session as any).user as any).name}`}</main>
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

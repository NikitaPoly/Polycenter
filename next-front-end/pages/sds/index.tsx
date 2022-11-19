import Layout from "../../layouts/sds";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SDShome() {
  const { data: session } = useSession();
  return (
    <Layout>
      <main className="sds">
        {session ? (
          <div>
            {`welcome ${session.user?.email}`} <button onClick={() => signOut()}>sing out</button>{" "}
          </div>
        ) : (
          <div>
            Not logged in <button onClick={() => signIn()}>Login</button>
          </div>
        )}
      </main>
    </Layout>
  );
}

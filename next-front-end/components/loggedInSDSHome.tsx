import { useSession, signIn, signOut } from "next-auth/react";

export default function LoggedInSDSHome() {
  const { data: session } = useSession();

  return (
    <div
      onClick={() => {
        signOut();
        console.log(session);
      }}
    >
      LoggedIn as {session?.user?.name}
    </div>
  );
}

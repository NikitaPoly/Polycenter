import { signOut } from "next-auth/react";

export default function LoggedInSDSHome(props: any) {
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      LoggedIn as {props.userName}
    </div>
  );
}

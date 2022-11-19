import SdsNav from "./sdsnav";
import styles from "./sds.module.css";
import { SessionProvider } from "next-auth/react";

export default function sds(props: any) {
  return (
    <>
      {props.children}
      <SdsNav />
    </>
  );
}

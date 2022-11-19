import SdsNav from "./sdsnav";
import styles from "./sds.module.css";

export default function sds(props: any) {
  return (
    <>
      {props.children}
      <SdsNav />
    </>
  );
}

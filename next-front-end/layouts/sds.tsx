import SdsNav from "./sdsnav";

export default function sds(props: any) {
  return (
    <>
      {props.children}
      <SdsNav />
    </>
  );
}

import NavSDS from "./nav-sds";

export default function sds(props: any) {
  return (
    <>
      <header>
        <NavSDS />
      </header>
      {props.children}
    </>
  );
}

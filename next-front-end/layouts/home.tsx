import { NextPage } from "next";
import Ecard from "./ecard";
import Nav from "./nav";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Ecard />
      <header>
        <Nav />
      </header>
      {props.children}
    </>
  );
};
export default Home;

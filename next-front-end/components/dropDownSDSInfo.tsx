export default function DropDownSDSInfo(props: any) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <style jsx>{`
        p {
          background-color: white;
          padding: 1rem;
          border-radius: 50px;
          margin-bottom: 3vh;
          font-size: 2vh;
        }
        h1 {
          color: var(--sds-dark);
          text-align: center;
          font-size: 5vh;
        }
      `}</style>
    </>
  );
}

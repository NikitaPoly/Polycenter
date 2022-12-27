export default function DropDownSDSInfo(props: any) {
  return (
    <>
      <h1>{props.title}</h1>
      <div id="css">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      <style jsx>{`
        div#css {
          display: flex;
          justify-content: center;
        }
        p {
          background-color: white;
          padding: 1.5rem;
          border-radius: 50px;
          margin-bottom: 1vh;
          font-size: 2vh;
          width: 70%;
        }
        h1 {
          color: var(--sds-dark);
          text-align: center;
          font-size: 4vw;
        }
        @media only screen and (max-width: 1300px) {
          p {
            font-size: 1.5vw;
          }
        }
        @media only screen and (max-width: 425px) {
          p {
            font-size: 2vh;
          }
          h1 {
            font-size: 5vh;
          }
        }
        @media only screen and (max-width: 920px) and (orientation: landscape) {
          p {
            display: none;
          }
          h1 {
            font-size: 15vh;
          }
        }
      `}</style>
    </>
  );
}

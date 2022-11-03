import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  function handleClick(brodet) {
    if (brodet) {
      window.location =
        "mailto:johndahlberg@hotmail.com ?cc=johan@calgaro.se &subject=Vi vill ha Brödet såklart &body=Hej, vi är intresserade av ert grymma live band, här är mina kontaktuppgifter:";
    } else {
      window.location =
        "mailto:johndahlberg@hotmail.com ?subject=John Olle &body=Hej, vi är intresserade av er grymma duo, hör gärna av er, här är mina kontaktuppgifter: ";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          flexGrow: "1",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <div className="textContainer">
          <p style={{ color: "rgb(216, 158, 81)" }}>
            Brödet har något för allas stilar, önskas det party har vi ett fullt
            live band som kan dra igång festen. Där spelas allt från angels med
            Robbie williams till DU HAST.
          </p>
          <p style={{ color: "rgb(216, 158, 81)" }}>
            Önskas det istället lite lugnare musik som kan dra igång
            företagseventet eller öka stämningen på minglet så har vi även den
            magiska duon John o Olle
          </p>
          <p style={{ color: "rgb(216, 158, 81)" }}>
            Klicka på bilderna nedan för intresseanmälan!
          </p>
        </div>
        <div className="imageContainer">
          <div className="image" onClick={() => handleClick(true)}>
            <img src="/images/brodet.jpg"></img>
            <div className="image__overlay">
              <div className="image__title">Brödet</div>
              <p className="p.image__description">klicka här för bokning</p>
            </div>
          </div>
          <div className="image" onClick={() => handleClick(false)}>
            <img
              src="/images/johnolle.png"
              style={{ objectPosition: "top" }}
            ></img>
            <div className="image__overlay">
              <div className="image__title">John & Olle</div>
              <p className="p.image__description">klicka här för bokning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

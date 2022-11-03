import Head from "next/head";
import Navbar from "../components/navbar";
import SocialFollow from "../components/socialFollow";

export default function Home() {
  function handleClick(brodet) {
    if (brodet == "Brodet") {
      window.location =
        "mailto:johndahlberg@hotmail.com ?cc=johan@calgaro.se &subject=Vi vill ha Brödet såklart &body=Hej, vi är intresserade av ert grymma live band, här är mina kontaktuppgifter:";
    } else if (brodet == "JohnOlle") {
      window.location =
        "mailto:johndahlberg@hotmail.com ?subject=John Olle &body=Hej, vi är intresserade av er grymma duo, hör gärna av er, här är mina kontaktuppgifter: ";
    } else if (brodet == "Oggebomben") {
      window.location =
        "mailto:johndahlberg@hotmail.com ?subject=Oggebomben &body=Hej, vi är intresserade av er grymma DJ, här är mina kontaktuppgifter: ";
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
        }}
      >
        <div className="textContainer">
          <p>
            <b>BRÖDET</b> är bandet med stort B - ett fullt 6-mannaliveband som
            drar igång festen med ösiga blandade hits som ingen kan stå emot.
            Boka oss till ert evenemang för en säker succékväll!
          </p>
          <p>
            Önskas istället lite lugnare musik som kan dra igång företagseventet
            eller öka stämningen på minglet så har vi den magiska duon{" "}
            <b>JOHN OCH OLLE</b>.
          </p>
          <p>
            För er som helst skippar middagen och åker direkt till den tyska
            ravescenen kan ni boka <b>OGGEBOMBEN</b> som förgyller er natt.
          </p>
          <p>Klicka på bilderna nedan för intresseanmälan!</p>
        </div>
        <div className="imageContainer">
          <div className="image" onClick={() => handleClick("Brodet")}>
            <img src="/images/brodet.jpg"></img>
            <div className="image__overlay">
              <div className="image__title">Brödet</div>
              <p className="p.image__description">klicka här för bokning</p>
            </div>
          </div>
          <div className="image" onClick={() => handleClick("JohnOlle")}>
            <img
              src="/images/johnolle.png"
              style={{ objectPosition: "top" }}
            ></img>
            <div className="image__overlay">
              <div className="image__title">John & Olle</div>
              <p className="p.image__description">klicka här för bokning</p>
            </div>
          </div>
          <div className="image" onClick={() => handleClick("Oggebomben")}>
            <img
              src="/images/Oggebomben.jpg"
              style={{ objectPosition: "top" }}
            ></img>
            <div className="image__overlay">
              <div className="image__title">Oggebomben</div>
              <p className="p.image__description">klicka här för bokning</p>
            </div>
          </div>
        </div>
        <SocialFollow></SocialFollow>
      </div>
    </div>
  );
}

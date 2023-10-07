import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Machinery() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">MILLING CNC</h2>
        <div className="machining-info">
          <div>
            <h3 className="packShipServiceSubtitle">DEPO DYNAMIC</h3>
            <p>5 axis machining centre</p>
            <p>X 1000 mm Y 900 mm Z 600 mm</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">DMU 60 MONOBLOCK</h3>
            <p>5 axis machining centre</p>
            <p>X 630 mm Y 560 mm Z 560 mm</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">DMG DMC 80H</h3>
            <p>Horizontal machining centre</p>
            <p>X 900 mm Y 710 mm Z 710 mm</p>
            <p>With 4th Axis Table</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">DMG DMC 80H</h3>
            <p>Horizontal machining centre</p>
            <p>X 900 mm Y 710 mm Z 710 mm</p>
            <p>With 4th Axis Table</p>
          </div>
          {/* Diğer CNC makineleri buraya ekleyin */}
        </div>
        <h2 className="packShipServicesTitle">TURNING CNC</h2>
        <div className="machining-info">
          <div>
            <h3 className="packShipServiceSubtitle">OKUMA MACTURN 30</h3>
            <p>Diameter 430 mm Y 190 mm Z1090 mm</p>
            <p>5 axis</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">HEYLIGENSTAEDT</h3>
            <p>Diameter 900 mm Length 2500 mm</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">MAZAK NEXUS 200L</h3>
            <p>Diameter 400 mm Length 1000 mm</p>
          </div>
          <div>
            <h3 className="packShipServiceSubtitle">MAZAK NEXUS 150</h3>
            <p>Diameter 300 mm Length 500 mm</p>
          </div>
          {/* Diğer CNC torna makineleri buraya ekleyin */}
        </div>
        {/* Diğer CNC makineleri ve bilgileri buraya ekleyin */}
      </div>
      <Footer />
    </>
  );
}

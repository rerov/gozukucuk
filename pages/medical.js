import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function MedicalEquipment() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">Medical Equipment Solutions</h2>
        <h3 className="packShipServiceSubtitle">Medical Equipment Manufacturing</h3>
        <p>
          In the medical sector, precision and quality are paramount. Gozukucuk Machinery excels in manufacturing medical devices and equipment that meet the highest industry standards for safety and performance.
        </p>
        <h3 className="packShipServiceSubtitle">Custom Medical Device Design</h3>
        <p>
          Our design and engineering services are tailored to the medical industry. We work closely with you to develop custom medical devices and equipment that align with your unique specifications.
        </p>
        <h3 className="packShipServiceSubtitle">Healthcare Solutions</h3>
        <p>
          We offer specialized solutions for the healthcare sector, serving as a trusted partner for patient care and diagnostic equipment. Our commitment to quality ensures reliable solutions for the medical field.
        </p>
        {/* Diğer içerikler buraya eklenebilir */}
      </div>
      <Footer />
    </>
  );
}
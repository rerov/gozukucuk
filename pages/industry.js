import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function IndustryMachinery() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">Industry Machinery Solutions</h2>
        <p>
          Gozukucuk Machinery specializes in providing tailored solutions for the industry machinery sector. With years of experience, we understand the unique demands of this industry and offer comprehensive services to meet your needs.
        </p>
        <h3 className="packShipServiceSubtitle">Machinery Design</h3>
        <p>
          Our expert team excels in designing industrial machinery that precisely matches your requirements. We employ state-of-the-art technology to create detailed and efficient machinery designs.
        </p>
        <h3 className="packShipServiceSubtitle">Manufacturing</h3>
        <p>
          From design to production, we manage the entire process, ensuring the delivery of high-quality machinery with quick turnaround times. Our manufacturing capabilities are optimized to meet industry standards.
        </p>
        <h3 className="packShipServiceSubtitle">Maintenance and Repair</h3>
        <p>
          Trust us for all your maintenance and repair needs. We provide comprehensive services to keep your industrial machinery running efficiently and reliably.
        </p>
        {/* Diğer içerikler buraya eklenebilir */}
      </div>
      <Footer />
    </>
  );
}
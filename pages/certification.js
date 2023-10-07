import Header from "./components/header";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Certification() {
  const [open, setOpen] = useState();

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="certificationTitle">Certification</h2>
        <p>
          Gozukucuk Machinery is proud to hold various certifications that
          showcase our commitment to quality and excellence. These
          certifications are a testament to our dedication to providing
          high-quality precision engineering solutions.
        </p>
        <h3 className="certificationSubtitle"><strong>ISO 9001</strong></h3>
        <p>
          Our ISO 9001 certification signifies our adherence to strict quality management standards. It ensures that our processes
          are consistently monitored and improved to meet the needs of our
          clients.
        </p>
        <h3 className="certificationSubtitle"><strong>ISO 13485</strong></h3>
        <p>
          As holders of ISO 13485 certification, we are qualified to design and manufacture medical devices and equipment that meet
          rigorous international standards for safety and performance.
        </p>
        <h3 className="certificationSubtitle"><strong>AS9100</strong></h3>
        <p>
          Our AS9100 certification demonstrates our capabilities in the aerospace industry, guaranteeing that our products meet the
          high-quality demands of this sector.
        </p>
        <h3 className="certificationSubtitle"><strong>Other Industry-Specific Certifications</strong></h3>
        <p>
          In addition to the above certifications, we hold various industry-specific certifications that validate our expertise in serving sectors such as automotive,
          defense, and electronics.
        </p>
        <p>
          At Gozukucuk Machinery, we continuously invest in maintaining and
          expanding our certifications to better serve our clients and provide
          them with the assurance of quality.
        </p>
      </div>
      <Footer />
    </>
  );
}

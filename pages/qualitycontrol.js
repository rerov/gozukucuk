import Header from "./components/header";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function QualityControl() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="qualityControlTitle">Quality Control</h2>
        <p>
          Quality control is integral to our operations at Gozukucuk Machinery.
          We have established comprehensive quality control processes to
          guarantee that every component we produce meets or exceeds our
          clients' specifications.
        </p>
        <h3 className="qualityControlSubtitle">Quality Control Measures</h3>
        <ul>
          <li>
            <strong>Incoming Material Inspection:</strong><br />
            We carefully inspect all incoming materials to ensure they meet our
            quality standards before they are used in production.
          </li>
          <li>
            <strong>In-Process Inspection:</strong><br />
            Our skilled technicians perform in-process inspections to monitor
            production and identify any issues early in the manufacturing process.
          </li>
          <li>
            <strong>Final Inspection:</strong><br />
            Before components are shipped, they undergo a final inspection to
            verify their adherence to the required specifications and quality
            standards.
          </li>
          <li>
            <strong>Documentation and Traceability:</strong><br />
            We maintain detailed documentation and traceability records for every
            project, ensuring transparency and accountability.
          </li>
          <li>
            <strong>Continuous Improvement:</strong><br />
            We are committed to continuous improvement, regularly reviewing and
            enhancing our quality control processes.
          </li>
        </ul>
        <p>
          By prioritizing quality control, we can confidently deliver components
          that meet the highest industry standards, contributing to the success
          of our clients' projects.
        </p>
      </div>
      <Footer />
    </>
  );
}

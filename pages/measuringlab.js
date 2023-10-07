import Header from "./components/header";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function MeasuringLab() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="measuringLabTitle">Measuring Lab</h2>
        <p>
          Our state-of-the-art measuring lab is the cornerstone of our
          commitment to precision and quality. At Gozukucuk Machinery, we
          understand that accurate measurements are critical in the precision
          engineering field.
        </p>
        <h3 className="measuringLabSubtitle">Equipment and Technology</h3>
        <ul>
          <li>
            <strong>Coordinate Measuring Machines (CMMs):</strong><br />
            We utilize advanced CMMs to ensure that every component we produce
            meets precise dimensional requirements.
          </li>
          <li>
            <strong>Optical Measurement Systems:</strong><br />
            Our optical measurement systems are used for inspecting intricate and
            small parts, guaranteeing their accuracy.
          </li>
          <li>
            <strong>Surface Roughness Analyzers:</strong><br />
            We employ surface roughness analyzers to evaluate the surface finish
            of components, ensuring they meet the highest standards.
          </li>
          <li>
            <strong>Skilled Metrology Team:</strong><br />
            Our skilled metrology team operates and interprets the data from
            these tools, ensuring accurate and consistent measurements.
          </li>
        </ul>
        <p>
          Our measuring lab plays a vital role in our quality assurance process.
          It allows us to verify the quality of our components at every stage of
          production, ensuring that they conform to the strictest industry
          standards.
        </p>
      </div>
      <Footer />
    </>
  );
}

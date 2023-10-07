import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function CncMachining() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />

      <div className={styles.aciklamaSection}>
        <h2>
          <strong>
            <span style={{ fontSize: "17pt" }}>
              Our CNC Machining Capabilities
            </span>
          </strong>
        </h2>
        <h3>
          <strong>
            <span style={{ fontSize: "16.5pt" }}>Precision CNC Milling</span>
          </strong>
        </h3>
        <p style={{ color: "#f7f7f8" }}>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            At Gozukucuk Machinery, we excel in precision CNC milling. Our
            advanced milling machines are capable of handling a wide range of
            materials, from metals to plastics and everything in between.
            Whether you need complex 3D contours or intricate surface finishes,
            our CNC milling services deliver exceptional accuracy and
            consistency.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ fontSize: "16.5pt" }}>High-Speed CNC Turning</span>
          </strong>
        </h3>
        <p style={{ color: "#f7f7f8" }}>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            Our high-speed CNC turning services are ideal for producing
            cylindrical parts with precision and speed. We utilize advanced
            turning centers that can handle various materials and sizes. From
            prototypes to large production runs, our turning capabilities ensure
            your parts meet the strictest quality standards.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ fontSize: "16.5pt" }}>Multi-Axis Machining</span>
          </strong>
        </h3>
        <p style={{ color: "#f7f7f8" }}>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            For projects demanding complex geometries and tight tolerances, our
            multi-axis machining capabilities shine. We can perform simultaneous
            4-axis and 5-axis machining, enabling us to tackle intricate
            components with ease. This technology allows us to reduce setup
            times and enhance overall efficiency.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ fontSize: "16.5pt" }}>
              Prototyping and Production
            </span>
          </strong>
        </h3>
        <p style={{ color: "#f7f7f8" }}>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            Whether you require a single prototype or a large production run, we
            have the expertise and resources to accommodate your needs. Our CNC
            machining services are scalable, ensuring that you receive the same
            level of precision and quality, whether it's for a prototype or a
            high-volume order.
          </span>
        </p>
        <br />
        <br />
        <h2>
          <strong>
            <span style={{ color: "#374151", fontSize: "17pt" }}>
              Why Choose Gozukucuk Machinery for CNC Machining?
            </span>
          </strong>
        </h2>
        <h3>
          <strong>
            <span style={{ color: "#374151", fontSize: "16.5pt" }}>
              Precision and Accuracy
            </span>
          </strong>
        </h3>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            We understand that precision is paramount in precision engineering.
            Our CNC machining processes are meticulously controlled to ensure
            every part meets your exact specifications, no matter how intricate.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ color: "#374151", fontSize: "16.5pt" }}>
              Cutting-Edge Technology
            </span>
          </strong>
        </h3>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            We invest in the latest CNC machining technology to stay at the
            forefront of the industry. Our equipment is regularly maintained and
            upgraded to guarantee consistent quality and efficiency.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ color: "#374151", fontSize: "16.5pt" }}>
              Experienced Team
            </span>
          </strong>
        </h3>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            Our team of engineers and machinists boasts years of experience in
            precision engineering. They are skilled at translating your design
            concepts into tangible, high-precision parts.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ color: "#374151", fontSize: "16.5pt" }}>
              Quality Assurance
            </span>
          </strong>
        </h3>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            Quality is at the core of everything we do. We have a rigorous
            quality control process in place to ensure that every part we
            produce meets or exceeds industry standards.
          </span>
        </p>
        <h3>
          <strong>
            <span style={{ color: "#374151", fontSize: "16.5pt" }}>
              Competitive Pricing
            </span>
          </strong>
        </h3>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            We understand the importance of cost-effectiveness in today's
            competitive market. Our CNC machining services are priced
            competitively without compromising on quality.
          </span>
        </p>
        <h2>
          <strong>
            <span style={{ color: "#374151", fontSize: "17pt" }}>
              Contact Us
            </span>
          </strong>
        </h2>
        <p>
          <span style={{ color: "#374151", fontSize: "12pt" }}>
            Are you looking for precision CNC machining services tailored to
            your unique requirements? Contact Gozukucuk Machinery today to
            discuss your project. Our team is ready to provide you with a
            customized solution that delivers exceptional results.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}

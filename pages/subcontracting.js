import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Subcontracting() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2>Our Subcontracting Services</h2>
        <h3>Precision Machining</h3>
        <p>
          Gozukucuk Machinery specializes in precision machining services that
          adhere to the highest industry standards. Our state-of-the-art CNC
          machines and skilled machinists ensure that your components are
          manufactured with utmost accuracy and precision. Whether you require
          milling, turning, or multi-axis machining, we have the capabilities to
          meet your specific needs.
        </p>
        <h3>CAD/CAM Expertise</h3>
        <p>
          Leveraging cutting-edge CAD/CAM technology, we offer comprehensive
          design and manufacturing support. Our CAD designers create detailed 2D
          and 3D models, while our CAM experts generate optimized toolpaths for
          manufacturing. This seamless integration streamlines the production
          process, saving you time and resources.
        </p>
        <h3>Prototype Development</h3>
        <p>
          Need to bring your innovative ideas to life? Our prototype development
          services are tailored to help you test and refine your concepts. We
          assist in the rapid development of prototypes, allowing you to
          evaluate designs and make necessary adjustments before full-scale
          production.
        </p>
        <h3>Quality Assurance</h3>
        <p>
          Quality is at the core of our subcontracting services. We have
          stringent quality control processes in place to ensure that every
          component we produce meets or exceeds your specifications. Our
          commitment to quality extends to every stage of the subcontracting
          process.
        </p>
        <h3>Custom Solutions</h3>
        <p>
          At Gozukucuk Machinery, we understand that each project is unique. Our
          team of experts works closely with you to create custom subcontracting
          solutions that align with your industry, materials, and design
          requirements. We adapt to your needs, ensuring a seamless partnership.
        </p>
<br/>
        <h2>Why Choose Gozukucuk Machinery for Subcontracting?</h2>
        <h3>Precision and Reliability</h3>
        <p>
          Our reputation is built on precision and reliability. With Gozukucuk
          Machinery as your subcontracting partner, you can trust that your
          projects will be executed with the highest level of precision and
          quality.
        </p>
        <h3>State-of-the-Art Technology</h3>
        <p>
          We invest in the latest CNC machinery and CAD/CAM software to stay
          ahead in the industry. Our commitment to innovation ensures that you
          benefit from the most advanced technology available.
        </p>
        <h3>Skilled Workforce</h3>
        <p>
          Our team of skilled machinists, engineers, and designers bring years
          of expertise to the table. They work tirelessly to deliver
          subcontracting solutions that exceed your expectations.
        </p>
        <h3>Competitive Pricing</h3>
        <p>
          We understand the importance of cost-effectiveness. Our subcontracting
          services are competitively priced, ensuring that you receive
          exceptional value without compromising on quality.
        </p>
        <h3>Timely Delivery</h3>
        <p>
          We value your time. Our efficient processes and commitment to
          deadlines ensure that your components are delivered on schedule,
          helping you meet your project timelines.
        </p>

        <h2>Industries We Serve</h2>
        <p>
          Gozukucuk Machinery proudly serves a wide range of industries,
          including but not limited to:
        </p>
        <ul>
          <li>Aerospace</li>
          <li>Automotive</li>
          <li>Medical Devices</li>
          <li>Electronics</li>
          <li>Defense</li>
          <li>Energy</li>
          <li>Telecommunications</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Ready to take advantage of precision subcontracting services by
          Gozukucuk Machinery? Contact us today to discuss your project
          requirements. We are eager to collaborate with you and provide
          subcontracting solutions that propel your engineering projects to
          success.
        </p>
   
      </div>
      <Footer />
    </>
  );
}

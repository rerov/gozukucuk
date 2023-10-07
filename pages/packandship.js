import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Packandship() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">Our Pack & Ship Services</h2>
        <h3 className="packShipServiceSubtitle">Secure Packaging</h3>
        <p>
          At Gozukucuk Machinery, we understand the importance of protecting
          your precision-engineered components during transit. Our skilled
          packaging experts use industry-leading materials and techniques to
          ensure that your items arrive at their destination in pristine
          condition.
        </p>
        <h3 className="packShipServiceSubtitle">Custom Crating</h3>
        <p>
          For larger or delicate components, our custom crating solutions
          provide an added layer of protection. We design and fabricate wooden
          crates tailored to the dimensions and fragility of your items,
          ensuring they withstand the rigors of shipping.
        </p>
        <h3 className="packShipServiceSubtitle">Global Shipping</h3>
        <p>
          Our global shipping network allows us to deliver your components and
          products to destinations worldwide. We work with trusted shipping
          partners to ensure timely and reliable transportation, whether it's
          across the city or across the globe.
        </p>
        <h3 className="packShipServiceSubtitle">Tracking and Reporting</h3>
        <p>
          We offer real-time tracking and reporting services, so you can monitor
          the progress of your shipments from pickup to delivery. Our
          transparent and efficient tracking system gives you peace of mind
          throughout the shipping process.
        </p>
        <h3 className="packShipServiceSubtitle">
          Compliance and Documentation
        </h3>
        <p>
          Navigating international shipping regulations and customs requirements
          can be complex. Our team is well-versed in compliance and
          documentation, ensuring that your shipments meet all legal and
          regulatory standards.
        </p>    
      </div>
      <Footer />
    </>
  );
}

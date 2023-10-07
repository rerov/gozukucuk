import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Finishingservices() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="finishingServicesTitle">Our Finishing Services</h2>
        <h3 className="finishingServiceSubtitle">Surface Finishing</h3>
        <p>
          Gozukucuk Machinery specializes in precision surface finishing that
          transforms raw components into refined masterpieces. Our skilled
          artisans and state-of-the-art equipment ensure that your parts receive
          the perfect surface treatment, whether it's achieving a mirror-like
          polish or a specific texture.
        </p>
        <h3 className="finishingServiceSubtitle">Anodizing</h3>
        <p>
          Our anodizing services provide an extra layer of protection and
          aesthetics to your components. Anodized surfaces resist corrosion,
          enhance wear resistance, and come in a variety of vibrant colors.
          Whether you need Type II or Type III anodizing, we've got the
          expertise to meet your requirements.
        </p>
        <h3 className="finishingServiceSubtitle">Plating</h3>
        <p>
          Our plating solutions deliver both aesthetic appeal and functional
          benefits. Whether it's electroplating, electroless plating, or custom
          plating options, we provide a range of finishes, including gold,
          silver, chrome, and more.
        </p>
        <h3 className="finishingServiceSubtitle">Powder Coating</h3>
        <p>
          Powder coating offers a durable, environmentally-friendly finish for
          your components. With a wide selection of colors and textures, our
          powder coating services allow you to achieve a flawless appearance and
          superior protection.
        </p>
        <h3 className="finishingServiceSubtitle">Custom Finishes</h3>
        <p>
          At Gozukucuk Machinery, we understand that every project is unique.
          Our custom finishing solutions cater to your specific industry,
          materials, and design requirements. We collaborate closely with you to
          ensure that the finish aligns with your vision.
        </p>
      </div>
      <Footer />
    </>
  );
}

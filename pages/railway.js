import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function RailwayIndustry() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">Railway Industry Solutions</h2>
        <h3 className="packShipServiceSubtitle">Railway Component Manufacturing</h3>
        <p>
          As a reliable supplier, we specialize in producing high-quality components for the railway industry. From rails to wheels and beyond, our components are built to last.
        </p>
        <h3 className="packShipServiceSubtitle">Custom Railway Solutions</h3>
        <p>
          Our railway equipment and components are customized to your specific needs. We design solutions that meet the requirements of your railway projects, ensuring safety and efficiency.
        </p>
        <h3 className="packShipServiceSubtitle">Maintenance and Upgrades</h3>
        <p>
          For existing railway systems, we provide maintenance and upgrade services. Our expertise helps keep railway infrastructure safe and up-to-date, meeting the demands of modern transportation.
        </p>
        {/* Diğer içerikler buraya eklenebilir */}
      </div>
      <Footer />
    </>
  );
}
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function OtherIndustries() {
  const [open, setOpen] = useState();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={styles.aciklamaSection}>
        <h2 className="packShipServicesTitle">Other Industries</h2>
        <h3 className="packShipServiceSubtitle">Customized Solutions</h3>
        <p>
          Beyond the mentioned industries, Gozukucuk Machinery offers expertise and solutions for various other sectors. No matter your industry, we have the experience and flexibility to provide customized solutions for your unique projects.
        </p>
        <p>
          Feel free to use these extended content pieces as a starting point for creating individual pages on your website, and customize them further to align with your branding and specific services.
        </p>
      </div>
      <Footer />
    </>
  );
}

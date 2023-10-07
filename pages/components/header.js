import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header({ open, setOpen }) {
  return (
    <>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className={`${styles.sideMenu} ${styles.closeButton}`}
          >
            <a href="#">
              <p>MENU </p>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>

          <div className={styles.openMenu}>
            <div
              style={{
                background: "url('/img/services.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.menuSection}
            >
              <div className={styles.openMenuOverlay}></div>
              <div className={styles.openMenuTexts}>
                <a className={styles.openMenuBaslik} href="#">
                  SERVICES
                </a>
                <ul>
                  <li>
                    <a href="#">CNC Machining</a>
                  </li>
                  <li>
                    <a href="#">CAD CAM</a>
                  </li>
                  <li>
                    <a href="#">Subcontracting</a>
                  </li>
                  <li>
                    <a href="#">Finishing</a>
                  </li>
                  <li>
                    <a href="#">Pack & Ship</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              style={{
                background: "url('/img/industry.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.menuSection}
            >
              <div className={styles.openMenuOverlay}></div>
              <div className={styles.openMenuTexts}>
                <a className={styles.openMenuBaslik} href="#">
                  INDUSTRIES
                </a>
                <ul>
                  <li>
                    <a href="#">Industry</a>
                  </li>
                  <li>
                    <a href="#">Machinery</a>
                  </li>
                  <li>
                    <a href="#">Medical</a>
                  </li>
                  <li>
                    <a href="#">Railways</a>
                  </li>
                  <li>
                    <a href="#">Other</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              style={{
                background: "url('/img/services.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.menuSection}
            >
              <div className={styles.openMenuOverlay}></div>
              <div className={styles.openMenuTexts}>
                <a className={styles.openMenuBaslik} href="#">
                  QUALITY
                </a>
                <ul>
                  <li>
                    <a href="#">Certification</a>
                  </li>
                  <li>
                    <a href="#">Measuring Lab</a>
                  </li>
                  <li>
                    <a href="#">Quality Control</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                background: "url('/img/industry.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.menuSection}
            >
              <div className={styles.openMenuOverlay}></div>
              <div className={styles.openMenuTexts}>
                <a className={styles.openMenuBaslik} href="#">
                  ABOUT US
                </a>
                <ul>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">References</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                background: "url('/img/services.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.menuSection}
            >
              <div className={styles.openMenuOverlay}></div>
              <div className={styles.openMenuTexts}>
                <a className={styles.openMenuBaslik} href="#">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.topHeader}>
        <div>
          <a href="#">EN</a>
          <a href="#">TR</a>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.logo}>
          <img src="/img/logo_home.gif"></img>
        </div>
        <div className={styles.rightMenu}>
          <ul>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">CERTIFICATION</a>
            </li>
            <li>
              <a href="#">REFERENCES</a>
            </li>

            <li>
              <a href="#">GET CONTACTED</a>
            </li>
          </ul>
          <div onClick={() => setOpen(true)} className={styles.sideMenu}>
            <a href="#">
              <p>MENU </p>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

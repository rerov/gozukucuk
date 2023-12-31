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
                    <a href="/cncmachining">CNC Machining</a>
                  </li>
                  <li>
                    <a href="/cadcam">CAD CAM</a>
                  </li>
                  <li>
                    <a href="/subcontracting">Subcontracting</a>
                  </li>
                  <li>
                    <a href="/finishing">Finishing</a>
                  </li>
                  <li>
                    <a href="/packandship">Pack & Ship</a>
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
                    <a href="/industry">Industry</a>
                  </li>
                  <li>
                    <a href="/machinery">Machinery</a>
                  </li>
                  <li>
                    <a href="/medical">Medical</a>
                  </li>
                  <li>
                    <a href="/railway">Railways</a>
                  </li>
                  <li>
                    <a href="/other">Other</a>
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
                    <a href="/certification">Certification</a>
                  </li>
                  <li>
                    <a href="/measuringlab">Measuring Lab</a>
                  </li>
                  <li>
                    <a href="/qualitycontrol">Quality Control</a>
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
        <a href="/">
          <div className={styles.logo}>
            <img src="/img/logo_home.gif"></img>
          </div>
        </a>
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

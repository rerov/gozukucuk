import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {
        open && (
          <>
            <div onClick={() => setOpen(false)} className={`${styles.sideMenu} ${styles.closeButton}`}>
              <a href='#'>
                <p>MENU </p>
                <FontAwesomeIcon
                  icon={faBars}
                />
              </a>
            </div>

            <div className={styles.openMenu}>
              <div style={{ background: "url('/img/services.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.menuSection}>
                <div className={styles.openMenuOverlay}>

                </div>
                <div className={styles.openMenuTexts}>
                  <a className={styles.openMenuBaslik} href='#'>SERVICES</a>
                  <ul>
                    <li><a href='#'>CNC Machining</a></li>
                    <li><a href='#'>CAD CAM</a></li>
                    <li><a href='#'>Subcontracting</a></li>
                    <li><a href='#'>Finishing</a></li>
                    <li><a href='#'>Pack & Ship</a></li>
                  </ul>
                </div>
              </div>

              <div style={{ background: "url('/img/industry.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.menuSection}>
                <div className={styles.openMenuOverlay}>

                </div>
                <div className={styles.openMenuTexts}>
                  <a className={styles.openMenuBaslik} href='#'>INDUSTRIES</a>
                  <ul>
                    <li><a href='#'>Industry</a></li>
                    <li><a href='#'>Machinery</a></li>
                    <li><a href='#'>Medical</a></li>
                    <li><a href='#'>Railways</a></li>
                    <li><a href='#'>Other</a></li>
                  </ul>
                </div>
              </div>

              <div style={{ background: "url('/img/services.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.menuSection}>
                <div className={styles.openMenuOverlay}>

                </div>
                <div className={styles.openMenuTexts}>
                  <a className={styles.openMenuBaslik} href='#'>QUALITY</a>
                  <ul>
                    <li><a href='#'>Certification</a></li>
                    <li><a href='#'>Measuring Lab</a></li>
                    <li><a href='#'>Quality Control</a></li>
                  </ul>
                </div>
              </div>
              <div style={{ background: "url('/img/industry.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.menuSection}>
                <div className={styles.openMenuOverlay}>

                </div>
                <div className={styles.openMenuTexts}>
                  <a className={styles.openMenuBaslik} href='#'>ABOUT US</a>
                  <ul>
                    <li><a href='#'>History</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Career</a></li>
                    <li><a href='#'>References</a></li>
                  </ul>
                </div>
              </div>
              <div style={{ background: "url('/img/services.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.menuSection}>
                <div className={styles.openMenuOverlay}>

                </div>
                <div className={styles.openMenuTexts}>
                  <a className={styles.openMenuBaslik} href='#'>CONTACT</a>
                </div>
              </div>
            </div>
          </>
        )
      }
      <div className={styles.banner}>
        <div className={styles.topHeader}>
          <div>
            <a href='#'>
              EN
            </a>
            <a href='#'>
              TR
            </a>
          </div>
        </div>
        <video autoPlay={true} controls={false} muted={true} loop={true} className={styles.video} width="640" height="360">
          <source src="/img/loop.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.header}>
          <div className={styles.headerMenu}>
            <div className={styles.logo}>
              <img src='/img/logo_home.gif'></img>
            </div>
            <div className={styles.rightMenu}>
              <ul>
                <li><a href='#'>NEWS</a></li>
                <li><a href='#'>CONTACT</a></li>
                <li><a href='#'>CASES</a></li>
                <li><a href='#'>BLOGS</a></li>
                <li><a href='#'>GET CONTACTED</a></li>
              </ul>
              <div onClick={() => setOpen(true)} className={styles.sideMenu}>
                <a href='#'>
                  <p>MENU </p>
                  <FontAwesomeIcon
                    icon={faBars}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.heroHeading}>
            <h1>YOUR RELIABLE <br></br>PARTNER </h1>
            <h3>Quality & Precision</h3>
          </div>
          <div className={styles.bannerButton}>
            <a href='#'>
              <span>DISCOVER US</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.baslik}>
          <h2>SELECT INDUSTRY</h2>
          <h4>We operate across specialized industries</h4>
        </div>

        <div className={styles.fotoGrid}>
          <div className={styles.foto}>
            <img src="/img/machine.jpg" alt="Fotoğraf 1" />
            <a href='#'>
              Machine
            </a>
          </div>
          <div className={styles.foto}>
            <img src="/img/electric.jpg" alt="Fotoğraf 2" />
            <a href='#'>
              Electric & Electronic
            </a>
          </div>

        </div>
      </div>
      <div style={{ marginTop: '50px' }} className={styles.container}>
        <div className={styles.baslik}>
          <h2>PRECISION ENGINEERING SOLUTIONS</h2>
          <h4>Advancing Production with Cutting-Edge <br /> CNC & CMM Technologies</h4>
        </div>

        <div className={styles.fotoGrid}>
          <div className={styles.foto}>
            <img src="/img/cnc.jpg" alt="Fotoğraf 1" />

          </div>
          <div className={styles.foto}>
            <img src="/img/cmm.jpg" alt="Fotoğraf 2" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '50px' }} className={styles.container}>
        <div className={styles.baslik}>
          <h2>WHO WE ARE</h2>
          <h4>Watch Our Presentation Video</h4>
        </div>

        <div className={styles.presentationVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eCQftjhehro?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen autoPlay></iframe>
          <div className={styles.whoweare}>
            <p className={styles.paragraph}>
              Established in 1980, Gözüküçük Machinery combines its expertise in machining and engineering to offer services in the field. Our company operates in a 2000m2 closed area in Kayseri, equipped with CNC machining centers, CMM measurement machines, and various complementary equipment. We provide services for both domestic and international sectors, including Machinery, Electrical Electronics, and Rail Systems.
              <br></br><br></br>
              With our experienced staff, we manufacture metal and non-metal parts, machinery and equipment, components, and spare parts to the desired standards, ensuring high precision. In the sectors we serve, we prioritize planning, production, and quality control at every stage, from raw material selection to the delivery of the final product, in accordance with the precision of the parts produced based on demand.
              <br></br><a style={{ color: 'var(--darkblue)' }} href='#'> Read more...</a>
            </p>

            <div className={styles.whoweareright}>
              <div>
                <span className={styles.bigTextWhoWeAre}>1980</span>
                <span className={styles.smallTextWhoWeAre}>Founding Year</span>
              </div>
              <div>
                <span className={styles.bigTextWhoWeAre}>2000</span>
                <span className={styles.smallTextWhoWeAre}>Production Area (meter square)</span>
              </div>
              <div>
                <span className={styles.bigTextWhoWeAre}>1</span>
                <span className={styles.smallTextWhoWeAre}>Production Site</span>
              </div>
            </div>


          </div>
        </div>



      </div >


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none; 
        }
      `}</style>
    </>
  )
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
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
              <div className={styles.sideMenu}>
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

import styles from "../../styles/Home.module.css"

export default function Footer () {
    return (
        <footer className={styles.footer}>
        <div className={styles.topFooter}>
          <div>
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Industries</a>
              </li>
              <li>
                <a href="#">Quality</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a href="#">info@gozukucuk.com</a>
              </li>
              <li>
                <a href="#">Monday - Saturday 9 AM - 5 PM PST</a>
              </li>
              <li>
                <a href="#">All emails are replied within 24-48 hours.</a>
              </li>
              <li>
                <a href="#">
                  Anbar, Taksim Sk. No:5, 38170 Melikgazi/Kayseri<br></br>{" "}
                  Turkey
                </a>
              </li>
            </ul>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7128.970738482864!2d35.385458493610756!3d38.75085540208278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1acae44b3bc3%3A0x726ca76a61da733c!2zR8O2esO8a8O8w6fDvGsgTWFraW5h!5e0!3m2!1sen!2str!4v1691506551136!5m2!1sen!2str"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <a href="#">Gozukucuk Corporate. All Rights Reserved.</a>
        </div>
      </footer>
    )
}
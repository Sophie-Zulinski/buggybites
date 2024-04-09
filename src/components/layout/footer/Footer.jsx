import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.pages}>
          <ul>
            <h3>BuggyBites</h3>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Über uns</a>
            </li>

            <li>
              <a href="#">Karriere</a>
            </li>
          </ul>

          <ul>
            <h3>Kategorien</h3>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Frühstück</a>
            </li>
            <li>
              <a href="#">Mittagessen</a>
            </li>
            <li>
              <a href="#">Gastgarten</a>
            </li>
          </ul>
          <ul>
            <h3>Bezirke</h3>
            <li>
              <a href="#">1010</a>
            </li>
            <li>
              <a href="#">1020</a>
            </li>
            <li>
              <a href="#">1030</a>
            </li>
            <li>
              <a href="#">1070</a>
            </li>
          </ul>
          <ul>
            <h3>Infos</h3>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>

      <div className={styles.info}>2024 Copyright &copy; Sophie Z.</div>
    </footer>
  );
}

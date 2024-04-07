import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.pages}>
          <ul>
            <h3>Brand Name</h3>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li>
              <a href="#">Apply Online</a>
            </li>
            <li>
              <a href="#">Available Positions</a>
            </li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li>
              <a href="#">Meet Our Team</a>
            </li>
            <li>
              <a href="#">Our Responsibilities</a>
            </li>
            <li>
              <a href="#">Our Codes</a>
            </li>
            <li>
              <a href="#">Our Values</a>
            </li>
          </ul>
          <ul>
            <h3>Restaurants</h3>
            <li>
              <a href="#">Meet Our Team</a>
            </li>
            <li>
              <a href="#">Our Responsibilities</a>
            </li>
            <li>
              <a href="#">Our Codes</a>
            </li>
            <li>
              <a href="#">Our Values</a>
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

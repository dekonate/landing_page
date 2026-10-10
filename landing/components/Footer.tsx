import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBlock}>
        <span className={styles.logoText}>Flavored ☕</span>
        <p className={styles.logoSub}>Wake up to something special.</p>
      </div>

      <div className={styles.col}>
        <h4>Our Services</h4>
        <a href="#">Pricing</a>
        <a href="#">Tracking</a>
        <a href="#">Report a Bug</a>
        <a href="#">Terms of Services</a>
      </div>

      <div className={styles.col}>
        <h4>Our Company</h4>
        <a href="#">Pricing</a>
        <a href="#">Tracking</a>
        <a href="#">Report a Bug</a>
        <a href="#">Terms of Services</a>
      </div>

      <div className={styles.col}>
        <h4>Address</h4>
        <p>  245 Broadway Ave, New York, NY<br />
        Open daily 8 AM – 11 PMM</p>
      </div>
    </footer>
  );
}
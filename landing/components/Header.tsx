import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>Flavored ☕</span>
          <span className={styles.logoSub}>Wake up to something special.</span>
        </a>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#menu">Coffee Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact us</a>
        </nav>

        <button className={styles.ctaBtn}>Coffee Shop</button>
      </div>
    </header>
  );
}
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Coffee<br />The Best For You
        </h1>
        <button className={styles.cta}>View Menu</button>

        <div className={styles.icons}>
          <div className={styles.iconWrapper}>☕</div>
          <div className={styles.iconWrapper}>🥤</div>
          <div className={styles.iconWrapper}>🌰</div>
        </div>
      </div>


      <div className={styles.imageWrapper}>
        <img
          src="/glavnaya.jpg"
          alt="Coffee cup"
          className={styles.image}
        />
      </div>
    </section>
  );
}
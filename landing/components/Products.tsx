import styles from './Products.module.css';

type CardProps = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

const ProductCard = ({ name, desc, price, img }: CardProps) => (
  <article className={styles.card}>
    <div className={styles.cardImgWrap}>
      <img src={img} alt="" className={styles.cardImg} />
    </div>
    <h3 className={styles.cardName}>{name}</h3>
    <p className={styles.cardDesc}>{desc}</p>
    <div className={styles.cardFooter}>
      <div className={styles.cardActions}>
        <button aria-label="Add to cart" className={styles.iconBtn}>🛒</button>
        <button aria-label="Like" className={styles.iconBtn}>♡</button>
      </div>
      <span className={styles.price}>${price}</span>
    </div>
  </article>
);

export default function Products() {
  return (
    <section className={styles.section} id="menu">
       <div className={styles.grid}>
        <ProductCard
          name="Americano"
          desc="100% Natural Arabica or Robusta, 30 ml cup"
          price="2.50"
          img="/americano.jpg"   
        />
        <ProductCard
          name="Cappuccino"
          desc="Coffee 50%, milk 50%, 280 ml"
          price="2.50"
          img="/capychino.jpg"   
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.infoTitle}>
          Freshly Roasted Beans Every Single Day
        </h2>
        <p className={styles.infoText}>
          We hand-pick the finest arabica and robusta beans from around the
          world, roast them in small batches, and craft every cup with love.
          Each sip is a little journey into the world of real coffee.
        </p>
        <button className={styles.learnBtn}>Learn More</button>
      </div>
    </section>
  );
}
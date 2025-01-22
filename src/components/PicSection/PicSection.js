import styles from "./PicSection.module.css";

export const PicSection = () => {
  return (
    <section className={styles.topLogo}>
      <img
        className={styles.currencyPic}
        src="/images/currency.jpg"
        alt="currency"
      />
    </section>
  );
};

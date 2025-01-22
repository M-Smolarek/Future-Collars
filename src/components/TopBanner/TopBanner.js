import styles from "./TopBanner.module.css";

const TopBanner = () => {
  return (
    <h1 className={`content ${styles.topBanner} ${styles.topBannerContent}`}>
      Przelicznik walut
    </h1>
  );
};

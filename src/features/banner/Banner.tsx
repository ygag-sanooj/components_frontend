import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className="">
      <div className={styles["banner-container"]}>
        <div className={`${styles["banner-items"]} wrapper `}>
          <div>
            <h1 className={styles["banner-text--h1"]}>
              Experience Boundless
              <br /> Shopping Happiness
            </h1>
            <p className={styles["banner-text--p"]}>
              Grab Your Nakheel Gift Card Today
            </p>
          </div>
          <div className={styles["banner-card-container"]}>
            <div className={styles["banner-card"]}>
              <h3 className={styles["text-main"]}>
                Buy a Gift Card <br />
              </h3>
              <p className={styles["text-secondary"]}>
                Enjoy endless Shopping
                <br /> Options at Nakheel Mall
              </p>
              <div className={styles["card-button"]}>Buy Gift Card</div>
            </div>
            <div className={styles["banner-card-2"]}>
              <h3  className={styles["text-main"]}>
                Activate Your Gift Card <br />
              </h3>
              <p className={styles["text-secondary"]}>
                Unlock the power of your
                <br />
                Nakheel Mall Gift Card
              </p>
              <div className={styles["card-button"]}>Activate Gift Card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

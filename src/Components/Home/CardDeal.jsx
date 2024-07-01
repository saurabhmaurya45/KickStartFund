import styles from "../../Constants/style";
import Button from "./Button";

const CTA = () => (
  <section data-aos="zoom-in-up"  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} animation sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
      Everything you need to raise funds and grow your project globally with blockchain technology. Secure, transparent, and accessible from anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button content = "Get Started" />
    </div>
  </section>
);

export default CTA;
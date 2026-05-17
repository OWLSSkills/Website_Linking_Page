import Image from "next/image";
import styles from "./OwlsSkillsIntro.module.css";

export function OwlsSkillsIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.logoSection}>
          <Image
            src="/images/OWLS_Color.png"
            alt="O.W.L.S Skills Women's Survival School"
            width={820}
            height={190}
            className={styles.logo}
          />
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.copyColumn}>
            <h2>
              Wilderness survival skills for women and marginalized demographics.
            </h2>

            <p>
              If you’re looking for guidance in becoming more proficient in
              backcountry skills you’re in the right place!
            </p>

            <p>
              At OWLS you’ll find a variety of class types, in a variety of
              locations around the country (and occasionally the world!). All
              Courses are taught by Jessie Krebs in an informal and welcoming
              environment.
            </p>
          </div>

          <div className={styles.imageColumn}>
            <Image
              src="/images/picture2.png"
              alt="OWLS Skills course photo collage"
              width={760}
              height={460}
              className={styles.collageImage}
            />
          </div>
        </div>

        <div className={styles.buttonRow}>
          <a href="/contact" className={styles.learnMore}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
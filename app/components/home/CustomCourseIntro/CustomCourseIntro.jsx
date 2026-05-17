import Image from "next/image";
import styles from "./CustomCoursesIntro.module.css";

export function CustomCoursesIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Custom Courses</h2>

        <div className={styles.contentGrid}>
          <div className={styles.collageColumn}>
            <Image
              src="/images/NEW_custom_picture_Index.png"
              alt="Custom courses photo collage"
              width={560}
              height={520}
              className={styles.collageImage}
            />
          </div>

          <div className={styles.copyColumn}>
            <p className={styles.subtitle}>by Jessie Krebs</p>

            <p className={styles.mainCopy}>
              Interested in having Jessie join your event in some way? From a 20
              minute keynote speech in Oklahoma to a month learning skills in the
              wilds of Costa Rica, what&apos;s <strong>YOUR</strong> goal? Right
              this way to get it sorted!
            </p>

            <div className={styles.topicGrid}>
              <ul>
                <li>Wilderness skills</li>
                <li>Guest Speaker</li>
                <li>Teambuilding</li>
              </ul>

              <ul>
                <li>Company Survival Training</li>
                <li>Family Gathering</li>
                <li>Corporate Fundraiser</li>
              </ul>
            </div>

            <a href="/contact" className={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
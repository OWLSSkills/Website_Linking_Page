"use client";

import styles from "./Socials.module.css";

export default function SocialIcons({ isSmall = false }) {
  return (
    <div className={isSmall ? styles.sectionSmall : styles.section}>
      <a
        href="https://www.facebook.com/owls.skills/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img
          src="/images/socials/facebook_icon-01.png"
          alt="Facebook"
          className={`${styles.socialIcon} ${styles.facebookIcon}`}
        />
      </a>

      <a
        href="https://www.instagram.com/owls.skills/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img
          src="/images/socials/IG.png"
          alt="Instagram"
          className={styles.socialIcon}
        />
      </a>

      <a
        href="https://www.youtube.com/channel/UCVF10fU-1uK81GIvE9xSdKg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <img
          src="/images/socials/youtube.png"
          alt="YouTube"
          className={styles.socialIcon}
        />
      </a>
    </div>
  );
}
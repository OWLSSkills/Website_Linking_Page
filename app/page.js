"use client";

import { CustomCoursesIntro } from "./components/home/CustomCourseIntro/CustomCourseIntro";
import { OwlsSkillsIntro } from "./components/home/CustomCourseIntro/OwlsSkillsIntro/OwlsSkillsIntro";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);

  function handle_emailing_jessie(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn("Hero video autoplay was blocked:", error);
      }
    };

    playVideo();
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.videoHeroSection}>
        <video
          ref={videoRef}
          className={styles.videoBg}
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          poster="/images/Jessie_Banner_Video_Background_image.png"
          aria-hidden="true"
        >
          <source
            src="/videos/animated_banner_mobile.mp4"
            type="video/mp4"
            media="(max-width: 640px)"
          />
          <source
            src="/videos/animated_banner_720p.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.videoOverlay}></div>

        <div className={styles.videoContent}>
          <div className={styles.videoCard}>
            <div className={styles.videoLogoWrap}>
              <img
                src="/images/OWLS_White.png"
                alt="OWLS Skills"
                className={styles.videoLogo}
              />
            </div>

            <button className={`${styles.videoButton} ${styles.videoButtonPurple}`}>
              REGISTER HERE
            </button>
          </div>

          <div className={styles.videoCard}>
            <div className={styles.videoLogoWrap}>
              <img
                src="/images/Custom_Survival_Course_White.png"
                alt="Custom Survival Courses"
                className={styles.videoLogo}
              />
            </div>

            <button className={`${styles.videoButton} ${styles.videoButtonGreen}`}>
              BOOK HERE
            </button>
          </div>
        </div>
      </section>

      <div className={styles.sectionBleed}>
        <CustomCoursesIntro />
      </div>

      <div className={styles.sectionBleed}>
        <OwlsSkillsIntro />
      </div>

      <section className={styles.contactSection}>
        <h2 className={styles.title}>Contact Jessie!</h2>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" className="input" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" className="input" />
          </div>

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" className="textarea" />

          <button
            className="btn btn--purple justify_self-center"
            onClick={handle_emailing_jessie}
          >
            REGISTER HERE
          </button>
        </form>
      </section>
    </main>
  );
}
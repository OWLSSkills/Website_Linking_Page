"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

import CustomSurvivalCoursesDesktop from "@/components/home/custom_survival_courses_description/custom_survival_courses_desktop.jsx";
import CustomSurvivalCoursesMobile from "@/components/home/custom_survival_courses_description/custom_survival_courses_mobile";
import OwlSkillsCourseDesktop from "@/components/home/owl_skills_description/owl_skills_course_desktop";
import OwlSkillsCourseMobile from "@/components/home/owl_skills_description/owl_skills_course_mobile.jsx";
export default function Home() {
  const currentYear = new Date().getFullYear();
  const mobile = screen.width < 820? true : false;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);


  function handle_emailing_jessie(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(name, email, message);
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

  }



  useEffect(() => {

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData === true;
  if (prefersReduced || saveData) return; 

  const el = ref.current;
  if (!el) return;

  const io = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        setInView(true);     
        io.disconnect();
      }
    },
    { rootMargin: "200px 0px" } 
  );
  io.observe(el);
  return () => io.disconnect();
}, []);


  return (
    <div className={styles.page}>
      <div className="svh-40">




        <div className=" video-hero  section box-shadow svh-45">

        <video
          ref={ref}
          className="video-hero__bg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/Jessie_Banner_Video_Background_image.png"
          aria-hidden="true"
          
        >
          {inView && (
            <>
             
              <source
                src="/videos/animated_banner_mobile.webm"
                type="video/webm"
                media="(max-width: 640px)"
              />
              <source
                src="/videos/animated_banner_mobile.mp4"
                type="video/mp4"
                media="(max-width: 640px)"
              />
              <source src="/videos/animated_banner_720p.webm" type="video/webm" />
              <source src="/videos/animated_banner_720p.mp4" type="video/mp4" />
            </>
          )}
        </video>
          <div className="video-hero__overlay"></div>

          <div className="container flex-2 items-center video-hero__content">
          <div className="flex flex-col items-center">
              <div className="equal-image">
                <img src="/images/OWLS_White.png" alt="" className="img-fluid" />
              </div>
              <button className="btn btn--purple">REGISTER HERE</button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="equal-image">
                <img src="/images/Custom_Survival_Course_White.png" alt="" className="img-fluid" />
              </div>
              <button className="btn btn--green btn--square">BOOK HERE</button>
            </div>
          </div>

        </div>
      </div>


      {mobile? <CustomSurvivalCoursesMobile />:<CustomSurvivalCoursesDesktop />}

      {mobile? <OwlSkillsCourseMobile />:<OwlSkillsCourseDesktop />}

        <div className={`mt-5`}>
          <h2 className={styles.title}>Contact Jessie!</h2>
          <form className={`${styles.form}`}>
            <div className={styles.formRow}>
              <label className="sr-only" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" className="input" />
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className="input" />
            </div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" className="textarea" />
            <button className="btn btn--purple justify_self-center" onClick={handle_emailing_jessie}>REGISTER HERE</button>
          </form>
        </div>

        <footer className={styles.footer}>
          <div className={`${styles.footerStack}`}>
            <img src="/images/Jessie_Krebs_Color.png" alt="Jessie Krebs Logo" className={styles.smallLogo} />
            <p>© {currentYear} Jessie Krebs.</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </div>
      );
}

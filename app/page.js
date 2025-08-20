"use client";
import styles from "./page.module.css";


import CustomSurvivalCoursesDesktop from "@/components/home/custom_survival_courses_description/custom_survival_courses_desktop.jsx";
import CustomSurvivalCoursesMobile from "@/components/home/custom_survival_courses_description/custom_survival_courses_mobile";
import OwlSkillsCourseDesktop from "@/components/home/owl_skills/owl_skills_course_desktop";
import OwlSkillsCourseMobile from "@/components/home/owl_skills/owl_skills_course_mobile.jsx";
export default function Home() {
  const currentYear = new Date().getFullYear();
  const mobile = screen.width < 820? true : false;

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


  return (
    <div className={styles.page}>
      <div className="svh-100">

        <div className={`relative svh-60`}>
          <img src="/images/Jessie_Krebs_Color.png" alt="Jessie Krebs"
            className={`img-fluid ${styles.heroLogo} center`} />
          <div className={`${styles.topRightLogos} z-10 mobileInvisible`}>
            <img src="/images/Logo_Jessie_gmail.png" alt="Logo" className={styles.smallLogo} />
            <img src="/images/Custom_Survival_Course.png" alt="Custom Survival Course" className={styles.smallLogo} />
          </div>

          <div className={styles.asSeenWrap}>
            <h1>As Seen On</h1>
              <div className={styles.logoGrid}>
                {/* <img src="/logo_references/alone-s9-logo-black.png" alt="Alone S9 Logo" />
                <img src="/logo_references/National_Geographic-Logo.png" alt="National Geographic Logo" />
                <img src="/logo_references/MasterClass-logo.png" alt="MasterClass Logo" />
                <img src="/logo_references/outdoor-life-vector-logo.png" alt="Logo 4" />
                <img src="/logo_references/discovery.png" alt="Logo 5" />
                <img src="/logo_references/backPacker.png" alt="Logo 6" />
                <img src="/logo_references/Durango-Herald.png" alt="Logo 7" />
                <img src="/logo_references/fox.png" alt="Logo 8" /> */}
              </div>
          </div>
        </div>


        <div className="bg-green-50 section box-shadow svh-45">
          <div className="container flex-2 items-center">
            <div className="flex flex-col items-center">
              <div className="equal-image">
                <img src="/images/OWLS_Color.png" alt="" className="img-fluid" />
              </div>
              <button className="btn btn--purple">REGISTER HERE</button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="equal-image">
                <img src="/images/Custom_Survival_Course.png" alt="" className="img-fluid" />
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

"use client";

import styles from '@/app/page.module.css'
export default function CustomSurvivalCoursesDesktop() {
return(

    <div className={`${styles.desc} mt-3`}>
    <img src="/images/picture1.png" alt="Jessie teaching" className={`${styles.descImage}`} />
    <div className={`${styles.descText}`}>
      <div className={styles.descHeaderRow}>
        <h3 className={styles.descHeader}>
          Wilderness skills, guest speaker, teambuilding, company survival training, family gathering, corporate fundraiser
        </h3>
        <img src="/images/Custom_Survival_Course.png" alt="" className={styles.descLogo} />
      </div>
      <p className="mt-6" style={{ marginRight: '20%' }}>
        Interested in having Jessie join your event in some way? From a 20 minute keynote speech in Oklahoma to a month
        learning skills in the wilds of Costa Rica, what’s <b>YOUR</b> goal? Right this way to get it sorted!
      </p>
      <div className="flex justify-start mt-3">
        <button className="btn btn--green btn--square">Learn More</button>
      </div>
    </div>
  </div>

)
}



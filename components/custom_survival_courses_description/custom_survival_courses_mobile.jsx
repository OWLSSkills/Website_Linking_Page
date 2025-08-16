import styles from '@/app/page.module.css'

export default function CustomSurvivalCoursesMobile() {
  return (
    <div className={` ${styles.desc} mt-8 `}>
      <div className={styles.splitLeft}>
        <h3>
          Wilderness skills, guest speaker, teambuilding, company survival
          training, family gathering, corporate fundraiser
        </h3>

        <p className="mt-6">
          Interested in having Jessie join your event in some way? From a 20 minute
          keynote speech in Oklahoma to a month learning skills in the wilds of
          Costa Rica, what’s YOUR goal? Right this way to get it sorted!
        </p>

        {/* add styles.ctaRow here */}
        <div className={`${styles.ctaRow}  mt-6`}>
          <button className="btn btn--green">Learn More</button>
          <img src="/images/Custom_Survival_Course.png" alt="Jessie Krebs logo" className="img-fluid " />
        </div>
      </div>

      <img src="/images/picture2.png" alt="Jessie teaching" className={`${styles.descImage} scale-180`} />
    </div>
  )
}

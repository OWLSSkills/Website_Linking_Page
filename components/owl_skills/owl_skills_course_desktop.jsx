import styles from '@/app/page.module.css'



export default function OwlSkillsCourseDesktop() {
  return (
    <div className={`bg-green-50 ${styles.desc} box-shadow`}>
    <div className={styles.splitLeft}>
      <h3>Wilderness survival skills for women and marginalized demographics.</h3>
      <p className="mt-3">
        If you’re looking for guidance in becoming more proficient in backcountry skills you’re in the right place! At OWLS you’ll find a variety of class types, in a variety of locations around the country (and occasionally the world!).  All Courses are taught by Jessie Krebs in an informal and welcoming environment.

      </p>
      <div className="flex justify-start mt-3">
        <button className="btn btn--purple">Learn More</button>
      </div>
    </div>
    <img src="/images/Logo_Jessie_gmail.png" alt="" className="img-fluid w-30 scale-80" />

    <img src="/images/picture2.png" alt="Jessie teaching" className={styles.descImage} />
  </div>
  )
}


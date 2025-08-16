import styles from '@/app/page.module.css'

export default function OwlSkillsCourseMobile() {
  return (
    <div className={` ${styles.desc} mt-8 bg-green-50 box-shadow`}>
      <div className={styles.splitLeft}>
        <h3>
            Wilderness survival skills for women and marginalized demographics.
        </h3>

        <p className="mt-6">
            If you’re looking for guidance in becoming more proficient in backcountry skills you’re in the right place! At OWLS you’ll find a variety of class types, in a variety of locations around the country (and occasionally the world!).  All Courses are taught by Jessie Krebs in an informal and welcoming environment.

        </p>

        {/* add styles.ctaRow here */}
        <div className={`${styles.ctaRow}  mt-6`}>
          <button className="btn btn--purple">Learn More</button>
          <img src="/images/OWLS_COLOR.png" alt="Jessie Krebs logo" className="img-fluid " />
        </div>
      </div>

      <img src="/images/picture2.png" alt="Jessie teaching" className={`${styles.descImage} scale-180`} />
    </div>
  )
}

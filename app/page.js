import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <img
        src="/images/Jessie_Krebs_Color.png"
        alt="Jessie Krebs"
        className={`${styles.center_self_horizontally} ${styles.site_connection_logo}`}
      />

      <div className={styles.background_color_steel}>
        <div className={styles.horizontaly_divide_two_divs}>
          <div className={styles.image_button_container}>
            <img src="/images/Logo_Jessie_gmail.png" alt="Custom Survival Course" />
              <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_purple}`}>
                Private Custom Courses by Jessie Krebs
              </button>
          </div>
          <div className={styles.image_button_container}>
            <img src="/images/Custom_Survival_Course.png" alt="Women's Survival Course" />
              <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_green}`}>
                Women's Survival School * by Jessie Krebs
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}


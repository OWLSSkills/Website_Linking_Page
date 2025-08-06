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
  
              <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_purple} ${styles.font_color_white}`}>
                Women's Survival School * by Jessie Krebs
              </button>
          </div>
          <div className={styles.image_button_container}>
            <img src="/images/Custom_Survival_Course.png" alt="Women's Survival Course" />
            <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_green} ${styles.font_color_white}`}>
                Private Custom Courses by Jessie Krebs
              </button>
          </div>
        </div>
      </div>
      <div className={`${styles.as_seen_animation_banner}`}>
                <h2 className='justify_self_center light_green_for_text'>As Seen, Read and Heard On</h2>

                <div className={styles.animation_banner_wrapper}>
                  <div className={styles.animation_banner_track}>
                    {/* Repeat these */}
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/masterclass-logo_white.png' alt='Masterclass Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/alone-s9-logo-black.png' alt='Alone Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/Backpacker.png' alt='Backpacker Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/National_Geographic.png' alt='National Geographic Logo' className={`${styles.animation_banner_image} ${styles.scale_up_logo}`} />
                    </div>

                    {/* Repeat set again for smooth looping */}
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/masterclass-logo_white.png' alt='Masterclass Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/alone-s9-logo-black.png' alt='Alone Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/Backpacker.png' alt='Backpacker Logo' className={styles.animation_banner_image} />
                    </div>
                    <div className={styles.logo_container}>
                      <img src='/Animation_Banner/National_Geographic.png' alt='National Geographic Logo' className={`${styles.animation_banner_image} ${styles.scale_up_logo}`} />
                    </div>
                  </div>
                </div>

            </div>

    </div>
  );
}


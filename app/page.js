// import styles from "./page.module.css";

// export default function Home() {

//   const currentYear = new Date().getFullYear();
//   return (
//     <div className={styles.page}>
//       <div className={styles.fifty_percent_height_container}>

//         <img
//           src="/images/Jessie_Krebs_Color.png"
//           alt="Jessie Krebs"
//           className={`${styles.center_self_horizontally} ${styles.site_connection_logo}`}
//         />
//         <div className={styles.top_right_logo_container}>

//           <img className={`${styles.scale_down}`} src="/images/Logo_Jessie_gmail.png" alt="Custom Survival Course" />
//           <img className={`${styles.scale_down}`} src="/images/Custom_Survival_Course.png" alt="Women's Survival Course" />
//         </div>

//         <div className={styles.as_seen_on_container}>
//           <h1 className={styles.as_seen_on_header}>
//             As Seen On
//           </h1>
//           <div className={styles.logo_container_center}>
//             <img src="/Animation_Banner/alone-s9-logo-black.png" alt="Alone Season 9 Logo" className={styles.logo} />
//           </div>
//         </div>
//       </div>


//       <div className={styles.background_color_steel}>
//         <div className={styles.horizontaly_divide_two_divs}>
//           <div className={styles.image_button_container}>
//             <img src="/images/OWLS_White_description.png" alt="Custom Survival Course" />

//             <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_purple} ${styles.font_color_white}`}>
//               Women's Survival School * by Jessie Krebs
//             </button>
//           </div>
//           <div className={styles.image_button_container}>
//             <img src="/images/Custom_Survival_Course_White.png" alt="Women's Survival Course" />
//             <button className={`${styles.position_button_under_prev} ${styles.button_for_site_linking_form} ${styles.background_color_light_green} ${styles.font_color_white}`}>
//               Private Custom Courses by Jessie Krebs
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={styles.description_container}>
//         <img src="/images/picture1.png" alt="Jessie teaching" className={styles.first_description_image} />
//         <div className={styles.first_description_text_container}>
//           <div className={styles.first_description_header_logo_container}>
//             <h3 className={styles.first_description_header}>Wilderness skills, guest speaker, teambuilding, company survival training, family gathering, corporate fundraiser</h3>
//             <img src="/images/Custom_Survival_Course.png" alt="Custom Survival Course Logo" className={styles.float_right} />
//           </div>
//           <p className={styles.first_description_text}>
//             Interested in having Jessie join your event in some way?  From a 20 minute keynote speech in Oklahoma to a month learning skills in the wilds of Costa Rica, what’s <b>YOUR</b> goal?  Right this way to get it sorted!

//           </p>
//           <div className={`${styles.image_button_container} ${styles.align_left}`}>
//             <button className={`${styles.background_color_light_green} ${styles.font_color_white} ${styles.button} ${styles.button_left}`}>
//               Learn More
//             </button>
//             {/* <img src="/images/instagram_logo.png" alt="Instagram Logo" className={styles.instagram_logo} /> */}
//           </div>

//         </div>
//       </div>
//       <div className={`${styles.description_container} ${styles.background_light_green}`}>
//         <div className={`${styles.four_divisions_left_side}`}>

//           <img src="/images/Logo_Jessie_gmail.png" alt="Custom Survival Course" className={`${styles.scale_down_small}${styles.width_30}`}/>
//           <h3>Wilderness survival skills for women and marginalized demographics. </h3>
//           <p style={{marginTop:"5%"}}>If you’re looking for guidance in becoming more proficient in backcountry skills you’re in the right place!  At OWLS you’ll find a variety of class types, in a variety of locations around the country (and occasionally the world!).  All Courses are taught by Jessie Krebs in an informal and welcoming environment.  </p>
//           <div className={`${styles.image_button_container} ${styles.align_left} ${styles.self_left}`}>
//             <button className={`${styles.background_color_light_purple} ${styles.font_color_white} ${styles.button} ${styles.button_left}`}>
//               Learn More
//             </button>
//           </div>
//         </div>
//         <img src="/images/picture2.png" alt="Jessie teaching" className={styles.first_description_image} />

//       </div>

//       <div className={styles.contact_container}>
//         <h2 className={styles.title}>Contact Jessie!</h2>

//         <form className={styles.contactForm} >
//           <div className={styles.row}>
//             <label className="sr-only" htmlFor="name">Name</label>
//             <input id="name" name="name" type="text" placeholder="Name" className={styles.input} />

//             <label className="sr-only" htmlFor="email">Email</label>
//             <input id="email" name="email" type="email" placeholder="Email" className={styles.input} />
//           </div>

//           <label className="sr-only" htmlFor="message">Message</label>
//           <textarea id="message" name="message" placeholder="Message" className={styles.textarea} />
//         </form>
//       </div>
//       <footer className={styles.footer}>
//         <div className={`${styles.footer_text_container}`}>
//           <img src="/images/Jessie_Krebs_Color.png" alt="Jessie Krebs Logo" className={styles.scale_down} />
//           <p className={styles.footer_text}>© {currentYear} Jessie Krebs. </p>
//           <p>All rights reserved.</p>
//         </div>
//         <div className={styles.footer_links_container}>

//         </div>
//       </footer>
//     </div>
//   )
// }

import styles from "./page.module.css";

export default function Home(){
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <div className={`relative ${styles.heroHalf}`}>
        <img src="/images/Jessie_Krebs_Color.png" alt="Jessie Krebs"
             className={`img-fluid ${styles.heroLogo} center`} />
        <div className={`${styles.topRightLogos} z-10`}>
          <img src="/images/Logo_Jessie_gmail.png" alt="Logo" className={styles.smallLogo}/>
          <img src="/images/Custom_Survival_Course.png" alt="Custom Survival Course" className={styles.smallLogo}/>
        </div>

        <div className={styles.asSeenWrap}>
          <h1>As Seen On</h1>
          <div className="flex justify-center items-center w-100">
          </div>
        </div>
      </div>

      <div className="bg-steel section">
        <div className="container grid-2 items-center">
          <div className="flex flex-col items-center gap-2">
            <img src="/images/OWLS_White_description.png" alt="" className="img-fluid"/>
            <button className="btn btn--purple">Women&apos;s Survival School * by Jessie Krebs</button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/images/Custom_Survival_Course_White.png" alt="" className="img-fluid"/>
            <button className="btn btn--green">Private Custom Courses by Jessie Krebs</button>
          </div>
        </div>
      </div>

      <div className={`${styles.desc}`}>
        <img src="/images/picture1.png" alt="Jessie teaching" className={`${styles.descImage}`} />
        <div className={`${styles.descText}`}>
          <div className={styles.descHeaderRow}>
            <h3 className={styles.descHeader}>
              Wilderness skills, guest speaker, teambuilding, company survival training, family gathering, corporate fundraiser
            </h3>
            <img src="/images/Custom_Survival_Course.png" alt="" className={styles.descLogo} />
          </div>
          <p className="mt-6" style={{marginRight:'20%'}}>
            Interested in having Jessie join your event in some way? From a 20 minute keynote speech in Oklahoma to a month
            learning skills in the wilds of Costa Rica, what’s <b>YOUR</b> goal? Right this way to get it sorted!
          </p>
          <div className="flex justify-start mt-3">
            <button className="btn btn--green">Learn More</button>
          </div>
        </div>
      </div>

      <div className={`bg-green-50 ${styles.desc}`}>
        <div className={styles.splitLeft}>
          <img src="/images/Logo_Jessie_gmail.png" alt="" className="img-fluid w-30 scale-80" />
          <h3>Wilderness survival skills for women and marginalized demographics.</h3>
          <p className="mt-3">
            If you’re looking for guidance in becoming more proficient in backcountry skills you’re in the right place! At OWLS you’ll find a variety of class types, in a variety of locations around the country (and occasionally the world!).  All Courses are taught by Jessie Krebs in an informal and welcoming environment.  

          </p>
          <div className="flex justify-start mt-3">
            <button className="btn btn--purple">Learn More</button>
          </div>
        </div>
        <img src="/images/picture2.png" alt="Jessie teaching" className={styles.descImage} />
      </div>

      <div className={`${styles.contact} section`}>
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

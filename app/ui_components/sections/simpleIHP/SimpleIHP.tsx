// Simple Image-Header-Paragraph Section

import ImgNText from "~/interfaces/ImgNText";
import styles from "./SimpleIHP.module.css"


export default function SimpleIHP({imgLink, sectionTitle, pText}: {imgLink: ImgNText, sectionTitle: string, pText: string}) {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.imgContainer}>
                <img src={imgLink.imgLink} alt={imgLink.imgAltText} className={styles.sectionImg} />
            </div>
            <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
            <p className={styles.paragraph} dangerouslySetInnerHTML={{__html: pText}}></p>
  
        </section>
    )
}
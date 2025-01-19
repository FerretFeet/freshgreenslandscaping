import ImgNText from "~/interfaces/ImgNText"
import styles from "./SimpleIconCard2.module.css"

export default function SimpleIconCard({title, description, iconLink} : {title: string, description: string, iconLink: ImgNText}) {
    return (
        <div className={styles.simpleIconCard}>
            <div className={styles.iconContainer}>
                {/* svg or img */}
                <img src={iconLink.imgLink} alt={iconLink.imgAltText} className={styles.iconImg} />
            </div>
            <p className={styles.description}>{description}</p>
            <h6 className={styles.title}>{title}</h6>

        </div>
    )
}
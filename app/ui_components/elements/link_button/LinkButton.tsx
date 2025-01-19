import { Link } from "@remix-run/react";
import styles from "./LinkButton.module.css"

export default function LinkButton({link, text}: {link: string, text:string}) {
    return(
        <Link to={link} >
            <button className={styles.linkButton}>{text}</button>
        </Link>
    )
}
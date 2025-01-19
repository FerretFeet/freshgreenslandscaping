import styles from './Header.module.css'
import links from '../../../data/links.json'
import createLinksAndNav from '~/utility/createLinksAndNav'
import { Link } from '@remix-run/react'


export default function Header() {

return (
    <div className={styles.container}>
        <div className={styles.contactBanner}>
            <Link to={links['Quote']}>
                <button type="button" className={styles.quoteBtn}>Get A Quote</button>
            </Link>
            <Link to={links['Contact Us']} className={styles.contactLink}>Contact Us</Link>
            <a href={links['Phone']}>501-510-3469</a>
        </div>
        <div className={styles.logoNav}>
            <img src="../../../../public/imgs/logo.png" alt="logo" className={styles.logo} />
            {createLinksAndNav(links, ['Contact Us', 'Phone', 'Quote'])}
        </div>
    </div>
)
}
import styles from './Header.module.css'
import links from '../../../data/links.json'
import createLinksAndNav from '~/utility/createLinksAndNav'
import { Link } from '@remix-run/react'


export default function Header() {

return (
    <div className={styles.container}>
        <div className="contactBanner">
            <button type="button" className='quoteBtn'>Get A Quote</button>
            <Link to={links['Contact Us']} className="contactLink">Contact Us</Link>
            <a href={links['Phone']}>501-510-3469</a>
        </div>
        <div className="logoNav">
            <img src="" alt="" className="logo" />
            {createLinksAndNav(links, ['Contact Us', 'Phone'])}
        </div>
    </div>
)
}
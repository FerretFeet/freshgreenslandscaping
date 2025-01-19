import styles from './Header.module.css'
import createLinksAndNav from '~/utility/createLinksAndNav'
import { Link } from '@remix-run/react'
import { LinkString } from '~/interfaces/LinkString'


export default function Header({quoteFormLink, contactLink, contactPhone, logoPath, navLinks, excludedNavLinkKeys} : {quoteFormLink: LinkString, contactLink: LinkString, contactPhone: LinkString, logoPath: string, navLinks: LinkString, excludedNavLinkKeys: Array<string>}) {
// NOTE:: CONTAINS HARD PATH TO LOGO PICTURE

    const trimPhoneLink = (phoneLink: string) => {
    // Assume given tel:+{11-Digit-Number} && First digit not needed
    // Add dashes between phone number sections
    const slicedPhone = phoneLink.slice(6)
    
    const areaCode = slicedPhone.slice(0,3);
    const prefix = slicedPhone.slice(3,6);
    const lineNumber = slicedPhone.slice(6);
    return `${areaCode}-${prefix}-${lineNumber}`
    
}
return (
    <div className={styles.container}>
        <div className={styles.contactBanner}>
            <Link to={Object.values(quoteFormLink)[1]}>
                <button type="button" className={styles.quoteBtn}>{Object.values(quoteFormLink)[0]}</button>
            </Link>
            <Link to={Object.values(contactLink)[1]} className={styles.contactLink}>{Object.values(contactLink)[0]}</Link>
            <a href={Object.values(contactPhone)[1]}>{trimPhoneLink(Object.values(contactPhone)[1])}</a>
        </div>
        <div className={styles.logoNav}>
            <img src={logoPath} alt="logo" className={styles.logo} />
            {createLinksAndNav(navLinks, excludedNavLinkKeys)}
        </div>
    </div>
)
}
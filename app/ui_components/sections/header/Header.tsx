import styles from './Header.module.css'
import createLinksAndNav from '~/utility/createLinksAndNav'
import { Link } from '@remix-run/react'
import { DataString } from '~/interfaces/DataString'
import LinkButton from '~/ui_components/elements/link_button/LinkButton'


export default function Header({quoteFormLink, contactLink, contactPhone, logoPath, navLinks, excludedNavLinkKeys} : {quoteFormLink: DataString, contactLink: DataString, contactPhone: DataString, logoPath: string, navLinks: DataString, excludedNavLinkKeys: Array<string>}) {

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
    <section className={styles.container}>
        <div className={styles.contactBanner}>
            <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
            {/* <Link to={Object.values(quoteFormLink)[1]}>
                <button type="button" className={styles.quoteBtn}>{Object.values(quoteFormLink)[0]}</button>
            </Link> */}
            <Link to={Object.values(contactLink)[1]} className={styles.contactLink}>{Object.values(contactLink)[0]}</Link>
            <a href={Object.values(contactPhone)[1]}>{trimPhoneLink(Object.values(contactPhone)[1])}</a>
        </div>
        <div className={styles.logoNav}>
            <img src={logoPath} alt="logo" className={styles.logo} />
            {createLinksAndNav(navLinks, excludedNavLinkKeys)}
        </div>
    </section>
)
}
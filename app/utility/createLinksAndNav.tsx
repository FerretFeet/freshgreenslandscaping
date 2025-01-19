import { Link } from "@remix-run/react";
import { LinkString } from "~/interfaces/LinkString";

export default function createLinksAndNav(links: LinkString, excludedLinks: Array<string>) {
    const testLinks: LinkString = links
    return (
        <nav className="createdLinks">
            <ul className="clList">
                {
                    Object.keys(testLinks).map((key) => {
                        if (excludedLinks.includes(key) == true) return;
                        return (
                        <li className="clListItem" key={`${key}-listItem`}>
                            <Link to={testLinks[key]} className="clLink" key={`${key}-link`}>{key}</Link>
                        </li>
                    )})
                }
            </ul>
        </nav>
    )
}
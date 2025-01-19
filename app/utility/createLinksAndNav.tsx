import { Link } from "@remix-run/react";
import { DataString } from "~/interfaces/DataString";

export default function createLinksAndNav(links: DataString, excludedLinks: Array<string>) {
    const testLinks: DataString = links
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
// Simple Image-Header-Paragraph Section

import ImgNText from "~/interfaces/ImgNText";

export default function SimpleIHP({imgLink, sectionTitle, pText}: {imgLink: ImgNText, sectionTitle: string, pText: string}) {
    return (
        <section className="sectionContainer">
            <div className="imgContainer">
                <img src={imgLink.imgLink} alt={imgLink.imgAltText} className="sectionImg" />
            </div>
            <h3 className="sectionTitle">{sectionTitle}</h3>
            <p className="paragraph" dangerouslySetInnerHTML={{__html: pText}}></p>
  
        </section>
    )
}
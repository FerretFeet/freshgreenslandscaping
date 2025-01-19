import ImgNText from "~/interfaces/ImgNText";

export default function ServiceArea({stateImg, serviceAreas}: {stateImg: ImgNText, serviceAreas: Array<string>}) {
    return (
        <section className="container">
            <img src={stateImg.imgLink} alt={stateImg.imgAltText} className="stateImg" />
            <h2 className="title">Service Areas</h2>
            <ul className="list">
                {serviceAreas.map((area, idx) => (
                    <li className="serviceAreaItem" key={idx}>
                        <img src="../../../../public/imgs/icons/mapPin.png" alt="" className="areaIcon" />
                        {area}
                    </li>
                ))}
            </ul>

        </section>
    )
}
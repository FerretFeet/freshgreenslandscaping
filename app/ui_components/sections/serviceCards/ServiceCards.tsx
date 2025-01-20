import ImgNText from "~/interfaces/ImgNText";
import styles from "./ServiceCards.module.css"
import SimpleImgCard from "~/ui_components/elements/simple_img_card/SimpleImageCard";

export interface cardInfo {
    iconLink: ImgNText;
    title: string;
    description: string;
}
export default function ServiceCards({cardInfoArr}: {cardInfoArr: Array<cardInfo>}) {
    const parseData = (cardInfoArr: Array<cardInfo>) => {
        const parsedData: Array<cardInfo> = [];
        cardInfoArr.forEach((card) => {
            parsedData.push({iconLink: card.iconLink, title: card.title, description: card.description})
        })
        return parsedData;
    }

    return (
        <div className={`${styles.sectionContainer} tintBg ${styles.parallax}`}>
            <h2 className={styles.title}>Featured Services</h2>
            <div className={styles.container}>

                {parseData(cardInfoArr).map((card, idx) => {
                    return (
                        <SimpleImgCard key={idx} title={card.title} description={card.description} iconLink={card.iconLink} />
                    )
                })}
            </div>
        </div>


    )
}
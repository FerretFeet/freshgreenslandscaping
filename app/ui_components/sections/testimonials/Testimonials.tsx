import ImgNText from "~/interfaces/ImgNText";
import styles from "./Testimonials.module.css"
import SimpleIconCard2 from "~/ui_components/elements/simple_icon_card_2/SimpleIconCard2";

export interface cardInfo {
    iconLink: ImgNText;
    title: string;
    description: string;
}

export default function Testimonials({cardInfoArr}: {cardInfoArr: Array<cardInfo>}) {
    const parseData = (cardInfoArr: Array<cardInfo>) => {
        const parsedData: Array<cardInfo> = [];
        cardInfoArr.forEach((card) => {
            parsedData.push({iconLink: card.iconLink, title: card.title, description: card.description})
        })
        return parsedData;
    }

    return (
        <div className={styles.container}>
            {parseData(cardInfoArr).map((card, idx) => {
                return (
                    <SimpleIconCard2 key={idx} title={card.title} description={card.description} iconLink={card.iconLink} />
                )
            })}
        </div>

    )
}
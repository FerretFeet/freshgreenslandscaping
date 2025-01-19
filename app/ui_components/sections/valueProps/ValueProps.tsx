import ImgNText from "~/interfaces/ImgNText";
import SimpleIconCard from "~/ui_components/elements/simple_icon_card/SimpleIconCard";
import styles from "./ValueProps.module.css"

export interface cardInfo {
    iconLink: ImgNText;
    title: string;
    description: string;
}

export default function ValueProps({cardInfoArr}: {cardInfoArr: Array<cardInfo>}) {
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
                    <SimpleIconCard key={idx} title={card.title} description={card.description} iconLink={card.iconLink} />
                )
            })}
        </div>

    )
}
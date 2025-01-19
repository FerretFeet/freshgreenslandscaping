import { ReactElement} from "react";
import styles from "./Hero.module.css"


export default function Hero({h1text, description, CTAModule}: {h1text: string, description: string, CTAModule: () => ReactElement}) {
    return (
        <section className={styles.container}>
            <h1 className={styles.tagLine}>
                {h1text}
            </h1>
            <div className={styles.styleContainer}>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.ctaModule}>
                    {CTAModule()}
    {/* CTA Module styled assuming button
    
        This is what you will match CTAModule to in the calling function
    const MyCTAModule = () => (
        <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
    );
    */}
                </div>
            </div>
   
        </section>
    )
}
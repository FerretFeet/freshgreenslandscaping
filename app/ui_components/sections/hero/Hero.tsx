import { ReactElement} from "react";

export default function Hero(h1text: string, description: string, CTAModule: () => ReactElement) {
    return (
        <section className="container">
            <h1 className="tagLine">

            </h1>
            <p className="description">

            </p>
            <div className="ctaModule">
                {CTAModule()}
            </div>
        </section>
    )
}
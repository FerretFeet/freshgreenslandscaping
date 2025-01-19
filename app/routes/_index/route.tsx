import type { MetaFunction } from "@netlify/remix-runtime";
import SimpleIconCard from "~/ui_components/elements/simple_icon_card/SimpleIconCard";
import data from '../../data/valuePropositions.json';
import SimpleImgCard from "~/ui_components/elements/simple_img_card/SimpleImageCard";
import SimpleIconCard2 from "~/ui_components/elements/simple_icon_card_2/SimpleIconCard2";
import Header from "~/ui_components/sections/header/Header";
import links from "~/data/links.json"
import { DataString } from "~/interfaces/DataString";
import Hero from "~/ui_components/sections/hero/Hero";
import LinkButton from "~/ui_components/elements/link_button/LinkButton";
import heroTxt from "~/data/homeHeroTxt.json";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const quoteFormLink: DataString = {key: "Get An Estimate", value: links["Get An Estimate"]};
  const contactLink: DataString = {key: "Contact Us", value: links["Contact Us"]};
  const contactPhone: DataString = {key: "Phone", value: links.Phone}

  const MyCTAModule = () => (
    // Used in Hero
    <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
      
  );
  

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header quoteFormLink={quoteFormLink} contactLink={contactLink} contactPhone={contactPhone} logoPath="../../../public/imgs/logo.png"
        navLinks={links} excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}/>
        <Hero h1text={heroTxt.h1text} description={heroTxt.description} CTAModule={MyCTAModule}/>
    </div>
  );
}

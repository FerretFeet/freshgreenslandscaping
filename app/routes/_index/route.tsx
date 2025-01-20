import type { MetaFunction } from "@netlify/remix-runtime";
import Header from "~/ui_components/sections/header/Header";
import links from "~/data/links.json"
import { DataString } from "~/interfaces/DataString";
import Hero from "~/ui_components/sections/hero/Hero";
import LinkButton from "~/ui_components/elements/link_button/LinkButton";
import heroTxt from "~/data/homeHeroTxt.json";
import ValueProps from "~/ui_components/sections/valueProps/ValueProps";
import valuePropData from "~/data/valuePropositions.json"
import ServiceArea from "~/ui_components/sections/serviceArea/ServiceArea";
import serviceAreas from "~/data/serviceAreas.json"
import ServiceCards from "~/ui_components/sections/serviceCards/ServiceCards";
import serviceCardData from "~/data/serviceCards.json"
import SimpleIHP from "~/ui_components/sections/simpleIHP/SimpleIHP";
import aboutUsTxt from "~/data/aboutUsTxt.json"
import FormConstructor from "~/ui_components/base/formConstructor.tsx/FormConstructor";

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
      <Header quoteFormLink={quoteFormLink} contactLink={contactLink} contactPhone={contactPhone} logoPath="../../../public/imgs/icons/logo.png"
        navLinks={links} excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}/>
        <Hero h1text={heroTxt.h1text} description={heroTxt.description} CTAModule={MyCTAModule}/>
        <ValueProps cardInfoArr={valuePropData}/>
        <ServiceArea stateImg={{imgLink: '../../../public/imgs/icons/map1.png', imgAltText: 'The State of Arkansas'}} serviceAreas={serviceAreas}/>
        <ServiceCards cardInfoArr={serviceCardData} />
        <SimpleIHP imgLink={{imgLink: '/', imgAltText: 'a photo'}} sectionTitle= 'About Us' pText={aboutUsTxt.paragraphText} />
        <FormConstructor />
    </div>
  );
}

import type { MetaFunction } from "@netlify/remix-runtime";
import SimpleIconCard from "~/ui_components/elements/simple_icon_card/SimpleIconCard";
import data from '../../data/valuePropositions.json';
import SimpleImgCard from "~/ui_components/elements/simple_img_card/SimpleImageCard";
import SimpleIconCard2 from "~/ui_components/elements/simple_icon_card_2/SimpleIconCard2";
import Header from "~/ui_components/sections/header/Header";
import links from "~/data/links.json"
import { LinkString } from "~/interfaces/LinkString";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const quoteFormLink: LinkString = {key: "Get An Estimate", value: links["Get An Estimate"]};
  const contactLink: LinkString = {key: "Contact Us", value: links["Contact Us"]};
  const contactPhone: LinkString = {key: "Phone", value: links.Phone}

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header quoteFormLink={quoteFormLink} contactLink={contactLink} contactPhone={contactPhone} logoPath="../../../public/imgs/logo.png"
        navLinks={links} excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}/>
      <SimpleIconCard2 title={data[4].title} description={data[4].description} iconLink={data[4].iconLink} />

            <SimpleImgCard title={data[2].title} description={data[2].description} iconLink={data[2].iconLink} />
            <SimpleImgCard title={data[3].title} description={data[3].description} iconLink={data[3].iconLink} />
      <SimpleIconCard title={data[0].title} description={data[0].description} iconLink={data[0].iconLink} />
      <SimpleIconCard title={data[1].title} description={data[1].description} iconLink={data[1].iconLink} />
    </div>
  );
}

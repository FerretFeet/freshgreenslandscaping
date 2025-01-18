import type { MetaFunction } from "@netlify/remix-runtime";
import SimpleIconCard from "~/ui_components/simple_icon_card/SimpleIconCard";
import data from './../../public/valuePropositions.json';
import SimpleImgCard from "~/ui_components/simple_img_card/SimpleImageCard";
import SimpleIconCard2 from "~/ui_components/simple_icon_card_2/SimpleIconCard2";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <SimpleIconCard2 title={data[4].title} description={data[4].description} iconLink={data[4].iconLink} />

            <SimpleImgCard title={data[2].title} description={data[2].description} iconLink={data[2].iconLink} />
            <SimpleImgCard title={data[3].title} description={data[3].description} iconLink={data[3].iconLink} />
      <SimpleIconCard title={data[0].title} description={data[0].description} iconLink={data[0].iconLink} />
      <SimpleIconCard title={data[1].title} description={data[1].description} iconLink={data[1].iconLink} />
    </div>
  );
}

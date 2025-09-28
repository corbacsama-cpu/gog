import { createSignal, onCleanup, For } from "solid-js";
import ButtonContact from "~/widget/button-contact";
import Process from "../components/process";

export type Herocategory = {
  title: string;
  subtitle: string;
  image: string;
  color: string;
};

export const categories: Herocategory[] = [
  {
    title: "GÉNIE CIVIL & LOGISTIQUE",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet",
    image: "./images/ga5.jpeg",
    color: "#E0B818",
  },
  {
    title: "SECTEUR INDUSTRIEL",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet",
    image: "./images/industriel.png",
    color: "#0A33FF",
  },
  {
    title: "SECTEUR DE SÉCURITÉ",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet",
    image: "./images/securite.png",
    color: "#D81917",
  },
];



function HeroSection(props: { category: Herocategory }) {
  return (
    <div class="flex h-[688px] w-[1200px] shrink-0 pb-16">
      {/* Colonne image (1/3) */}
      <div
        class="flex-1 h-full bg-cover bg-center bg-no-repeat"
        style={{ "background-image": `url(${props.category.image})` }}
      ></div>

      {/* Colonne couleur + contenu (2/3) */}
      <div
        class="flex-[2] flex items-center justify-center"
        style={{ "background-color": props.category.color }}
      >
        <div class="flex flex-col w-[672px] h-[480px]">
          {/* Trait blanc */}
          <div class="w-[85px] h-[7px] mb-8 bg-white"></div>

          {/* Titre */}
          <h1 class="text-4xl font-bold mb-8 text-white">
            {props.category.title}
          </h1>

          {/* Texte */}
          <p class="text-justify mb-12 text-white">
            {props.category.subtitle}
          </p>

          {/* Bouton */}
          <div class="mb-8">
            <ButtonContact bgColor="#fff" textColor="#000" />
          </div>

          {/* Process */}
          <Process
            bgColor="transparent"
            padding="py-0 px-0 mt-20"
            items={[
              {
                text: "DEVELOPPEMENT",
                textColor: "text-white",
                fontSize: "text-xl",
              },
              {
                text: "PROCÉDÉS",
                textColor: "text-white",
                fontSize: "text-lg",
              },
              {
                text: "PERFORMANCES",
                textColor: "text-white",
                fontSize: "text-lg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default HeroSection
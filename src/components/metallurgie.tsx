import { For } from "solid-js";
import ButtonContact from "~/widget/button-contact";

export type Block = {
  title: string;
  subtitle: string;
  points: string[];
  breakpoint: string[];
};

export type MetallurgieCategory = {
  image: string;
  blocks: Block[];
};

// Exemple de données
const services: MetallurgieCategory[] = [
  {
    image: "./images/meta.png",
    blocks: [
      {
        title: "METALLURGIE",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...",
        points: [".CARTE DE POINTAGE", ".CARTE DE POINTAGE", ".CARTE DE POINTAGE"],
        breakpoint: [
          ".ENDRERIT URNA.PELLENTESQUE SI",
          ".ENDRERIT URNA.PELLENTESQUE SI",
          ".ENDRERIT URNA.PELLENTESQUE SI",
        ],
      },
      {
        title: "MAINTENANCE INDUSTRIELLE ",
        subtitle: "Autre texte pour le bloc 2",
        points: [".POINT 1", ".POINT 2"],
        breakpoint: [".BREAK A", ".BREAK B"],
      },
      {
        title: "METALLURGIE 3",
        subtitle: "Encore un autre texte pour le bloc 3",
        points: [".POINT X", ".POINT Y"],
        breakpoint: [".BREAK X", ".BREAK Y"],
      },
    ],
  },
];

function MetallurgieComponent(props: { service: MetallurgieCategory }) {
  return (
    <div class="relative z-10 flex items-start gap-8 w-full m-8 text-black ">
      {/* Bloc gauche */}
      <div class="flex-1 flex-col justify-between">
        <div
          class="flex justify-center items-center w-[504px] h-[702px]"
          style={{ "background-image": `url(${props.service.image})` }}
        ></div>
      </div>

      {/* Blocs droits dynamiques */}
      <div class="flex-2 flex flex-col  text-white">
        <For each={props.service.blocks}>
          {(block) => (
            <div class="flex  flex-col">
              {/* Trait décoratif */}
              <div class="w-[85px] h-[7px] bg-[#0A33FF]"></div>

              {/* Titre + points */}
              <div class="flex">
                <div class="flex-2 text-start">
                  <h1 class="font-inter pt-8 text-2xl md:text-[64px] font-semibold leading-tight">
                    {block.title}
                  </h1>
                </div>

                <div class="flex flex-col items-end text-justify py-16 flex-1">
                  <For each={block.points}>
                    {(point) => (
                      <p class="font-inter text-base text-justify">{point}</p>
                    )}
                  </For>
                </div>
              </div>

              {/* Sous-titre */}
              <p class="font-inter text-base max-w-[700px] md:text-2xl text-justify mt-4">
                {block.subtitle}
              </p>

              {/* breakpoints */}
              <div class="flex flex-col items-start text-justify py-8 flex-1">
                <For each={block.breakpoint}>
                  {(bp) => <p class="font-inter text-base text-justify">{bp}</p>}
                </For>
              </div>

              <div class="items-end pb-32">
                <ButtonContact bgColor="#0A33FF" />
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default function Metallurgie() {
  return (
    <div class="flex bg-black">
      <For each={services}>
        {(service) => <MetallurgieComponent service={service} />}
      </For>
    </div>
  );
}
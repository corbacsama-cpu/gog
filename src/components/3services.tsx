import { For } from "solid-js";
import ButtonContact from "~/widget/button-contact";

type ServiceItem = {
  titleLines: string[];
  subtitle: string;
};

type ServiceProps = {
  bgColor?: string;   
  bgTrait?:string;  // couleur de fond globale si non définie pour les items
  textColor?: string;   // couleur du texte globale
  padding?:String;
};

export default function Service(props: ServiceProps) {
  const items: ServiceItem[] = [
    {
      titleLines: ["GENIE CIVIL", "LOGISTIQUE"],
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien...",
    },
    {
      titleLines: ["CONSTRUCTION", "INFRASTRUCTURE"],
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien...",
    },
    {
      titleLines: ["MAINTENANCE", "INDUSTRIELLE"],
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien...",
    },
  ];

  return (
    <div class={`flex  justify-between gap-8 font-inter ${props.padding || "py-0"}`}>
      <For each={items}>
        {(item) => (
          <div
            class="flex flex-col w-[480px] h-[480px] p-6"
            style={{ "background-color": props.bgColor || "#fff" }}
          >
            {/* Trait décoratif */}
            <div
              class="w-[85px] h-[7px] my-8"
              style={{ "background-color": props.bgTrait || "#000" }}
            ></div>

            {/* Titre en deux lignes */}
            <h1
              class="text-4xl font-bold mb-8"
              style={{ color: props.textColor || "#000" }}
            >
              {item.titleLines.map((line) => (
                <span class="block">{line}</span>
              ))}
            </h1>

            {/* Texte */}
            <p
              class="text-justify mb-12"
              style={{ color: props.textColor || "#000" }}
            >
              {item.subtitle}
            </p>

            {/* Bouton */}
            <div class="mb-8">
              <ButtonContact
                bgColor={props.textColor || "#000"}
                textColor={props.bgColor ? "#fff" : "#fff"}
              />
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
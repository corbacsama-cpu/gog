import { Component } from "solid-js";

export type ProcessItem = {
  text: string;
  textColor?: string;      // couleur du texte
  fontSize?: string;       // taille du texte Tailwind (ex: "text-lg")
};

type ProcessProps = {
  items: ProcessItem[];    // tableau des éléments à afficher
  bgColor?: string;        // couleur de fond de la div
  padding?: string;        // padding Tailwind (ex: "py-8 px-4")
  className?: string;      // classes supplémentaires
};

const Process: Component<ProcessProps> = (props) => {
  return (
    <div
      class={`flex justify-between font-inter ${props.padding || "py-8 px-4"} ${props.className || ""}`}
      style={{ "background-color": props.bgColor || "#000" }}
    >
      {props.items.map((item) => (
        <div class={`${item.textColor || "text-white"} ${item.fontSize || "text-base"}`}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Process;
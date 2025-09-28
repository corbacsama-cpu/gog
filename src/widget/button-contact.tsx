import { A } from "@solidjs/router";

type ButtonContactProps = {
  bgColor?: string;   // couleur de fond
  textColor?: string; // couleur du texte
};

const ButtonContact = (props: ButtonContactProps) => {
  return (
    <div class="flex justify-start">
      <A
        href="/about"
        class="px-6 py-3 text-base rounded-[2px]"
        style={{
          "background-color": props.bgColor || "#000",
          color: props.textColor || "#fff",
        }}
      >
        CONTACT
      </A>
    </div>
  );
};

export default ButtonContact;
import { For } from "solid-js";

type SecteurProps = {
  title: string;
  subtitle: string;
  points: string[];
  bgColor?: string;   // couleur de fond
  textColor?: string; // couleur des points
  rightTitleColor?: string; // couleur du bloc droit (ex: LOGISTIQUE)
};

const Secteur = (props: SecteurProps) => {
  return (
    <div
      class="relative z-10 flex justify-between items-start  m-8 "
      style={{ "background-color": props.bgColor || "transparent" }}
    >
      {/* Bloc gauche */}
      <div class="flex flex-col justify-between">
        <div class="flex justify-center items-center my-24 w-8 h-8 bg-[#fff]"></div>

        <div class="flex flex-col justify-end text-left space-y-2 py-20">
          <For each={props.points}>
            {(point) => (
              <p
                class="font-inter text-base text-justify fade-up"
                style={{ color: props.textColor || "#000" }}
              >
                {point}
              </p>
            )}
          </For>
        </div>
      </div>

      {/* Bloc droit */}
      <div class="flex flex-col text-right py-8 max-w-[1000px]">
        <h1 class="font-inter nolineHeight text-2xl md:text-[90px] lg:text-[140px] font-bold fade-up leading-tight text-justify"
         style={{ color: props.rightTitleColor || "#000" }}>
          SECTEUR
        </h1>
        <h1 class="font-inter nolineHeight text-2xl md:text-[90px] lg:text-[140px] font-bold fade-up leading-tight text-justify" 
        style={{ color: props.rightTitleColor || "#000" }}>
          {props.title}
          
        </h1>
        <p class="font-inter max-w-[700px] text-base md:text-2xl text-justify fade-up mt-4" >
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Secteur;
import { createSignal } from "solid-js";
import { heroTexts } from "../api/herotext";
import Process from "./process";

export default function Hero() {
  const [text, setText] = createSignal(heroTexts[0]);

  return (
    <section
      class="scroll-snap-align-start hero relative bg-[url('./images/expertise.png')] bg-cover 
      pt-32 sm:pt-48 md:pt-64 lg:pt-[300px] space-y-4 sm:bg-center
    md:bg-top  w-full"
    >
      {/* overlay */}
      <div class="absolute inset-0 bg-black/50"></div>

      {/* Container */}
      <div
        class="relative flex flex-col lg:flex-row  justify-between items-center lg:items-end 
        gap-6 px-4 sm:px-8 text-white"
      >
        {/* Carré haut gauche */}
        <div class="absolute top-4 md:top-10 lg:top-16 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>

        {/* Texte gauche */}
        <div class="flex flex-col w-full lg:w-1/2 text-left space-y-2 order-2 lg:order-1">
          {[2, 3, 4].map((idx) => (
            <p class="font-inter text-sm sm:text-base md:text-lg text-justify fade-up">
              {heroTexts[idx].map((line) => (
                <span class="block">{line}</span>
              ))}
            </p>
          ))}
        </div>

        {/* Bloc droit */}
        <div class="flex flex-col space-y-4 w-full  lg:w-1/1 order-1 lg:order-2 ">

          <div class="flex justify-end md:flex md:justify-end">
            <h1 class="text-4xl md:text-6xl lg:text-[120px] font-bold text-justify fade-up leading-tight">
              {text().map((line) => (
                <span class="block">{line}</span>
              ))}
            </h1>
          </div>

          <div class="flex justify-end md:flex md:justify-end">
            <p class="uppercase opacity-60 text-xs  md:text-base lg:text-[16px] text-start">
              {heroTexts[1].map((line) => (
                <span class="block">{line}</span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <Process
        bgColor="#000"
        padding="py-6 px-4 sm:px-8"
        items={[
          {
            text: "DEVELOPPEMENT DURABLE",
            textColor: "text-white",
            fontSize: "text-base sm:text-lg md:text-xl",
          },
          {
            text: "PROCÉDÉS AVANCÉS",
            textColor: "text-gray-300",
            fontSize: "text-sm sm:text-base md:text-lg",
          },
          {
            text: "PERFORMANCES OPTIMISÉES",
            textColor: "text-white",
            fontSize: "text-sm sm:text-base md:text-lg",
          },
        ]}
      />
    </section>
  );
}

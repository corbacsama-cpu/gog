// src/components/Hero.tsx
import { createSignal, onMount } from "solid-js";
import { heroTexts } from "../api/herotext";
import  Process  from "./process";

export default function Hero() {
  const [text, setText] = createSignal(heroTexts[0]);

  return (
    <section class="hero relative space-y-4 bg-[url('./images/expertise.png')] bg-cover pt-[300px]">
      <div class="absolute inset-0 bg-black/50"></div> {/* overlay */}
      
      {/* horizontal distributed div */}
      <div class="relative flex flex-col lg:flex-row place-content-around p-4 text-white items-end">
        
        {/* Carré centré en haut */}
        <div class="relative lg:absolute lg:top-4 lg:left-4 top-0 left-0  w-8 h-8 bg-white" />

        {/* Texte gauche centré en bas */}
        <div class="flex flex-col w-full text-left space-y-2">
          <p class="font-inter text-base text-justify fade-up">
            {heroTexts[2].map((line) => (
              <span class="block">{line}</span>
            ))}
          </p>
          <p class="font-inter text-base text-justify fade-up">
            {heroTexts[3].map((line) => (
              <span class="block">{line}</span>
            ))}
          </p>
          <p class="font-inter text-base text-justify fade-up">
            {heroTexts[4].map((line) => (
              <span class="block">{line}</span>
            ))}
          </p>
        </div>

        {/* Bloc droit */}
        <div class="flex flex-col space-y-4">
          <h1 class="text-[80px] md:text-[120px] font-bold fade-up leading-[100%]">
            {text().map((line) => (
              <span class="block">{line}</span>
            ))}
          </h1>
          <p class="md:text-[16px] text-justify fade-up uppercase opacity-60">
            {heroTexts[1].map((line) => (
              <span class="block">{line}</span>
            ))}
          </p>
        </div>
      </div>

      <Process
        bgColor="#000"
        padding="py-6 px-8"
        items={[
          {
            text: "DEVELOPPEMENT DURABLE",
            textColor: "text-white",
            fontSize: "text-xl",
          },
          {
            text: "PROCÉDÉS AVANCÉS",
            textColor: "text-gray-300",
            fontSize: "text-lg",
          },
          {
            text: "PERFORMANCES OPTIMISÉES",
            textColor: "text-white",
            fontSize: "text-lg",
          },
        ]}
      />

    </section>
  );
}

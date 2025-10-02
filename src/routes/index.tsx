import Hero from "../components/hero";
import Process from "../components/process";
import HeroCarousel from "../components/caroussel";
import LogoCarousel from "~/components/soutien";
import Services from "~/components/services";
import Service from "~/components/3services";
import Secteur from "~/widget/secteur";
import Metallurgie from "~/components/metallurgie";
import Equipe from "~/components/equipe";
import Contact from "~/components/contact";

export default function Home() {
  return (
    <main class="w-full bg-black mx-auto scroll-snap-y-mandatory">
      <Hero/>

      {/* Carrousel */}
      <HeroCarousel />
      {/* Soutien */}
      <div class="bg-white">
        <div class="flex flex-col py-4 text-2xl text-black justify-center items-center">
          SOUTENU PAR
        </div>
        {/* Logo soutien */}
        <LogoCarousel />
        <Services/>
        {/* Hero 1 */}
        <section class="hero relative m-8 h-[700px] bg-[url('./images/stock.svg')] bg-contain"></section>
        {/* service  */}
        <Service 
        bgTrait="#E0B818"/>
        {/* Annexe */}
        <div class="flex flex-col py-8 mx-8 text-black">
          <h1 class="font-semibold w-[776px] py-4">
            THE SERVICES THAT MAKE YOUR COMPAGNY WORK EASY
          </h1>
          <p class="w-[590px] text-justify">
            LOREM IPSUM dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </p>
        </div>
        {/* secteur black */}
        <section class="bg-black flex flex-col">
          <Secteur
            bgColor="#000"
            textColor="#fff"
            rightTitleColor="#0A33FF"
            title="INDUSTRIEL"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
            points={[
              ".GENIE CIVIL & LOGISTIQUE",
              ".CONSTRUCTION & INFRASTRUCTURE",
              ".MAINTENANCE INDUSTRIELLE",
            ]}
          />
        </section>
        {/* hero Secteur */}
        <div class="bg-black w-full h-full p-8">
          <section class="hero relative  h-[700px] bg-[url('./images/secteur.png')] bg-cover"></section>
        </div>
        {/* Secteur metallurgique*/}
        <Metallurgie/>
         {/* secteur red */}
         <section class="bg-black flex flex-col">
          <div class="bg-[#D81917] w-full">
          <Secteur
            bgColor=""
            textColor="#fff"
            rightTitleColor="#fff"
            title="DE SECURITÉ"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
            points={[
              ". GENIE CIVIL & LOGISTIQUE",
              ". CONSTRUCTION & INFRASTRUCTURE",
              ". MAINTENANCE INDUSTRIELLE",
            ]}
          />
           <Service padding="p-8"/>
          </div>
        
        </section>
         {/* Equipe */}
        <Equipe/>
         {/* Contact */}
        <div class="bg-black">
        <Contact/>
        </div>
      </div>
    </main>
  );
}

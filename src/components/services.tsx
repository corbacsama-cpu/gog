import { For } from "solid-js";

export type ServiceCategory = {
  title: string;
  subtitle: string;
  points: string[]; // ✅ tableau plutôt qu'un seul s1
};

// Exemple de données
const services: ServiceCategory[] = [
  {
    title: "GENIE CIVIL",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    points: [
      ". GENIE CIVIL & LOGISTIQUE",
      ". CONSTRUCTION & INFRASTRUCTURE",
      ". MAINTENANCE INDUSTRIELLE",
    ],
  },
];

function ServiceComponent(props: { service: ServiceCategory }) {
  return (
    <div class="relative z-10 bg-red-500 flex justify-between items-top h-full  m-8 text-black w-full">

      {/* Bloc gauche */}
      <div class="flex  bg-amber-300 flex-col justify-between">
        {/* Carré décoratif */}
        <div class="flex justify-center items-center my-24 w-8 h-8 bg-[#E0B818]"></div>

        {/* Liste des points */}
        <div class="flex flex-col justify-end  text-left space-y-2 py-8">
          <For each={props.service.points}>
            {(point) => (
              <p class="font-inter text-base text-justify fade-up">{point}</p>
            )}
          </For>
        </div>
      </div>

      {/* Bloc droit */}
      <div class="flex bg-green-500 flex-col text-justify sm:max-w-[500px] lg:max-w-[1000px] md:max-w-[800px] py-8">
        <h1 class="font-inter   nolineHeight text-2xl md:text-[90px] text-justify lg:text-[140px] font-bold fade-up leading-tight">
          {props.service.title} <span>&</span>
        </h1>
        <h1 class="font-inter text-2xl text-[#E0B818] md:text-[90px] text-justify lg:text-[140px] font-bold fade-up leading-tight">LOGISTIQUE</h1>
        <p class="font-inter text-base md:text-2xl text-justify fade-up mt-4">
          {props.service.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div class="overflow-hidden w-full flex  bg-white py-6">
      <For each={services}>
        {(service) => <ServiceComponent service={service} />}
      </For>
    </div>
  );
}

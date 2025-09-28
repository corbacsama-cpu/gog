import { For } from "solid-js";

export type Logocategory = {
  image: string;
};

const logos: Logocategory[] = [
  { image: "./logo/baker.png" },
  { image: "./logo/aogc.png" },
  { image: "./logo/scaffall.png" },
  { image: "./logo/medior.png" },
  { image: "./logo/spie.png" },
  { image: "./logo/oceanexpress.png" },
  { image: "./logo/tracktafric.png" },
];

function LogoSection(props: { Logocategory: Logocategory }) {
  return (
    <div class="flex  w-[139px] h-[76px] shrink-0">
      <img
        src={props.Logocategory.image}
        alt="logo"
        class="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <div class="overflow-hidden w-full justify-center flex bg-white py-6">
      <div class="flex animate-marquee">
        <For each={logos}>
          {(logo) => <LogoSection Logocategory={logo} />}
        </For>
      </div>
    </div>
  );
}
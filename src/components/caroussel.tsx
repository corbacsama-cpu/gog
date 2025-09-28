import { createSignal, onCleanup, For } from "solid-js";
import HeroSection, { categories } from "./carousselItem";


const slideWidth = 800;
const gap = 32;
const intervalTime = 3000;

export default function HeroCarousel() {
  const totalSlides = categories.length;
  const [index, setIndex] = createSignal(0);

  let sliderRef: HTMLDivElement | undefined;

  // auto-slide
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % totalSlides);
  }, intervalTime);

  onCleanup(() => clearInterval(interval));

  return (
    <div class="relative w-full overflow-hidden flex justify-center">
      <div
        ref={sliderRef!}
        class="flex gap-[64px] transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index() * (slideWidth + gap)}px)`,
          width: `${totalSlides * (slideWidth + gap)}px`,
        }}
      >
        <For each={categories}>
          {(category) => <HeroSection category={category} />}
        </For>
      </div>
    </div>
  );
}
import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import ButtonContact from "~/widget/button-contact";

interface NavbarProps {
  title?: string;
  onTitleClick?: () => void;
}

const Navbar: Component<NavbarProps> = (props) => {
  return (
    <nav class="bg-gradient-to-r from-black/80 to-black sticky top-0 z-90">
      <div class="relative max-w-[1200px] mx-auto h-20 px-6 flex items-center">
        
        {/* Logo / titre */}
        <div class="flex-shrink-0 w-40">
          <A
            href="#"
            class="text-2xl font-bold flex items-center gap-2 text-white"
            onClick={(e) => {
              e.preventDefault();
              props.onTitleClick?.();
            }}
          >
            {props.title ?? "GOG"}
          </A>
        </div>

        {/* Menu centré */}
        <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-white text-sm">
          <A href="/">HOME</A>
          <A href="/company">COMPANY</A>
          <A href="/services">SERVICES</A>
          <A href="/gallery">GALLERIE</A>
        </div>

        {/* Bouton à droite */}
        <div class="ml-auto">
          <ButtonContact />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
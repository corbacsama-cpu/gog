import type { Component } from "solid-js";
import "./footer.css";

interface FooterProps {
  author?: string; // optionnel : permet d'afficher un nom personnalisé
}

const Footer: Component<FooterProps> = (props) => {
  return (
    <footer class="footer">
      <div>&copy; {new Date().getFullYear()} {props.author ?? "GOG"}. TOUS DROITS RÉSERVÉS.</div>
      <div>Développé par Corbacsama GOG.</div>
    </footer>
  );
};

export default Footer;

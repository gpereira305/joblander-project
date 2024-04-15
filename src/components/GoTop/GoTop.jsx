import React from "react";
import { useGlobalContext } from "../../context";
import "./index.css";

export default function GoTop() {
   const { showGoTopButton } = useGlobalContext();

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const buttonStyle = showGoTopButton
      ? "scrolltop__button active"
      : "scrolltop__button";

   return (
      <span className={buttonStyle} onClick={scrollToTop}>
         Topo
      </span>
   );
}

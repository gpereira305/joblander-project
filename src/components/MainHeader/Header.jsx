import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/icons/main-logo.svg";
import Close from "../../assets/icons/close.svg";

const navLinks = [
   {
      id: 1,
      title: "Home-1",
   },
   {
      id: 2,
      title: "Home-2",
   },
   {
      id: 3,
      title: "Home-3",
   },
   {
      id: 4,
      title: "Home-4",
   },
];

export default function Header() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setIsActive(window.scrollY > 5);
      });
   });

   const handleClick = () => {
      document.body.style.overflowY =
         document.body.style.overflowY == "hidden" ? "auto" : "hidden";
      setIsActive(!isActive);
   };

   const toggleHeader = isActive ? "header toggle" : "header";
   const toggleNavbar = isActive ? "header__nav toggle" : "header__nav";
   const toggleOverlay = isActive
      ? "header__overlay toggle"
      : "header__overlay";

   return (
      <header className={toggleHeader}>
         <div className="header__container">
            <figure className="header__logo">
               <img className="header__img" src={Logo} alt="JobLander" />
            </figure>

            <nav className={toggleNavbar}>
               <img
                  className="header__close"
                  src={Close}
                  alt="Fechar"
                  title="Fechar"
                  onClick={handleClick}
               />

               <ul className="header__listing">
                  {navLinks?.map(({ id, title }) => (
                     <li
                        className="header__item"
                        key={id}
                        onClick={handleClick}
                     >
                        <a className="header__link" href="#">
                           {title}
                        </a>
                     </li>
                  ))}{" "}
                  <li className="header__item-button button__layout">
                     Contate nos
                  </li>
               </ul>
            </nav>
            <span className={toggleOverlay} onClick={handleClick}></span>

            <button className="header__button button__layout" type="button">
               Contate nos
            </button>
            <button
               className="header__burger"
               type="button"
               onClick={handleClick}
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
      </header>
   );
}

import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/icons/main-logo.svg";

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
   const [openMenu, setOpenMenu] = useState(false);

   const handleClick = () => setOpenMenu(!openMenu);

   const toggleNav = openMenu ? "header__nav toggle" : "header__nav";
   const toggleNavList = openMenu
      ? "header__listing toggle"
      : "header__listing";

   return (
      <header className="header">
         <div className="header__container">
            <figure className="header__logo">
               <img className="header__img" src={Logo} alt="JobLander" />
            </figure>
            <nav className={toggleNav} onClick={() => handleClick()}>
               <ul className={toggleNavList}>
                  {navLinks?.map(({ id, title }) => (
                     <li key={id} onClick={() => setOpenMenu(false)}>
                        <a href="#">{title}</a>
                     </li>
                  ))}{" "}
               </ul>
            </nav>

            <button className="header__button button__layout" type="button">
               Contate nos
            </button>
            <button
               className="header__burger"
               type="button"
               onClick={() => handleClick()}
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
      </header>
   );
}

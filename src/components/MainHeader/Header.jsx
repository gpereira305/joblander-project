import React from "react";
import Close from "../../assets/icons/close.svg";
import { navLinks } from "../../data";
import { Link } from "react-scroll";
import { useGlobalContext } from "../../context";
import "./index.css";

export default function Header() {
   const { isActive, setIsActive, isToggle } = useGlobalContext();

   const handleClick = () => {
      if (window.innerWidth < 768) {
         document.body.style.overflowY =
            document.body.style.overflowY == "hidden" ? "auto" : "hidden";
         setIsActive(!isActive);
      }
   };

   const toggleHeader = isToggle ? "header toggle" : "header";
   const toggleNavbar = isActive ? "header__nav toggle" : "header__nav";
   const toggleOverlay = isActive
      ? "header__overlay toggle"
      : "header__overlay";

   return (
      <header className={toggleHeader}>
         <div className="header__container">
            <p className="header__logo">JobLander</p>

            <nav className={toggleNavbar}>
               <img
                  className="header__close"
                  src={Close}
                  alt="Fechar"
                  title="Fechar"
                  onClick={handleClick}
               />

               <ul className="header__listing">
                  {navLinks?.map(({ id, title, url }) => (
                     <li className="header__item" key={id}>
                        <Link
                           activeClass="header__link active"
                           smooth={true}
                           spy={true}
                           duration={200}
                           to={url}
                        >
                           <span onClick={handleClick}>{title}</span>
                        </Link>
                     </li>
                  ))}
                  <Link
                     className="header__item-button button__layout"
                     smooth={true}
                     spy={true}
                     duration={200}
                     to={"register"}
                     onClick={handleClick}
                  >
                     Cadastre-se
                  </Link>
               </ul>
            </nav>
            <span className={toggleOverlay} onClick={handleClick}></span>

            <Link
               className="header__button button__layout"
               smooth={true}
               spy={true}
               duration={200}
               to={"register"}
            >
               Cadastre-se
            </Link>
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

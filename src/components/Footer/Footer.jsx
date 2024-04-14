import React from "react";
import footerBg from "../../assets/images/background-5.webp";
import footerLogo from "../../assets/icons/main-logo.svg";
import { footerLinks, socialLinks } from "../../data";
import "./index.css";

export default function Footer() {
   return (
      <footer
         className="footer"
         style={{ backgroundImage: `url(${footerBg})` }}
      >
         <div className="footer__wrapper">
            <div className="footer__logo">
               <figure className="footer__image">
                  <img className="footer__img" src={footerLogo} alt="Logo" />
               </figure>

               <ul className="footer__socials">
                  {socialLinks.map(({ icon, link, name }) => (
                     <li className="footer__social" key={link}>
                        <a
                           className="footer__social-links"
                           href="http://www.facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              className="footer__social-icon"
                              src={icon}
                              alt={name}
                              title={name}
                           />
                        </a>
                     </li>
                  ))}
               </ul>
               <p className="footer__copyright">
                  © 2024 JobLander. Todos os direitos reservados.
               </p>
            </div>

            <ul className="footer__list">
               {footerLinks.map(({ title, id, links }) => (
                  <li className="footer__item" key={id}>
                     {title}
                     <ul className="footer__sublist">
                        {links.map(({ subtitle, link, id }) => (
                           <li className="footer__subitem" key={id}>
                              <a className="footer__link" href={link}>
                                 {subtitle}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>

            <p className="footer__copyright--mobile">
               © 2021 JobLander. Todos os direitos reservados.
            </p>
         </div>
      </footer>
   );
}

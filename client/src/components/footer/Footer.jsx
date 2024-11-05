import React from "react";
import styles from "./Footer.module.css";
import advertencia from "../../assets/perdidos.png";
import lupa from "../../assets/encontrados.png";
import informacion from "../../assets/info.png";
import refugio from "../../assets/refugio.png";
import logo from "../../assets/logoHAC7.png";

export default function Footer() {
  return (
    <div>
      <div className={styles.containerFooter}>
        <ul>
          <li>
            <a href="">Perdidos</a>
          </li>
          <li>
            <a href="">Encontrados</a>
          </li>
          <li>
            <a href="">Fundaciones</a>
          </li>
          <li>
            <a href="">Informacion</a>
          </li>
        </ul>
        <img src={logo} alt="logo de huellitas a casa" className={styles.logo}/>
        <p>Derechos de la pagina reservados</p>
      </div>
    </div>
  )
}

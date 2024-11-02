import React from "react";
import styles from "./Footer.module.css";
import advertencia from "../../assets/perdidos.png";
import lupa from "../../assets/encontrados.png";
import informacion from "../../assets/info.png";
import refugio from "../../assets/refugio.png";
import logo from "../../assets/icono1.png";

export default function Footer() {
  return (
    <div>
      <div className={styles.containerFooter}>
        <img src={logo} alt="logo de huellitas a casa" className={styles.logo}/>
        <ul>
          <li>
            <img src={advertencia} alt="icono de seccion perdidos" />
            <a href="">Perdidos</a>
          </li>
          <li>
            <img src={lupa} alt="icono de seccion encontrados" />
            <a href="">Encontrados</a>
          </li>
          <li>
            <img src={refugio} alt="icono de seccion fundaciones" />
            <a href="">Fundaciones</a>
          </li>
          <li>
            <img src={informacion} alt="icono de seccion informacion" />
            <a href="">Informacion</a>
          </li>
        </ul>
      </div>
      <p>Derechos de la pagina reservados</p>
    </div>
  )
}

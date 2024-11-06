import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logoHAC8.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className={styles.containerFooter}>
        <div className={styles.gap}>
          <ul>
            <li>
              <Link to="/perdidos"><a href="#">Perdidos</a></Link>
            </li>
            <li>
              <Link to="/encontrados"><a href="#">Encontrados</a></Link>
            </li>
            <li>
              <Link to="/fundaciones"><a href="#">Fundaciones</a></Link>
            </li>
            <li>
              <Link to="/informacion"><a href="#">Informacion</a></Link>
            </li>
          </ul>
        </div>
        <div className={styles.line}>

        </div>
        <div className={styles.gap}>
          <Link to="/home"><img src={logo} alt="Logo" className={styles.logo}/></Link>
        </div>
        <div className={styles.line}>

        </div>
        <div className={styles.gap}>
          <p>© Derechos de la pagina reservados</p>
        </div>
      </div>
    </div>
  )
}

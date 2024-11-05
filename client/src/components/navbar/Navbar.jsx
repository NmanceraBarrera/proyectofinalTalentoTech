import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/icono1.png";
import burger from "../../assets/burger.png";
import account from "../../assets/account.png";
import advertencia from "../../assets/perdidos.png";
import lupa from "../../assets/encontrados.png";
import informacion from "../../assets/info.png";
import refugio from "../../assets/refugio.png";

export default function Navbar() {
  return (
    <div className={styles.containerNavbar}>
      <input type="checkbox" id="logo" className={styles.btnBurger} />
      <label htmlFor="logo">
        <img src={burger} alt="Burger" className={styles.burger} />
      </label>
      <ul className={styles.listLeft}>
        <li>
          <a href="#">Perdidos</a>
        </li>
        <li>
          <a href="#">Encontrados</a>
        </li>
        <li>
          <a href="#">Fundaciones</a>
        </li>
      </ul>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.listRight}>
        <li>
          <a href="#">Informacion</a>
        </li>
        <li>
          <button>Registrarse</button>
        </li>
        <li>
          <button>Iniciar sesion</button>
        </li>
      </ul>
      <img src={account} alt="Account" className={styles.account} />
      <div className={styles.containerSidebar}>
        <div className={styles.sidebar}>
          <nav>
            <div>
              <img src={advertencia} alt="Icono de advertencia" />
              <button>Perdidos</button>
              <p>
                En esta sección encontrarás todos las mascotas reportados como
                perdidos
              </p>
            </div>
            <div>
              <img src={lupa} alt="Icono de lupa" />
              <button>Encontrados</button>
              <p>
                En esta sección encontrarás todas las mascotas reportadas como
                encontradas
              </p>
            </div>
            <div>
              <img src={refugio} alt="icono de refugio" />
              <button>Fundaciones</button>
              <p>
                En esta sección encontrarás fundaciones que podras filtrar por
                zonas
              </p>
            </div>
            <div>
              <img src={informacion} alt="icono de informacion" />
              <button>Información</button>
              <p>
                En esta sección encontrarás toda la información necesaria para
                utilizar esta pagina y mas
              </p>
            </div>
          </nav>
          <label htmlFor="logo" className={styles.btnClose}>
            x
          </label>
        </div>
      </div>
    </div>
  );
}

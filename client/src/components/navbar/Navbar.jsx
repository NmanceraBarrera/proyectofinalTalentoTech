import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/icono1.png";
import burger from "../../assets/burger.png";
import account1 from "../../assets/account.png";
import account from "../../assets/account.png";
import advertencia from "../../assets/perdidos.png";
import lupa from "../../assets/encontrados.png";
import informacion from "../../assets/info.png";
import refugio from "../../assets/refugio.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.containerNavbar}>
      <input type="checkbox" id="logo" className={styles.btnBurger} />
      <label htmlFor="logo">
        <img src={burger} alt="Burger" className={styles.burger} />
      </label>

      <div className={styles.gap}>
        <ul className={styles.listLeft}>
          <li>
            <Link to="/perdidos">
              <a href="#">Perdidos</a>
            </Link>
          </li>
          <li>
            <Link to="/encontrados">
              <a href="#">Encontrados</a>
            </Link>
          </li>
          <li>
            <Link to="/fundaciones">
              <a href="#">Fundaciones</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.gap1}>
        <Link to="/home">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.gap}>
        {isAuthenticated ? (
          <ul className={styles.listRight}>
            <li>
              <Link to="/informacion">
                <a href="#">Información</a>
              </Link>
            </li>
            <li></li>
            <li>
              <button onClick={toggleProfile}>
                <img src={account1} alt="Perfil" className={styles.account1} />
              </button>
              {profileOpen && (
                <div className={styles.profileDropdown}>
                  <p>
                    <strong>Nombre:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <button onClick={logout}>Cerrar Sesión</button>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <ul className={styles.listRight}>
            <li>
              <Link to="/informacion">
                <a href="#">Información</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button>Registrarse</button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button>Iniciar Sesión</button>
              </Link>
            </li>
          </ul>
        )}
        <Link to="/perfil">
          <img src={account} alt="Perfil" className={styles.account} />
        </Link>
      </div>

      <div className={styles.containerSidebar}>
        <div className={styles.sidebar}>
          <nav>
            <div>
              <img src={advertencia} alt="Icono de advertencia" />
              <Link to="/perdidos">
                <button>Perdidos</button>
              </Link>
              <p>
                En esta sección encontrarás todos las mascotas reportadas como
                perdidas.
              </p>
            </div>
            <div>
              <img src={lupa} alt="Icono de lupa" />
              <Link to="/encontrados">
                <button>Encontrados</button>
              </Link>
              <p>
                En esta sección encontrarás todas las mascotas reportadas como
                encontradas.
              </p>
            </div>
            <div>
              <img src={refugio} alt="icono de refugio" />
              <Link to="/fundaciones">
                <button>Fundaciones</button>
              </Link>
              <p>
                En esta sección encontrarás fundaciones que podrás filtrar por
                zonas.
              </p>
            </div>
            <div>
              <img src={informacion} alt="icono de información" />
              <Link to="/informacion">
                <button>Información</button>
              </Link>
              <p>
                En esta sección encontrarás toda la información necesaria para
                utilizar esta página y más.
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

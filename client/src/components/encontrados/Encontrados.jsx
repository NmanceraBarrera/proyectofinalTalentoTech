import React from "react";
import styles from "./Encontrados.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Encontrados() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <section className={styles.section1}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.info}>
            <h1>
              <span>¿Perdiste tu mascota?</span> <h3>¿Qué hacer?</h3>
            </h1>
            <p>
              Accede a la Sección de "Perdidos": Aquí puedes ver una lista de
              animales que han sido reportados por otros usuarios como perdidos
              en tu zona.
            </p>
            <Link to='/perdidos'><button className={styles.botones}>Perdidos</button></Link>
            
          </div>
          <div className={styles.img1}>
            <img
              src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="cat"
            />
          </div>
        </div>

        {/* Tarjetas*/}
        <div className={styles.container}>
          {/* Card1 */}
          <div className={styles.cards}>
            <p>
            Mantener la calma y tomar medidas inmediatas, si deseas saber más
            sobre control de emociones en situaciones similares te dejamos una
            guía rápida justo aquí abajo
            </p>
            <Link to='/informacion'><button className={styles.botones}>¿Qué hacer?</button></Link>
          </div>
          {/* Card2 */}
          <div className={styles.cards}>
            <p>
              Si has encontrado a una mascota, registra el caso ingresando información al formulario de "encontrados"
            </p>
            <Link to='/formencontrados'><button className={styles.botones}>Publicar</button></Link>
          </div>
          {/* Card3 */}
          <div className={styles.cards}>
            <p>
              Si no puedes cuidar de tu peludo, puedes comunicarte con alguna de
              las fundaciones inscritas, ¡a un solo click!
            </p>
            <Link to='/fundaciones'><button className={styles.botones}>Comunícate</button></Link>
          </div>
        </div>
        {/* Fin de las tajetas */}
      </section>
      {/* Busqueda */}
      <section className={styles.section2}>
        <div className={styles.title2}>
          <h2>
            Acá encontrarás todas las mascotas que se han agregado como
            encontradas, recuerda que puedes filtrar de acuerdo a ciertas
            características:
          </h2>
        </div>

        <div className={styles.barrabusqueda}>
          <div className={styles.contenedorbarrabusqueda}>
            <input
              type="text"
              name="busqueda"
              id="busqueda"
              placeholder="Buscar"
            />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <defs>
                <mask id="IconifyId192f9c235299a8f4b1">
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <path
                      fill="#555"
                      d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
                    />
                    <path
                      stroke-linecap="round"
                      d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="#eca883"
                d="M0 0h48v48H0z"
                mask="url(#IconifyId192f9c235299a8f4b1)"
              />
            </svg>
          </div>
        </div>

        <div className={styles.selectores}>
          <select name="genero" id="genero">
            <option value="" disabled select>
              Genero
            </option>
            <option value="opcion2">Macho</option>
            <option value="opcion3">Hembra</option>
          </select>

          <select name="especie" id="especie">
            <option value="" disabled select>
              Especie
            </option>
            <option value="opcion2">Perro</option>
            <option value="opcion3">Gato</option>
          </select>

          <select name="ciudad" id="ciudad">
            <option value="" disabled select>
              Ciudad
            </option>
            <option value="opcion2">Bogotá</option>
            <option value="opcion3">Medellin</option>
          </select>
        </div>
      </section>
      {/* Section 3 */}
      <section className={styles.section_3}>
        <div className={styles.tarjetas_animales}>
          {/* aqui van las tarjetas */}
          {/* <Cards/> */}
        </div>

        <div className={styles.btn_ver}>
        <Link to='/fundaciones'><button className={styles.botones}>Ver todos</button></Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

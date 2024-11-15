import React from "react";
import styles from "./perdidos.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

export default function Perdidos() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <section className={styles.section_1}>
        <div className={styles.banner}>
          <div className={styles.informacion_1}>
            <h1>¿Perdiste a tu mascota?</h1>
            <h3>¿Qué hacer?</h3>
            <p>
              Accede a la Sección de "Mascotas Encontradas": Aquí puedes ver una
              lista de animales que han sido reportados por otros usuarios como
              encontrados en tu zona.
            </p>
            <Link to='/encontrados'><button className={styles.botones}>Encontrados</button></Link>

          </div>

          <div className={styles.img}>
            <img
              src="https://images.pexels.com/photos/28683174/pexels-photo-28683174/free-photo-of-retrato-de-un-labrador-retriever-feliz-en-tunez.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Perro"
            />
          </div>
        </div>

        <div className={styles.container_tarjetas}>
          <div className={styles.tarjeta}>
            <p>
            Mantener la calma y tomar medidas inmediatas, si deseas saber más sobre control de emociones en situaciones similares te dejamos una, guía rápida justo aquí abajo.
            </p>
            <Link to='/informacion'><button className={styles.botones}>¿Qué hacer?</button></Link>

          </div>

          <div className={styles.tarjeta}>
            <p>
              Si no encuentras a tu mascota perdida en la sección de
              "Encontrados", es hora de publicar un anuncio.
            </p>
            <Link to='/formperdidos'><button className={styles.botones}>Publicar</button></Link>

          </div>

          <div className={styles.tarjeta}>
            <p>
              {" "}
              Si no puedes cuidar de este(a), puedes comunicarte con alguna de
              las fundaciones inscritas ¡a un solo click!.
            </p>
            <Link to='/fundaciones'><button className={styles.botones}>comunícate</button></Link>

          </div>
        </div>
      </section>

      <section className={styles.section_2}>
        <h3>
          Acá encontrarás todas las mascotas que se han agregado como encontradas, recuerda que: puedes filtrar de acuerdo a ciertas características.
        </h3>
        <div className={styles.barra_busqueda}>
          <div className={styles.container_busqueda}>
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
        <div className={styles.desplegables}>
          <div className={styles.tipo}>
            <select id="genero" name="genero">
              <option value="" disabled selected>
                Género
              </option>
              <option value="opcion2">Macho</option>
              <option value="opcion3">Hembra</option>
            </select>
            <select id="tipo_de_especie" name="tipo_de_especie">
              <option value="" disabled selected>
                Especie
              </option>
              <option value="opcion2">Perro</option>
              <option value="opcion3">Gato</option>
            </select>
            <select id="ciudad" name="ciudad">
              <option value="" disabled selected>
                Ciudad
              </option>
              <option value="opcion2">Bogotá</option>
              <option value="opcion3">Medellín</option>
            </select>
          </div>
        </div>
      </section>

      <section className={styles.section_3}>
        <div className={styles.tarjetas_animales}>
          {/* aqui van las tarjetas */}
        </div>

        <div className={styles.btn_ver}>
        <Link to='/fundaciones'><button className={styles.botones}>Ver todos</button></Link>

        </div>
      </section>
      <Footer />
    </div>
  );
}

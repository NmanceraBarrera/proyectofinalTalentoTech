import React from "react";
import styles from "./perdidos.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";

export default function Perdidos() {
  return (
    <div>
      <Navbar />
      <ModalScreen />
      <div className={styles.titulos_1}>
        <h2>¿Encontraste un animal?</h2>
        <h3>¿Que hacer?</h3>
      </div>
      {/* ---------------Seccion 1----------------- */}
      <section className={styles.section_1}>
        <div className={styles.informacion_1}>
          <p>
            Accede a la Seccion de "Mascotas Perdidas". Aqui podras ver la lista
            de animales que han sido reportados como perdidos y asi buscar si
            alguien lo esta buscando
          </p>
          <button>Perdidos</button>
        </div>
        <div className={styles.imagen_1}>
          <img
            src="https://i.pinimg.com/564x/ef/97/90/ef9790a063fd9d4e72cb3b59aa0a3a6c.jpg"
            alt="perros y gatos"
          />
        </div>
      </section>
      {/* -----------------------section_2------------ */}
      <section className={styles.section_2}>
        <div className={styles.informacion_2}>
          <p>
            Si nunca has cuidado una mascota antes o si sientes que necesitas un
            poco de orientación, ¡no te preocupes!
          </p>
          <button>¿Qué hacer?</button>
        </div>
        <div className={styles.imagen_2}>
          <img
            src="https://i.pinimg.com/564x/47/ab/a2/47aba26ddeac4d80dcfa4b3d0cb12a27.jpg"
            alt="perros y gatos"
          />
        </div>
      </section>

      {/* ---------------Seccion 3----------------- */}
      <section className={styles.section_1}>
        <div className={styles.informacion_1}>
          <p>
            Si no encuentras a la mascota en la sección de "Perdidos", es hora
            de registrar el caso
          </p>
          <button>Registra</button>
        </div>
        <div className={styles.imagen_1}>
          <img
            src="https://i.pinimg.com/564x/2a/0a/b7/2a0ab78985cceb539ffb04a424c15c43.jpg"
            alt="perros y gatos"
          />
        </div>
      </section>
      {/* -----------------------section_4------------ */}
      <section className={styles.section_2}>
        <div className={styles.informacion_2}>
          <p>
            Si no puedes cuidar de este(a), puedes comunicarte con alguna de las
            fundaciones inscritas ¡a un solo click!
          </p>
          <button>Comunicate</button>
        </div>
        <div className={styles.imagen_2}>
          <img
            src="https://i.pinimg.com/236x/39/f7/3a/39f73a6c5ba8d45a209e8a94626eeaa5.jpg"
            alt="perros y gatos"
          />
        </div>
      </section>
      {/* -----------------------section_5------------ */}
      <section className={styles.section_5}>
        <h3>
          Aca encontraras todos las mascotas que se han agregado como
          encontradas, recuerda que: puedes filtrar de acuerdo a ciertas
          caracteristicas
        </h3>
        <div className={styles.barra_busqueda}>
          <div className={styles.container_busqueda}>
          <input type="text" name="nombre" id="nombre" placeholder="Buscar" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="IconifyId192f9c235299a8f4b1"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></mask></defs><path fill="#eca883" d="M0 0h48v48H0z" mask="url(#IconifyId192f9c235299a8f4b1)"/></svg>
          </div>
        </div>
        <div className={styles.desplegables}>
          <div className={styles.tipo}>
                <select id="tipo_de_sexo" name="tipo_de_sexo">
                  <option value="" disabled selected>
                    Sexo
                  </option>
                  <option value="opcion2">Macho</option>
                  <option value="opcion3">Hembra</option>
                </select>
                <select id="tipo_de_especie" name="tipo_de_especie">
                  <option value="" disabled selected>
                    Especie
                  </option>
                  <option value="opcion2">Perr@</option>
                  <option value="opcion3">Gat@</option>
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
    </div>
  );
}

import React from "react";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import Footer from "../footer/Footer";
export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.containerPrincipal}>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <section className={styles.section_1}>
        <div className={styles.informacion_1}>
          <div className={styles.titulo}>
            <h1>Huellitas a casa</h1>
          </div>
          <div className={styles.parrafo_1}>
            <h3>¿Como funciona huellitas a casa?</h3>
            <p>
              Nuestra misión es ayudarte a encontrar a tu amigo perdido o a
              reunir animales encontrados con sus familias. Nuestra plataforma
              está diseñada para facilitar la búsqueda, el reporte y la
              recolección de animales extraviados en tu comunidad.
            </p>
          </div>
        </div>

        <div className={styles.contenedor_imagen_1}>
          <div className={styles.foto}>
            <img
              src="https://i.ibb.co/mTrv7jL/perros-y-gatos.png"
              alt="dog y cat"
            />
          </div>
        </div>
      </section>

      <section className={styles.section_2}>
        <div className={styles.container_1}>
          <div className={styles.informacion_2}>
            <h3>¿Has perdido a tu mascota? </h3>
            <p>
              Publica un anuncio con los detalles y recibe alertas cuando haya
              avistamientos cerca.
            </p>
            <button className={styles.botones}>Perdidos</button>
          </div>
        </div>

        <div className={styles.container_2}>
          <div className={styles.imagen_2}>
            <img
              src="https://i.ibb.co/nfzmzXh/elperroyelgato-removebg-preview.png"
              alt="img dog and cat"
            />
          </div>
        </div>

        <div className={styles.container_1}>
          <div className={styles.informacion_2}>
            <h3>¿Has encontrado un animal?</h3>
            <p>
              Ayúdanos a difundir la información para que su dueño lo pueda
              encontrar rápidamente.
            </p>
            <button className={styles.botones}>Encontrados</button>
          </div>
        </div>
      </section>

      <section className={styles.section_3}>
        <div className={styles.btn_ver}>
          <h2>¿Buscas fundaciones de animales en tu zona?</h2>
          <button className={styles.botones}>Buscar ahora</button>
        </div>
       
      </section>
      <Footer />
    </div>
  );
}

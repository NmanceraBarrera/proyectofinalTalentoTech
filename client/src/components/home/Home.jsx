import React, { useEffect } from "react";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  // Esta parte se asegura de que `user` no sea null antes de acceder a sus propiedades.
  useEffect(() => {
    if (user && user.email && user.id) {
      // Solo hacer algo si `user` no es null y tiene las propiedades necesarias
      const usuarioRegistrado = user.email + user.id;
      console.log("Usuario registrado:", usuarioRegistrado); // Esto es solo un ejemplo de uso.
    }
  }, [user]); // Este efecto se ejecutará solo cuando `user` cambie

  return (
    <div className={styles.containerPrincipal}>
      <Navbar />

      {/* Mostrar el modal si no está autenticado */}
      {!isAuthenticated && <ModalScreen />}

      <section className={styles.section_1}>
        <div className={styles.informacion_1}>
          <div className={styles.titulo}>
            <h1>Huéllitas a casa</h1>
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
            <Link to="/perdidos">
              <button className={styles.botones}>Perdidos</button>
            </Link>
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
            <Link to="/encontrados">
              <button className={styles.botones}>Encontrados</button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section_3}>
        <div className={styles.btn_ver}>
          <h2>¿Buscas fundaciones de animales en tu zona?</h2>
          <Link to="/fundaciones">
            <button className={styles.botones}>Buscar ahora</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import React from "react";
import styles from "./Informacion.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";


export default function Informacion() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.containerInfo}>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <main className={styles.containerMain}>
        <div className={styles.containerIndex}>
          <h1>Patitas en accion</h1>
          <p>
            <b>¿No sabes qué hacer en una situación complicada?</b> No te
            preocupes, aquí tienes una guía rápida y práctica para abordar los
            problemas más comunes que podrías encontrar. Explora estos consejos
            esenciales y navega fácilmente a través de los temas con nuestro
            índice interactivo para obtener la ayuda que necesitas al instante.
          </p>
          <ol>
            <li>
              <b>¿Qué hacer si encontré un animal perdido?</b>
            </li>
            <ol>
              <li>
                <a href="#tip1_1">¿Como debo acercarme?</a>
              </li>
              <li>
                <a href="#tip1_2">¿Que hacer si esta herido?</a>
              </li>
              <li>
                <a href="#tip1_3">
                  Registrarlo como encontrado en Huellitas A Casa
                </a>
              </li>
            </ol>
            <li>
              <b>¿Qué hacer si perdí a mi mascota?</b>
            </li>
            <ol>
              <li>
                <a href="#tip2_1">¿Como buscarlo correctamente?</a>
              </li>
              <li>
                <a href="#tip2_2">
                  Registrarlo como perdido en Huellitas A Casa
                </a>
              </li>
            </ol>
            <li>
              <b>
                ¿Qué hacer si quiero contactar o crear una fundacion de
                animales?
              </b>
            </li>
            <ol>
              <li>
                <a href="#tip3_1">¿Como filtrar fundaciones en mi zona?</a>
              </li>
              <li>
                <a href="#tip3_2">
                  ¿Como registrar una fundacion en Huellitas A Casa?
                </a>
              </li>
            </ol>
            <li>
              <b>¿Qué más puedo hacer?</b>
            </li>
            <ol>
              <li>
                <a href="#tip4_1">
                  ¿Qué otras herramientas puedo usar para difundir?
                </a>
              </li>
            </ol>
          </ol>
        </div>
        <section className={styles.containerSections}>
          <section id="tip1_1" className={styles.highlighted}>
            <h3>¿Como debo acercarme?</h3>
            <p>
              Es importante mantener la calma y no hacer movimientos rápidos que
              puedan sobresaltar al animal. Acércate lentamente, evitando hacer
              ruidos fuertes o gestos repentinos, ya que esto podría estresarlo
              aún más.
            </p>
          </section>
          <section id="tip1_2" className={styles.highlighted}>
            <h3>¿Que hacer si esta herido?</h3>
            <p>
              Al estar herido podria estar agresivo o asustado. Mantén la calma
              y habla con una voz suave. Sí gravemente herido, buscar atención
              profesional de inmediato. Llama a una clínica veterinaria o a un
              refugio para animales para obtener orientación sobre cómo
              proceder.
            </p>
          </section>
          <section id="tip1_3" className={styles.highlighted}>
            <h3>Registrarlo como encontrado en Huellitas A Casa</h3>
            <p>
              Puedes acceder al formulario en el siguiente boton, llenarlo con
              los datos solicitados y serás notificado de quien este buscandolo
            </p>
            <Link to="/foundationsForm"><button>Registrar encontrado</button></Link>
          </section>
          <section id="tip2_1" className={styles.highlighted}>
            <h3>¿Como buscarlo correctamente?</h3>
            <p>
              Comienza con una búsqueda rápida en el lugar de la pérdida: llama
              a tu mascota y pregunta a los residentes de la zona si lo han
              visto. Si tu mascota tiende a visitar lugares específicos, como
              parques o casas de amigos, revisa esas zonas primero.
            </p>
          </section>
          <section id="tip2_2" className={styles.highlighted}>
            <h3>Registrarlo como perdido en Huellitas A Casa</h3>
            <p>
              Puedes acceder al formulario de perdidos en el siguiente boton,
              llenalo con los datos solicitados y se te notificara si alguien
              tiene alguna información relevante
            </p>
            <Link to="/formperdidos"><button>Registrar perdido</button></Link>
          </section>
          <section id="tip3_1" className={styles.highlighted}>
            <h3>¿Como filtrar fundaciones en mi zona?</h3>
            <p>
              Puedes acceder a la seccion de fundaciones y filtrar los
              resultados en la zona deseada en la barra de busqueda ubicada
              justo arriba de las fundaciones registradas
            </p>
            <Link to="/fundaciones"><button>Fundaciones</button></Link>
          </section>
          <section id="tip3_2" className={styles.highlighted}>
            <h3>¿Como registrar una fundacion en Huellitas A Casa?</h3>
            <p>
              Puedes acceder a la seccion de fundaciones y llenar los datos
              solicitados en el formulario de registro de fundaciones
            </p>
            <Link to="/foundationsForm"><button>Registrar una fundacion</button></Link>
          </section>
          <section id="tip4_1" className={styles.highlighted}>
            <h3>¿Qué otras herramientas puedo usar para difundir?</h3>
            <p>
              Difundir en redes sociales y buscar redes de apoyo en tu area,
              coloca carteles en la zona con informacion relevante, busca en
              refugios y albergues locales, revisa camaras de seguridad, alertar
              a la entidad correspondiente
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

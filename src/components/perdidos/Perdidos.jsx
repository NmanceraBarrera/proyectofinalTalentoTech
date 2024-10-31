import React from "react";
import styles from "./perdidos.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";

export default function Perdidos() {
  return (
    <div>
      <div className={styles.container_principal}></div>
      <Navbar />
      <ModalScreen />
      <section className={styles.section_1}>
        <div className={styles.titulos_1}>
          <h2>¿Encontraste un animal?</h2>
          <h3>¿Qué hacer?</h3>
        </div>
        <div className={styles.container_info}>
          <div className={styles.caja_info}>
            <div className={styles.informacion}>
              <div className={styles.contenido_informacion}>
                <p>
                  Accede a la Sección de "Mascotas Encontradas": Aquí puedes ver
                  una lista de animales que han sido reportados por otros
                  usuarios como encontrados en tu zona.
                </p>
                <div className={styles.contenedor_boton}>
                  <button>Perdidos</button>
                </div>
              </div>
            </div>
            <div className={styles.imagen}>
              <img
                src="https://i.pinimg.com/236x/c3/b3/99/c3b399f88c45e47398ddea829b07e47c.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.caja_info_2}>
            <div className={styles.informacion}>
              <div className={styles.contenido_informacion}>
                <p>
                  Mantener la calma y tomar medidas inmediatas. Si deseas saber
                  más sobre control de emociones en situaciones similares, te
                  dejamos una guía rápida justo aquí abajo.
                </p>
                <div className={styles.contenedor_boton}>
                  <button>¿Qué hacer?</button>
                </div>
              </div>
            </div>
            <div className={styles.imagen}>
              <img
                src="https://i.pinimg.com/236x/de/61/b0/de61b01eca182f94c92bce8b5cfef6d0.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.caja_info}>
            <div className={styles.informacion}>
              <div className={styles.contenido_informacion}>
                <p>
                  Si no encuentras a tu mascota en la sección de "Encontrados",
                  es hora de registrar el caso.
                </p>
                <div className={styles.contenedor_boton}>
                  <button>Encontrado</button>
                </div>
              </div>
            </div>
            <div className={styles.imagen}>
              <img
                src="https://i.pinimg.com/236x/47/50/c9/4750c969411d2b310d3631119057bc46.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.caja_info_2}>
            <div className={styles.informacion}>
              <div className={styles.contenido_informacion}>
                <p>
                  {" "}
                  Aquí podrás ver la lista de animales que han sido reportados
                  como perdidos y así buscar si alguien lo está buscando.
                </p>
                <div className={styles.contenedor_boton}>
                  <button>Fundaciones</button>
                </div>
              </div>
            </div>
            <div className={styles.imagen}>
              <img
                src="https://i.pinimg.com/236x/a1/f1/27/a1f127907b167e3046d17e0f1429bfc8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_2}>
        <div className={styles.spinner}>
          <div className={styles.titulo_2}>
            <h2>
              Aquí encontrarás todas las mascotas que se han agregado como
              encontradas. Recuerda que puedes filtrar de acuerdo a ciertas
              características.
            </h2>
          </div>
          <div className={styles.Container_spinner_section}>
            <div className={styles.bar_busqueda}>
              <div className={styles.busqueda}>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Buscar"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <defs>
                    <mask id="IconifyId192de9132498e907f4">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-linejoin="round"
                        strokeWidth="4"
                      >
                        <path
                          fill="#555"
                          d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
                        />
                        <path
                          strokeLinecap="round"
                          d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="#eca883"
                    d="M0 0h48v48H0z"
                    mask="url(#IconifyId192de9132498e907f4)"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.container_spinner}>
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
          </div>

          <div className={styles.contenedor_tarjetas}>
            <div className={styles.container_tarjeta}>
              <div className={styles.img_fundacion}>
                <img
                  src="https://i.pinimg.com/564x/a8/9d/00/a89d00aeb784f5b59b7e8564014c055c.jpg"
                  alt="img-fundacion"
                />
              </div>
              <div className={styles.info_tarjeta}>
                <div className={styles.titulos_tarjeta}>
                  <h3>Nombre fundación</h3>
                  <h4>Datos de la fundación</h4>
                </div>
                <div className={styles.caja}>
                  <h3>Nombre:</h3>
                  <p id="Name_animal">nombre</p>
                </div>
                <div className={styles.caja}>
                  <h3>Ciudad:</h3>
                  <p id="Name_ciudad">ciudad</p>
                </div>
                <div className={styles.caja}>
                  <h3>Contacto:</h3>
                  <p id="numero_contacto">número</p>
                </div>
              </div>
            </div>

            <div className={styles.container_tarjeta}>
              <div className={styles.img_fundacion}>
                <img
                  src="https://i.pinimg.com/564x/a8/9d/00/a89d00aeb784f5b59b7e8564014c055c.jpg"
                  alt="img-fundacion"
                />
              </div>
              <div className={styles.info_tarjeta}>
                <div className={styles.titulos_tarjeta}>
                  <h3>Nombre fundación</h3>
                  <h4>Datos de la fundación</h4>
                </div>
                <div className={styles.caja}>
                  <h3>Nombre:</h3>
                  <p id="Name_animal">nombre</p>
                </div>
                <div className={styles.caja}>
                  <h3>Ciudad:</h3>
                  <p id="Name_ciudad">ciudad</p>
                </div>
                <div className={styles.caja}>
                  <h3>Contacto:</h3>
                  <p id="numero_contacto">número</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import styles from './Encontrados.module.css';
import Navbar from '../navbar/Navbar';
import ModalScreen from '../utils/Modal';

export default function Encontrados() {
  return (
    <div>
      <Navbar/>
      <ModalScreen/>
      <section className={styles.section1}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.info}>
          <h1><span>¿Perdiste tu mascota?</span> resportala en la seccion perdidos</h1>
          <button>Perdidos</button>
        </div>
        <div className={styles.img1}>
          <img src="https://images.pexels.com/photos/3780890/pexels-photo-3780890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" />
        </div>
      </div>

      {/* Tarjetas*/}
      <div className={styles.conteiner}>
        {/* Card1 */}
        <div className={styles.cards}>
          <p>Si nunca has cuidado una mascota antes o si sientes que necesitas un poco de orientación, ¡no te preocupes!</p>
          <button>¿Qué hacer?</button>
        </div>
        {/* Card2 */}
        <div className={styles.cards}>
          <p>Si no encuentras a la mascota en esta sección, es hora de registrar el caso en la seccion "Perdidos"</p>
          <button>Perdidos</button>
        </div>
        {/* Card3 */}
        <div className={styles.cards}>
          <p>Si no puedes cuidar de tu peludo, puedes comunicarte con alguna de las fundaciones inscritas
          ¡a un solo click!</p>
          <button>Fundaciones</button>
        </div>

      </div>
      {/* Fin de las tajetas */}
      </section>
      {/* Busqueda */}
      <section className={styles.section2}>
        <div className={styles.title2}>
          <h2>Aca encontraras todos las mascotas que se han agregado como encontradas, recuerda que: puedes filtrar de acuerdo a ciertas caracteristicas</h2>
        </div>

        <div className={styles.barrabusqueda}>
          <div className={styles.contenedorbarrabusqueda}>
          <input type="text" name='busqueda' id='busqueda' placeholder='Buscar'/>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="IconifyId192f9c235299a8f4b1"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></mask></defs><path fill="#eca883" d="M0 0h48v48H0z" mask="url(#IconifyId192f9c235299a8f4b1)"/></svg>
          </div>
        </div>

        <div className={styles.selectores}>
          <select name="genero" id="genero">
            <option value="" disabled select>Genero</option>
            <option value="opcion2">macho</option>
            <option value="opcion3">hembra</option>
          </select>

          <select name="especie" id="especie">
            <option value="" disabled select>Especie</option>
            <option value="opcion2">perro</option>
            <option value="opcion3">gato</option>
          </select>

          <select name="ciudad" id="ciudad">
            <option value="" disabled select>Ciudad</option>
            <option value="opcion2">Bogotá</option>
            <option value="opcion3">Medellin</option>
          </select>
        </div>
      </section>
    </div>
  )
}


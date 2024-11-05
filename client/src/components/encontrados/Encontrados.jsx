import React from 'react';
import styles from './Encontrados.module.css';
import Navbar from '../navbar/Navbar';
import ModalScreen from '../utils/Modal';

export default function Encontrados() {
  return (
    <div>
      <Navbar/>
      <ModalScreen/>
      {/* Titulo */}
      <section className={styles.titulo}>
        <h1>¿Encontraste un animal?</h1>
        <h2>¿Que hacer?</h2>
      </section>
      {/* Banner */}
      <section className={styles.section1}>
        {/* Parrafo1 + imagen */}
        <div className={styles.contenedorInfo1}>
        <div className={styles.parrafo1}>
          <p>Accede a la Seccion de "Mascotas Perdidas".
          Aqui podras ver la lista de animales que han sido reportados como perdidos y asi buscar si alguien lo esta buscando</p>
          <button>Perdidos</button>
        </div>
        <div className={styles.image}>
          <img src="https://images.pexels.com/photos/29148855/pexels-photo-29148855/free-photo-of-encantador-gato-calico-en-una-calle-de-tunez.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </div>

        {/* Parrafo2 + imagen */}
        <div className={styles.contenedorInfo1}>
        <div className={styles.parrafo2}>
          <p>Si nunca has cuidado una mascota antes o si sientes que necesitas un poco de orientación, ¡no te preocupes!</p>
          <button>¿Que hacer?</button>
        </div>
        <div className={styles.image}>
          <img src="https://images.pexels.com/photos/6002000/pexels-photo-6002000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </div>
      </section>
      <section className={styles.section1}>
        {/* Parrafo3 + imagen */}
        <div className={styles.contenedorInfo1}>
        <div className={styles.parrafo1}>
          <p>Si no encuentras a la mascota en la sección de "Perdidos", es hora de registrar el caso</p>
          <button>encontrado</button>
        </div>
        <div className={styles.image}>
          <img src="https://images.pexels.com/photos/29148855/pexels-photo-29148855/free-photo-of-encantador-gato-calico-en-una-calle-de-tunez.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </div>

        {/* Parrafo4 + imagen */}
        <div className={styles.contenedorInfo1}>
        <div className={styles.parrafo2}>
          <p>Si no puedes cuidar de este(a), puedes comunicarte con alguna de las fundaciones inscritas
          ¡a un solo click!</p>
          <button>Fundaciones</button>
        </div>
        <div className={styles.image}>
          <img src="https://images.pexels.com/photos/6002000/pexels-photo-6002000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </div>
      </section>


    </div>
  )
}


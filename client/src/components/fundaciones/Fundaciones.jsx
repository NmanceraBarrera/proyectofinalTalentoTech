import React from 'react'
import styles from './Fundaciones.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


export default function Fundaciones() {
  return (
    <div className={styles.containerFundaciones}>
      <Navbar/>
        <main className={styles.containerMain}>
          <section className={styles.containerMain2}>
            <img src="https://is2.sosvox.net/petitions/b/5b/5b154b71539a0590357ced776270e07b.jpg" alt="" />
            <div>
              <h1>
                Quieres contactarte con alguna fundación cerca de ti para adoptar o apoyarla
              </h1>
              <p>
                Aqui encontraras los enlaces a las fundaciones que ayudan a nuestros peluditos, clickea en la que más te interese y podrás concretar con ellos
              </p>
            </div>
          </section>
          <section className={styles.section_2}>
            <h3>
              Aca encontraras todos las mascotas que se han agregado como
              encontradas, recuerda que: puedes filtrar de acuerdo a ciertas
              caracteristicas
            </h3>
            <div className={styles.barra_busqueda}>
              <div className={styles.container_busqueda}>
              <input type="text" name="busqueda" id="busqueda" placeholder="Buscar" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="IconifyId192f9c235299a8f4b1"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></mask></defs><path fill="#eca883" d="M0 0h48v48H0z" mask="url(#IconifyId192f9c235299a8f4b1)"/></svg>
              </div>
            </div>
            <div className={styles.desplegables}>
              <div className={styles.tipo}>
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
              <button>Ver Todos</button>
            </div>
          </section>  
        </main>
      <Footer/>
    </div>
  )
}
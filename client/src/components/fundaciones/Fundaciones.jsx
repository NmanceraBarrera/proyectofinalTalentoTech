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
          <section className={styles.containerMain3}>
            
          </section>
        </main>
      <Footer/>
    </div>
  )
}
<<<<<<< Updated upstream
export default function Home() {
  return <div>Home</div>;
=======
import React from 'react'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <section className={styles.containerSection_1}>
        <div className={styles.containerInfo_1}>
          <h2>¿Como funciona huellitas a casa?</h2>
          <p>Nuestra misión es ayudarte a encontrar a tu amigo perdido o a reunir animales encontrados con sus familias. Nuestra plataforma está diseñada para facilitar la búsqueda, el reporte y la recolección de animales extraviados en tu comunidad.</p>
        </div>
        <div className={styles.containerImg_1}>
          <img src="https://i.pinimg.com/236x/3b/0b/cb/3b0bcb6f89f34a6b4a7a4ff1eb1b6140.jpg" alt="img dog and cat" />
        </div>
      </section>

      <section className={styles.containerSection_2}>
      
      <div className={styles.containerInfo_2}>
        <h2>¿Has perdido a tu mascota? </h2>
        <p>Publica un anuncio con los detalles y recibe alertas cuando haya avistamientos cerca.</p>
        <div className={styles.btnImg_2}>
        <a href="#"><img src="https://i.ibb.co/zbqpPB5/btnhuella.png" alt="img huella" /></a>
        <h4>Ir</h4>
        </div>
      </div>
      <div className={styles.containerImg_2}>
        <img src="https://i.pinimg.com/564x/de/52/73/de527305f0061d16036608af42698d60.jpg" alt="img-animales" />
      </div>
      </section>

      <section className={styles.containerSection_3}>
      
      <div className={styles.containerInfo_3}>
        <h2>¿Has encontrado un animal?</h2>
        <p>Ayúdanos a difundir la información para que su dueño lo pueda encontrar rápidamente.
        </p>
        <div className={styles.btnImg_3}>
        <a href="#"><img src="https://i.ibb.co/zbqpPB5/btnhuella.png" alt="img huella" /></a>
        <h4>Ir</h4>
        </div>
      </div>
      <div className={styles.containerImg_3}>
        <img src="https://i.pinimg.com/236x/18/cb/fe/18cbfe9cfbb627f83e79e5cc5d7541d8.jpg" alt="" />
      </div>
      </section>

      <section className={styles.containerSection_4}>
      
      <div className={styles.containerInfo_4}>
        <h2>¿Buscas fundaciones de animales en tu zona?</h2>
        <button>Fundaciones</button>
      </div>

      <div className={styles.containerImg_4}>
        <div className={styles.container_tarjeta}>
          <div className={styles.img_fundacion}>
            <img src="https://i.pinimg.com/564x/a8/9d/00/a89d00aeb784f5b59b7e8564014c055c.jpg" alt="img-fundacion" />
          </div>
          <div className={styles.info_tarjeta} >
            <div className={styles.titulos_tarjeta}>
            <h3>Nombre fundación</h3>
            <h4>Datos de la fundación</h4>
          </div>
            <p>Ciudad</p>
            <p>Direccion</p>
          </div>
        </div>

        <div className={styles.container_tarjeta}>
          <div className={styles.img_fundacion}>
            <img src="https://i.pinimg.com/564x/a8/9d/00/a89d00aeb784f5b59b7e8564014c055c.jpg" alt="img-fundacion" />
          </div>
          <div className={styles.info_tarjeta} >
            <div className={styles.titulos_tarjeta}>
            <h3>Nombre fundación</h3>
            <h4>Datos de la fundación</h4>
          </div>
            <p>Ciudad</p>
            <p>Direccion</p>
          </div>
        </div>

        <div className={styles.container_tarjeta}>
          <div className={styles.img_fundacion}>
            <img src="https://i.pinimg.com/564x/a8/9d/00/a89d00aeb784f5b59b7e8564014c055c.jpg" alt="img-fundacion" />
          </div>
          <div className={styles.info_tarjeta} >
            <div className={styles.titulos_tarjeta}>
            <h3>Nombre fundación</h3>
            <h4>Datos de la fundación</h4>
          </div>
            <p>Ciudad</p>
            <p>Direccion</p>
          </div>
        </div>

        
      </div>
      </section>
    </div>
  )
>>>>>>> Stashed changes
}

import React from 'react'
import styles from './Informacion.module.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Informacion() {
  return <div className={styles.containerInfo}>
    <Navbar/>
      <main className={styles.containerMain}>
        <section className={styles.containerIndex}>
          <h1>Patitas en accion</h1>
          <img src="https://st.depositphotos.com/1041273/4444/v/450/depositphotos_44446057-stock-illustration-toolbox-with-tools-icon.jpg" alt="" />
          <p>Aqui encontrarás todos los temas necesarios para tratar diferentes inconvenientes con los que te puedas encontrar, acá un indice rapido para desplazarte:</p>
          <ol>
            <li><a href="#tip1">¿Qué hacer si encontré un animal perdido?</a></li>
            <ol>
              <li><a href="#tip1_1">Primera interaccion</a></li>
              <li><a href="#tip1_2">Observa el estado del animal</a></li>
              <li><a href="#tip1_3">Registralo como encontrado en Huellitas A Casa</a></li>
            </ol>
            <li><a href="#tip2">¿Que hacer si perdi a mi mascota?</a></li>
            <ol>
              <li><a href="#tip2_1">Busqueda de tu mascota</a></li>
              <li><a href="#tip2_2">Registra tu mascota como perdida en Huellitas A Casa</a></li>
            </ol>
            <li><a href="#tip3">¿Que hacer si quiero contactar una fundacion de animales?</a></li>
            <ol>
              <li><a href="#tip3_1">Busca organizaciones en tu zona</a></li>
            </ol>
            <li><a href="#tip4">¿Que otras cosas puedo hacer?</a></li>
            <ol>
              <li><a href="#tip4_1">Cuidado de animales en situaciones de emergencia</a></li>
              <ol>
                <li><a href="#tip4_1_1">Primeros auxilios basicos</a></li>
              </ol>
              <li><a href="#tip4_2">Otras herramientas</a></li>
              <li><a href="#tip4_3">Consejos para la prevencion de perdidas</a></li>
              <ol>
                <li><a href="#tip4_3_1">Uso de placas de identificacion</a></li>
                <li><a href="#tip4_3_2">Entrenamiento basico</a></li>
                <li><a href="#tip4_3_3">Manten un checklist de emergencias</a></li>
              </ol>
            </ol>
          </ol>
        </section>
        <section>
          <h2 id='tip1'>¿Qué hacer si encontré un animal perdido?</h2>
          <p>Si encontraste un animal perdido y no sabes que hacer acá encontrarás una guia de apoyo</p>
          <ul>
            <li>
              <h3 id='tip1_1'>Primera interacción</h3>
              <p>Acércate con calma, sin movimientos bruscos, para no asustarlo. Revisa si el animal lleva un collar con placa de identificación; esto puede brindarte información clave para localizar a sus dueños</p>
            </li>
            <li>
              <h3 id='tip1_2'>Observa el estado del animal</h3>
              <p>Si parece herido o muestra señales de malestar, intenta buscar ayuda veterinaria, tu ayuda y atención marcarán la diferencia para que el animal pueda encuentrar un hogar seguro o regrese con sus dueños</p>
            </li>
            <li id='tip1_3'>
              <h3>Registrarlo como encontrado en Huellitas A Casa</h3>
              <p>Aca insertar un instructivo de pasos para registrar un animal perdido</p>
            </li>
          </ul>
        </section>
        <section id='tip2'>
          <h2 id='tip2'>¿Que hacer si perdi a mi mascota?</h2>
          <p>Si perdiste a tu mascota y no sabes que acciones puedes tomar para reencontrarte con tu pelidito aca encontrarás una guia con pasos para facilitar su busqueda</p>
          <ul>
            <li id='tip2_1'>
              <h3>Busqueda de tu mascota</h3>
              <p>Comienza con una búsqueda rápida en el lugar de la perdida: llama a tu mascota y pregunta a los residentes de la zona si la han visto. Si tu mascota tiende a visitar lugares específicos, como parques o casas de amigos, revisa esas zonas primero</p>
            </li>
            <li id='tip2_2'>
              <h3>Registra tu mascota como perdida en Huellitas A Casa</h3>
              <p>Para difundir la búsqueda, crea una publicación en la app. Incluye fotos recientes de tu mascota y una descripción clara con detalles como color, tamaño, raza, y cualquier marca distintiva que pueda facilitar su identificación. Además, especifica el lugar donde fue vista por última vez y añade tus datos de contacto.</p>
            </li>
          </ul>
        </section>
        <section id='tip3'>
          <h2>¿Que hacer si quiero contactar una fundación de animales?</h2>
          <p>Si necesitas ayuda de una fundación, nuestra app facilita la búsqueda de fundaciones en tu zona. Utiliza el filtro de zona para encontrar organizaciones cercanas.</p>
          <ul>
            <li id='tip3_1'>
              <h3>Busca organizaciones en tu zona</h3>
              <p>Instructivo para utilizar la seccion de fundaciones</p>
            </li>
          </ul>
        </section>
        <section id='tip4'>
          <h2>¿Que otras cosas puedo hacer?</h2>
          <p>Si ya realizaste todos los pasos anteriores o requieres de apoyo adicional, aca encontrarás una serie de acciones que te podrian ayudar</p>
          <ul>
            <li id='tip4_1'>
              <h3>Cuidado de animales en situaciones de emergencia</h3>
              <p>Cuidar de un animal en una situación de emergencia puede ser desafiante, pero algunos pasos básicos pueden ayudarte a mantenerlo seguro hasta que recibas ayuda profesional. Si decides llevarlo temporalmente a casa, asegúrate de tener agua fresca y algo de comida para ofrecerle. Dale espacio, ya que puede sentirse confundido o asustado</p>
              <ul>
                <li id='tip4_1_1'>
                  <h4>Primeros auxilios basicos</h4>
                  <p>si el animal tiene alguna herida leve, limpia con cuidado el área y observa si necesita atención veterinaria. Evita tocarlo demasiado, ya que el dolor podría hacerlo reaccionar de manera agresiva. Si está asustado o nervioso, mantén la calma y evita movimientos bruscos. Un ambiente tranquilo, como una habitación sin demasiado ruido, puede ayudarle a adaptarse.</p>
                </li>
              </ul>
            </li>
            <li id='tip4_2'>
              <h3>Otras herramientas</h3>
              <p>Además de publicar en la app, muchas comunidades tienen grupos de redes sociales donde se difunden casos de animales perdidos. Publicar en estos grupos puede aumentar las probabilidades de encontrar a sus dueños, ademas de las publicaciones en línea, muchos dueños logran buenos resultados con carteles impresos en lugares clave como parques, veterinarias, y tiendas de mascotas cercanas. Algunas personas están más dispuestas a colaborar en la búsqueda si existe una recompensa. Incluye este dato en los anuncios si puedes ofrecerla</p>
            </li>
            <li id='tip4_3'>
              <h3>Consejos para la prevencion de perdidas</h3>
              <p>Prevenir la pérdida de una mascota es posible con algunos cuidados y preparativos sencillos</p>
              <ul>
                <li id='tip4_3_1'>
                  <h4>Uso de placas de identificación</h4>
                  <p> Lo primero es asegurarte de que tu mascota siempre lleve una placa de identificación con tus datos de contacto. También considera el uso de un microchip, ya que muchas clínicas y fundaciones pueden escanearlo para recuperar la información del dueño</p>
                </li>
                <li id='tip4_3_2'>
                  <h4>Entrenamiento basico</h4>
                  <p>ayuda a tu mascota a reconocer su nombre y responde cuando la llames. Este entrenamiento es esencial para que pueda regresar a casa si se extravía, ademas, asegúrate de que no pueda salir solo, ya que algunos animales, por curiosidad, pueden escapar en un momento de distracción.</p>
                </li>
                <li id='tip4_3_3'>
                  <h4>Manten un checklist de emergencias</h4>
                  <p>conserva fotos recientes y actualizadas de tu mascota, además de tener un pequeño kit de primeros auxilios para cualquier eventualidad</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    <Footer/>
  </div>;
}

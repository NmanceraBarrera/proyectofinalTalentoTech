import React, { useEffect, useState } from "react";
import axios from "axios"; 
import styles from "./perdidos.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import Cards from "../utils/Cards";
import Swal from "sweetalert2";


export default function Perdidos() {
  const { isAuthenticated } = useAuth();
  const [perdidos, setPerdidos] = useState([]);
  const [breed, setBreed] = useState("");
  const [city, setCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(4); 

  const [availableBreeds, setAvailableBreeds] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    const fetchPerdidos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/perdidos");
        const data = response.data.body;
        setPerdidos(data);

        const breeds = [...new Set(data.map((item) => item.breed))];
        const cities = [...new Set(data.map((item) => item.city))];
        setAvailableBreeds(breeds);
        setAvailableCities(cities);
      } catch (error) {
        console.error("Error al obtener los perdidos:", error);
      }
    };

    fetchPerdidos();
  }, []);

  const filteredPerdidos = perdidos.filter((item) => {
    return (
      (breed ? item.breed === breed : true) &&
      (city ? item.city === city : true)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPerdidos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = () => {
    Swal.fire({
      title: "Alerta",
      text: "Debes registrarte e iniciar sesión para poder publicar",
      icon: "info",
    });
  };

  return (
    <div>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <section className={styles.section_1}>
        <div className={styles.banner}>
          <div className={styles.informacion_1}>
            <h1>¿Perdiste a tu mascota?</h1>
            <h3>¿Qué hacer?</h3>
            <p>
              Accede a la Sección de "Mascotas Encontradas": Aquí puedes ver una
              lista de animales que han sido reportados por otros usuarios como
              encontrados en tu zona.
            </p>
            <Link to="/encontrados">
              <button className={styles.botones}>Encontrados</button>
            </Link>
          </div>

          <div className={styles.img}>
            <img
              src="https://images.pexels.com/photos/28683174/pexels-photo-28683174/free-photo-of-retrato-de-un-labrador-retriever-feliz-en-tunez.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Perro"
            />
          </div>
        </div>

        <div className={styles.container_tarjetas}>
          <div className={styles.tarjeta}>
            <p>
              Mantener la calma y tomar medidas inmediatas, si deseas saber más
              sobre control de emociones en situaciones similares te dejamos
              una, guía rápida justo aquí abajo.
            </p>
            <Link to="/informacion">
              <button className={styles.botones}>¿Qué hacer?</button>
            </Link>
          </div>

          <div className={styles.tarjeta}>
            <p>
              Si no encuentras a tu mascota perdida en la sección de
              "Encontrados", es hora de publicar un anuncio.
            </p>
            {!isAuthenticated ? (
              <button className={styles.botones} onClick={openModal}>Publicar</button>
            ) : (
              <Link to="/formperdidos">
                <button className={styles.botones}>Publicar</button>
              </Link>
            )}
          </div>

          <div className={styles.tarjeta}>
            <p>
              Si no puedes cuidar de este(a), puedes comunicarte con alguna de
              las fundaciones inscritas ¡a un solo click!..
            </p>
            <Link to="/fundaciones">
              <button className={styles.botones}>comunícate</button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section_2}>
        <h3>
          Acá encontrarás todas las mascotas que se han agregado como
          perdidos, recuerda que: puedes filtrar de acuerdo a ciertas
          características.
        </h3>
      </section>

      <section className={styles.section_3}>
        <div className={styles.tarjetas_animales}>
          <div className={styles.desplegables}>
            <select onChange={(e) => setBreed(e.target.value)} value={breed}>
              <option value="">Filtrar por raza</option>
              {availableBreeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>

            <select onChange={(e) => setCity(e.target.value)} value={city}>
              <option value="">Filtrar por ciudad</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <Cards data={currentItems} />
          <div className={styles.pagination}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span> {currentPage} </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredPerdidos.length}
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

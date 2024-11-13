import React, { useEffect, useState } from "react";
import axios from "axios"; // Importar axios para hacer la consulta HTTP
import styles from "./Fundaciones.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import Cards from "../utils/Cards"; // Importamos el componente Cards que muestra las tarjetas
import Swal from "sweetalert2";

export default function Fundaciones() {
  const { isAuthenticated } = useAuth();
  const [fundaciones, setFundaciones] = useState([]); // Datos de las fundaciones
  const [breed, setBreed] = useState(""); // Estado para la raza
  const [city, setCity] = useState(""); // Estado para la ciudad
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [itemsPerPage] = useState(4); // Número de items por página
  const [availableBreeds, setAvailableBreeds] = useState([]); // Razas disponibles
  const [availableCities, setAvailableCities] = useState([]); // Ciudades disponibles

  // Realizar la consulta a la API al montar el componente
  useEffect(() => {
    const fetchFundaciones = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/fundaciones"
        ); // URL de tu API de fundaciones
        const data = response.data.body;
        setFundaciones(data);

        // Extraer las razas y ciudades disponibles
        const breeds = [...new Set(data.map((item) => item.breed))];
        const cities = [...new Set(data.map((item) => item.city))];
        setAvailableBreeds(breeds);
        setAvailableCities(cities);
      } catch (error) {
        console.error("Error al obtener las fundaciones:", error);
      }
    };

    fetchFundaciones();
  }, []);

  // Filtrar los datos según los filtros seleccionados
  const filteredFundaciones = fundaciones.filter((item) => {
    return (
      (breed ? item.breed === breed : true) &&
      (city ? item.city === city : true)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFundaciones.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Función para abrir el modal de alerta cuando no hay sesión iniciada
  const openModal = () => {
    Swal.fire({
      title: "Alerta",
      text: "Debes registrarte e iniciar sesión para poder publicar",
      icon: "info",
    });
  };

  return (
    <div className={styles.containerFundaciones}>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}
      <main className={styles.containerMain}>
        <section className={styles.containerMain2}>
          <img
            src="https://is2.sosvox.net/petitions/b/5b/5b154b71539a0590357ced776270e07b.jpg"
            alt="Fundaciones"
          />
          <div>
            <h1>
              Quieres contactarte con alguna fundación cerca de ti para adoptar
              o apoyarla
            </h1>
            <p>
              Acá encontrarás todas las fundaciones que han sido agregadas,
              recuerda que puedes filtrar de acuerdo a tu zona de interés.
            </p>
            <p>También puedes agregar tu organización en esta sección.</p>
            {!isAuthenticated ? (
              <button onClick={openModal}>Registrar</button>
            ) : (
              <Link to="/foundationsForm">
                <button>Registrar</button>
              </Link>
            )}
          </div>
        </section>

        <section className={styles.section_2}>
         <h2 className={styles.title}>Acá encontrarás todas las fundaciones que se han agregado, puedes filtrar por ciudades y nombre:</h2>
        </section>

        <section className={styles.section_3}>
        <div className={styles.tarjetas_animales}>
        <div className={styles.barrabusqueda}>
            <div className={styles.contenedorbarrabusqueda}>
              <input
                type="text"
                name="busqueda"
                id="busqueda"
                placeholder="Buscar"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <defs>
                  <mask id="IconifyId192f9c235299a8f4b1">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <path
                        fill="#555"
                        d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
                      />
                      <path
                        stroke-linecap="round"
                        d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                      />
                    </g>
                  </mask>
                </defs>
                <path
                  fill="#eca883"
                  d="M0 0h48v48H0z"
                  mask="url(#IconifyId192f9c235299a8f4b1)"
                />
              </svg>
            </div>
          </div>
          
            <div className={styles.desplegables}>
              <div className={styles.tipo}>
                <select onChange={(e) => setCity(e.target.value)} value={city}>
                  <option value="">Ciudad</option>
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

            </div>
            {/* Mostrar las tarjetas filtradas y paginadas */}
            <Cards data={currentItems} />

            {/* Paginación */}
            <div className={styles.pagination}>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <span>{currentPage}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage * itemsPerPage >= filteredFundaciones.length
                }
              >
                Siguiente
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

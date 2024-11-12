import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Encontrados.module.css";
import Navbar from "../navbar/Navbar";
import ModalScreen from "../utils/Modal";
import { useAuth } from "../../context/authContext";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Cards from "../utils/Cards";

export default function Encontrados() {
  const { isAuthenticated } = useAuth();
  const [encontrados, setEncontrados] = useState([]); // Datos de las mascotas encontradas
  const [breed, setBreed] = useState(""); // Estado para la raza
  const [city, setCity] = useState(""); // Estado para la ciudad
  const [search, setSearch] = useState(""); // Estado para el texto de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [itemsPerPage] = useState(4); // Número de items por página

  // Filtros disponibles (esto se puede mejorar extrayéndolos de los datos si quieres)
  const [availableBreeds, setAvailableBreeds] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  // Realizar la consulta a la API al montar el componente
  useEffect(() => {
    const fetchEncontrados = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/encontrados"
        ); // URL de tu API
        const data = response.data.body;
        setEncontrados(data);

        // Extraer las razas y ciudades disponibles
        const breeds = [...new Set(data.map((item) => item.breed))];
        const cities = [...new Set(data.map((item) => item.city))];
        setAvailableBreeds(breeds);
        setAvailableCities(cities);
      } catch (error) {
        console.error("Error al obtener los encontrados:", error);
      }
    };

    fetchEncontrados();
  }, []);

  // Filtrar los datos según los filtros seleccionados
  const filteredEncontrados = encontrados.filter((item) => {
    const matchesBreed = breed ? item.breed === breed : true;
    const matchesCity = city ? item.city === city : true;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesBreed && matchesCity && matchesSearch;
  });

  // Paginar los datos filtrados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEncontrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      {!isAuthenticated && <ModalScreen />}

      {/* Sección 1 */}
      <section className={styles.section1}>
        <div className={styles.banner}>
          <div className={styles.info}>
            <h1>
              <span>¿Perdiste tu mascota?</span> <h3>¿Qué hacer?</h3>
            </h1>
            <p>
              Accede a la Sección de "Perdidos": Aquí puedes ver una lista de
              animales que han sido reportados por otros usuarios como perdidos
              en tu zona.
            </p>
            <Link to="/perdidos">
              <button className={styles.botones}>Perdidos</button>
            </Link>
          </div>
          <div className={styles.img1}>
            <img
              src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="cat"
            />
          </div>
        </div>
                {/* Tarjetas*/}
                <div className={styles.container}>
          {/* Card1 */}
          <div className={styles.cards}>
            <p>
            Mantener la calma y tomar medidas inmediatas, si deseas saber más
            sobre control de emociones en situaciones similares te dejamos una
            guía rápida justo aquí abajo
            </p>
            <Link to='/informacion'><button className={styles.botones}>¿Qué hacer?</button></Link>
          </div>
          {/* Card2 */}
          <div className={styles.cards}>
            <p>
              Si has encontrado a una mascota, registra el caso ingresando información al formulario de "encontrados"
            </p>
            <Link to='/formencontrados'><button className={styles.botones}>Publicar</button></Link>
          </div>
          {/* Card3 */}
          <div className={styles.cards}>
            <p>
              Si no puedes cuidar de tu peludo, puedes comunicarte con alguna de
              las fundaciones inscritas, ¡a un solo click!
            </p>
            <Link to='/fundaciones'><button className={styles.botones}>Comunícate</button></Link>
          </div>
        </div>

      </section>

      {/* Sección 2: Buscador */}
      <section className={styles.section2}>
        <div className={styles.title2}>
          <h2>
            Acá encontrarás todas las mascotas que se han agregado como
            encontradas, recuerda que puedes filtrar de acuerdo a ciertas
            características:
          </h2>
        </div>

        <div className={styles.barrabusqueda}>
          <div className={styles.contenedorbarrabusqueda}>
            <input
              type="text"
              name="busqueda"
              id="busqueda"
              placeholder="Buscar por nombre"
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Agregar filtro de búsqueda
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

        {/* Selectores de filtros */}
        <div className={styles.selectores}>
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
      </section>

      {/* Sección 3: Tarjetas de los encontrados */}
      <section className={styles.section_3}>
      <div className={styles.tarjetas_animales}>
        <Cards data={currentItems} />

        {/* Paginado */}
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
            disabled={currentPage * itemsPerPage >= filteredEncontrados.length}
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

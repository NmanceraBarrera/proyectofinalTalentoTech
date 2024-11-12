import React, { useState } from "react";
import { useAuth } from "../../context/authContext"; // Usamos el contexto de autenticación
import axios from "axios";
import styles from "./EncontradosForm.module.css";

export default function EncontradosForm() {
  const CLOUD_NAME = "huellitas1246";
  const cities = [
    { nombre: "" },
    { nombre: "Barranquilla" },
    { nombre: "Bogotá" },
    { nombre: "Bucaramanga" },
    { nombre: "Cali" },
    { nombre: "Cartagena" },
    { nombre: "Cúcuta" },
    { nombre: "Manizales" },
    { nombre: "Medellín" },
    { nombre: "Pereira" },
    { nombre: "Santa Marta" },
  ];

  const { user } = useAuth(); // Usamos el contexto para obtener el usuario autenticado

  const [breedSelect, setBreedSelect] = useState("perro");
  const [genreSelect, setGenreSelect] = useState("macho");

  const [formData, setFormData] = useState({
    name: "",
    found_date: "", // Cambio de 'date' a 'found_date'
    breed: breedSelect,
    city: "",
    place: "",
    color_1: "",
    color_2: "",
    gender: genreSelect,
    photo: "",
    contact_phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBreedSelect = (event) => {
    setBreedSelect(event.target.value);
    setFormData({ ...formData, breed: event.target.value });
  };

  const handleGenreSelect = (event) => {
    setGenreSelect(event.target.value);
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleCitySelect = (event) => {
    setFormData({ ...formData, city: event.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validación del tipo de archivo
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecciona un archivo de imagen");
        return;
      }

      const formDataImage = new FormData();
      formDataImage.append("file", file);
      formDataImage.append("upload_preset", "huellitas_a_casa");
      formDataImage.append("cloud_name", CLOUD_NAME);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formDataImage
        );
        console.log("Imagen subida correctamente:", response.data);
        const imageUrl = response.data.secure_url;
        setFormData({
          ...formData,
          photo: imageUrl,
        });
      } catch (error) {
        console.error(
          "Error al subir la imagen a Cloudinary:",
          error.response?.data || error.message
        );
        alert("Error al subir la imagen.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Debes estar logueado para registrar el reporte.");
      return;
    }

    const payload = {
      ...formData,
      userId: user.id, // Incluimos el id_user del usuario autenticado
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/encontrados",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Datos guardados:", response.data);
      alert("Formulario enviado correctamente.");

      setFormData({
        name: "",
        found_date: "", // Reiniciar 'found_date'
        breed: "perro",
        city: "",
        place: "",
        color_1: "",
        color_2: "",
        gender: "macho",
        photo: null,
        contact_phone: "",
        description: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <div className={styles.containerEcontradosForm}>
      <main className={styles.containerMain}>
        <section className={styles.containerForm}>
          <form onSubmit={handleSubmit}>
            <h2>Registra el peludo que has encontrado:</h2>

            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="found_date">Fecha de Encuentro: </label>
            <input
              type="date"
              id="found_date"
              name="found_date"
              value={formData.found_date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city">Ciudad: </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleCitySelect}
            >
              {cities.map((city) => (
                <option key={city.nombre} value={city.nombre}>
                  {city.nombre}
                </option>
              ))}
            </select>

            <label htmlFor="place">Ubicación: </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="color_1">Color 1: </label>
            <input
              type="text"
              id="color_1"
              name="color_1"
              value={formData.color_1}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="color_2">Color 2: </label>
            <input
              type="text"
              id="color_2"
              name="color_2"
              value={formData.color_2}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="breed">Raza: </label>
            <select
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleBreedSelect}
            >
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
            </select>

            <label htmlFor="gender">Género: </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleGenreSelect}
            >
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>

            <label htmlFor="photo">Foto: </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageChange}
              accept="image/*"
            />

            <label htmlFor="contact_phone">Teléfono de Contacto: </label>
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="description">Descripción: </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              cols={50}
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
        </section>

        <section className={styles.containerPreview}>
          <div className={styles.containerPhoto}>
            <h2>Visualización:</h2>
            {formData.photo && (
              <div className={styles.photoPreview}>
                <img src={formData.photo} alt="Foto: " />
              </div>
            )}
          </div>
          <div>
            <p>
              <strong>Nombre:</strong> {formData.name}
            </p>
            <p>
              <strong>Fecha de Encuentro:</strong> {formData.found_date}
            </p>
            <p>
              <strong>Ciudad:</strong> {formData.city}
            </p>
            <p>
              <strong>Dirección:</strong> {formData.place}
            </p>
            <p>
              <strong>Color 1:</strong> {formData.color_1}
            </p>
            <p>
              <strong>Color 2:</strong> {formData.color_2}
            </p>
            <p>
              <strong>Raza:</strong> {formData.breed}
            </p>
            <p>
              <strong>Género:</strong> {formData.gender}
            </p>
            <p>
              <strong>Descripción:</strong> {formData.description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

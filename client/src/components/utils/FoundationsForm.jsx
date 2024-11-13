import React, { useState } from "react";
import styles from "./FoundationsForm.module.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/authContext";

export default function FoundationsForm() {
  const CLOUD_NAME = "huellitas1246"; // Cloudinary name
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
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    photo: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      userId: user.id,
    };

    // Validación de datos del payload
    console.log("Datos que se están enviando:", payload);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/fundaciones",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Datos guardados:", response.data);
      alert("Formulario enviado correctamente.");

      // Limpiar el formulario
      setFormData({
        name: "",
        city: "",
        address: "",
        photo: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <div className={styles.containerFoundationsForm}>
      <main className={styles.containerMain}>
        <section className={styles.containerForm}>
          <form onSubmit={handleSubmit}>
            <h2>Registrar una fundación</h2>

            <label htmlFor="name">Nombre de la fundación</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city">Ciudad</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleCitySelect}
              required
            >
              {cities.map((city, index) => (
                <option key={index} value={city.nombre}>
                  {city.nombre || "Selecciona una ciudad"}
                </option>
              ))}
            </select>

            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="photo">Logo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageChange}
              accept="image/*"
            />

            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              cols="50"
            />

            <button className={styles.boton} type="submit">
              Enviar
            </button>
            <Link to="/fundaciones">
              <button className={styles.boton}>Ir a fundaciones</button>
            </Link>
          </form>
        </section>

        <section className={styles.containerPreview}>
          <h2>Previsualización</h2>
          <div className={styles.previewImage}>
            {formData.photo && (
              <img src={formData.photo} alt="Logo de la fundación" />
            )}
          </div>

          <div className={styles.previewInfo}>
            <p>
              <strong>Nombre:</strong> {formData.name}
            </p>
            <p>
              <strong>Ciudad:</strong> {formData.city}
            </p>
            <p>
              <strong>Dirección:</strong> {formData.address}
            </p>
            <p>
              <strong>Teléfono:</strong> {formData.phone}
            </p>
            <p>
              <strong>Descripción:</strong> {formData.description}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

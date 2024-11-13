import React, { useState } from 'react'; 
import styles from './FoundationsForm.module.css';
import Footer from '../footer/Footer'; 

export default function FoundationsForm() {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        address: '',
        photo: null, 
        phone: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    photo: reader.result,
                });
            };
            reader.readAsDataURL(file); 
        }
    };

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
        { nombre: "Santa Marta" }
    ];

    return (
        <div className={styles.containerFoundationsForm}>
            <main className={styles.containerMain}>
                <section className={styles.containerForm}>
                    <form>
                        <h2>Registrar una fundacion</h2>
                        <label htmlFor="name">Nombre de la fundacion</label>
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
                            onChange={handleInputChange}
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

                        <label htmlFor="phone">Telefono</label>
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
                        />
                    </form>
                </section>

                <section className={styles.containerPreview}>
                    <div>
                        <h2>Visualización</h2>
                        {formData.photo && (
                            <div className={styles.photoPreview}>
                                <img src={formData.photo} alt="Logo de la Fundación" />
                            </div>
                        )}
                    </div>
                    <div>
                        <p><strong>Nombre:</strong> {formData.name}</p>
                        <p><strong>Ciudad:</strong> {formData.city}</p>
                        <p><strong>Dirección:</strong> {formData.address}</p>
                        <p><strong>Telefono:</strong> {formData.phone}</p>
                        <p><strong>Descripción:</strong> {formData.description}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

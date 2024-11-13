import React, { useState } from 'react';
import styles from './EncontradosForm.module.css';
import Footer from '../footer/Footer'; 


export default function EncontradosForm() {
    const cities =[
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
        ]
    
        const [breedSelect, setBreedSelect] = useState('perro');
        const [genreSelect, setGenreSelect] = useState('macho');
        const [citySelect, setCitySelect] = useState('') 
    
        const [formData, setFormData] = useState({
            name: '',
            date:'',
            city: citySelect,
            address: '',
            color1: '',
            color2: '',
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
    
        const handleBreedSelect = (event) => {
          setBreedSelect(event.target.value);
        };
      
        const handleGenreSelect = (event) => {
          setGenreSelect(event.target.value);
        };
    
        const handleCitySelect = (event) => {
          setCitySelect(event.target.value);
          console.log(citySelect)
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
      return (
        <div className={styles.containerEcontradosForm}>
            <main className={styles.containerMain}>
            <section className={styles.containerForm}>
                <form>
                    <h2>Registra el peludo que has encontrado:</h2>
      
                    <label htmlFor="name">Nombre: </label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleInputChange}
                        required/>
    
                    <label htmlFor="date">Fecha: </label>
                    <input 
                        type="date" 
                        id='date' 
                        name='date'
                        value={formData.date} 
                        onChange={handleInputChange} 
                        required/>
                    
                    <label htmlFor="name">Ciudad: </label>
                    <select id="city" name="city" onChange={handleCitySelect} value={citySelect}>
                        {cities.map(city => (<option key={city.nombre } value={city.nombre}>
                            {
                                city.nombre
                            }</option>))}
                        {/* <option value="" disabled selected>
                            Elige la ciudad
                        </option>
                        <option value="opcion2">Bogotá</option>
                        <option value="opcion3">Medellín</option> */}
                    </select>
    
                    <label htmlFor="address">Ubicación: </label>
                    <input 
                        type="text" 
                        id='address' 
                        name='address'
                        value={formData.address} 
                        onChange={handleInputChange}
                        required/>
    
                    <label htmlFor="color1">Color 1: </label>
                        <input 
                        type="text" 
                        id='color1' 
                        name='color1' 
                        value={formData.color1} 
                        onChange={handleInputChange}
                        required/>
    
                    <label htmlFor="color2">Color 2: </label>
                    <input 
                    type="text" 
                    id='color2' 
                    name='color2' 
                    value={formData.color2} 
                    onChange={handleInputChange}
                    required/>
    
                    <label htmlFor="breed">Raza: </label>
                    <select 
                        id="breed" 
                        name="breed"                 
                        value={breedSelect} 
                        onChange={handleBreedSelect}>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                    </select>
    
                    <label htmlFor="genre">Género: </label>
                    <select 
                        id="genre"
                        name="genre" 
                        value={genreSelect} 
                        onChange={handleGenreSelect}>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </select>
    
                    <label htmlFor="photo">Foto: </label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handleImageChange} imágenes
                            accept="image/*" />
    
                    <label htmlFor="phone">Teléfono de contacto: </label>
                    <input 
                        type="tel" 
                        id='phone' 
                        name='phone'
                        value={formData.phone} 
                        onChange={handleInputChange}
                        required/>
    
                    <label htmlFor="description">Descripción: </label>
                    <textarea 
                        name="description" 
                        id="description" 
                        rows={4} 
                        cols={50}
                        value={formData.description}
                        onChange={handleInputChange}
                        required>
                    </textarea>
    
                    <button type="submit" className={styles.submitButton}>Enviar</button>
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
                    <p><strong>Nombre:</strong> {formData.name}</p>
                    <p><strong>Fecha:</strong> {formData.date}</p>
                    <p><strong>Ciudad:</strong> {citySelect}</p>
                    <p><strong>Dirección:</strong> {formData.address}</p>
                    <p><strong>Color1:</strong> {formData.color1}</p>
                    <p><strong>Color2:</strong> {formData.color2}</p>
                    <p><strong>Raza:</strong> {breedSelect}</p>
                    <p><strong>Genero:</strong> {genreSelect}</p>
                    <p><strong>Descripción:</strong> {formData.description}</p>
                </div>
            </section>
            </main>
        </div>
      )
    }

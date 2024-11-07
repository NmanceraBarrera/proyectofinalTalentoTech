import React, { useState } from 'react';
import styles from './EncontradosForm.module.css';
import Navbar from '../navbar/Navbar';
import ModalScreen from '../utils/Modal';

export default function EncontradosForm() {
    const [nombre, setNombre] = useState('');
    const update_name = (e) => {
        setNombre(e.target.value);
    } 
  return (
    <div>
        <Navbar/>
        <div className={styles.container}>
        <div className={styles.formulario}>
            <h2>Formulario de Mascota Encontrada</h2>
            <p>Completa los campos con la información del peludito que encontraste:</p>
            <form>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id='nombre' name='nombre' required onChange={update_name}/>

                <label htmlFor="fecha">Fecha: </label>
                <input type="date" id='fecha' name='fecha' required/>

                <label htmlFor="ciudad">Ciudad: </label>
                <input type="text" id='ciudad' name='ciudad' required/>

                <label htmlFor="ubicacion">Ubicación: </label>
                <input type="text" id='ubicacion' name='ubicacion' required/>

                <label htmlFor="color1">Color 1: </label>
                <input type="text" id='color1' name='color1' required/>

                <label htmlFor="color2">Color 2: </label>
                <input type="text" id='color2' name='color2' required/>

                <label htmlFor="raza">Raza: </label>
                <select name="raza" id="raza">
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                </select>

                <label htmlFor="genero">Género: </label>
                <select name="genero" id="genero">
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                </select>

                <label htmlFor="foto">Foto: </label>
                <input type="file" id='foto' name='foto' accept='image/*' required/>

                <label htmlFor="telefono">Teléfono de contacto: </label>
                <input type="tel" id='telefono' name='telefono' required/>

                <label htmlFor="descripcion">Descripción: </label>
                <textarea name="descripcion" id="descripcion" rows={4} cols={50} required></textarea>
            </form>
        </div>
        <div className={styles.preview}>
            <h2>Información</h2>
            <h1>{nombre}</h1>
        </div>
        </div>
    </div>
  )
}

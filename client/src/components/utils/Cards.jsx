import React from "react";
import Card from "./Card"; // Importa el componente Card
import styles from "./Cards.module.css";

export default function Cards({ data }) {
  console.log(data, "data"); // Verifica que los datos están llegando correctamente

  return (
    <div className={styles.cardsContainer}>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            image={item.photo} // Asegúrate de que la propiedad correcta esté aquí
            name={item.name}
            city={item.city}
            breed={item.breed}
            gender={item.gender}
          />
        ))
      ) : (
        <p>No hay mascotas perdidas disponibles.</p> // Mensaje si no hay datos
      )}
    </div>
  );
}

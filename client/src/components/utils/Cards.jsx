import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ data }) {
  console.log(data, "data"); 

  return (
    <div className={styles.cardsContainer}>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            image={item.photo}
            name={item.name}
            city={item.city}
            breed={item.breed}
            gender={item.gender}
          />
        ))
      ) : (
        <p>No hay datos para mostrar</p>
      )}
    </div>
  );
}

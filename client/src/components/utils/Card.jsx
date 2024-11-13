import styles from "./Card.module.css";

export default function Card(props) {
  console.log(props, "props");

  const { image, name, city, breed, gender } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imagen}>
        <img
          className={styles.img}
          src={image || "https://via.placeholder.com/150"}
          alt={name || "Nombre no disponible"}
        />
      </div>
      <div className={styles.info}>
        {city && (
          <div className={styles.cityTag}>
            <h5>{city}</h5>
          </div>
        )}

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "10px",
          }}
        >
          <h4>Nombre : {name || "Nombre no disponible"}</h4>
          <h5>Genero : {gender || "Género no disponible"}</h5>
        </div>
      </div>
    </div>
  );
}

import styles from "./Card.module.css";

export default function Card(props) {
  console.log(props, "props");
  return (
    <div className={styles.card}>
      <div className={styles.imagen}>
        <img className={styles.img} src={props.image} alt={props.name} />
      </div>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <h4>{props.city}</h4>
      </div>
    </div>
  );
}

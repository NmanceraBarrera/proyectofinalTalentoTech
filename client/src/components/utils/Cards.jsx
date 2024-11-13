import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ data }) {
  console.log(data);

  return (
    <div className={styles.cardsContainer}>
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          city={item.city}
        />
      ))}
    </div>
  );
}

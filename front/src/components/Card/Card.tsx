import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div id={styles.card}>
      <h2>Overview</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
        placeat eaque excepturi consequuntur recusandae tempore officiis eius,
        ad, voluptatum eligendi eum blanditiis et provident consectetur, totam
        voluptatibus vero est!
      </p>
    </div>
  );
};

export default Card;
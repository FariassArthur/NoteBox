import { styled } from "styled-components";

export const CardContainner = styled.main`
  padding: 1.5rem;
  box-shadow: 0 0 25px var(--c-gold);
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;

const Card = () => {
  return (
    <CardContainner>
      <h2>Overview</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
        placeat eaque excepturi consequuntur recusandae tempore officiis eius,
        ad, voluptatum eligendi eum blanditiis et provident consectetur, totam
        voluptatibus vero est!
      </p>
    </CardContainner>
  );
};

export default Card;

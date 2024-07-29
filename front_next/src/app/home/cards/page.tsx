"use client";

//css
import styled from "styled-components";

//components
import Card from "../../../components/Card/Card";
import Home from "../page";

const CardsContainner = styled.main`
  z-index: 2;
  margin-top: -2.1rem;

  max-width: 60%;
`;

const Cards = () => {
  return (
    <Home>
      <CardsContainner>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainner>
    </Home>
  );
};

export default Cards;

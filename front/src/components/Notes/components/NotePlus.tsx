import React from "react";

//styles
import styled from "styled-components";

//icons
import { FiPlus } from "react-icons/fi";

type Props = {};

const NotePlus = (props: Props) => {
  return (
    <Main>
      <FiPlus />
    </Main>
  );
};

export default NotePlus;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  border: 0.2px outset var(--aside-border);
  padding: 0.5rem;
  cursor: pointer;

  width: 100%;

  box-sizing: border-box;
  border-radius: var(--border);

  transition: var(--transion-duration) ease-in-out;

  &:hover {
    background-color: var(--aside-background);
  }
`;

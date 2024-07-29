"use client";
import styled from "styled-components";
import { useState } from "react";
import { BsCheck, BsCheckAll, BsXCircle, BsPencilSquare } from "react-icons/bs";

// Definição do container do modal com hover
const ToDoModalContainer = styled.main`
  border-radius: 15px;
  padding: 1rem;
  width: 30vw;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 20px var(--black);

  &:hover {
    box-shadow: 10px 0 20px var(--black); /* Altera a sombra quando em hover */
  }
`;

// Definição da seção interna do modal
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  i {
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #bbb; /* Altera a cor do ícone quando em hover */
    }

    &.edit:hover {
      color: blue;
    }

    &.check:hover {
      color: green;
    }

    &.delete:hover {
      color: red;
    }

    &.edit:active, &.check:active, &.delete:active {
      transition: 0.3s ease-in-out;
      margin-right: 3rem;
    }
  }
`;

type Props = {};

const ToDoModal = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <ToDoModalContainer>
      <p>Texto teste</p>
      <Section>
        <i onClick={handleChecked} className="check">
          {checked ? <BsCheckAll /> : <BsCheck />}
        </i>
        <i className="edit">
          <BsPencilSquare />
        </i>
        <i className="delete">
          <BsXCircle />
        </i>
      </Section>
    </ToDoModalContainer>
  );
};

export default ToDoModal;

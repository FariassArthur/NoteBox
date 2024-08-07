import React from "react";

//styles
import styled from "styled-components";

//styled components
import { Icon, Bar } from "../assets/StyledAssets";

//icons
import { FiMoreHorizontal } from "react-icons/fi";

type Props = {};

const NoteSheet = (props: Props) => {
  return (
    <Main>
      <header>
        <section>
          <p>
            <span>Get Started</span>
          </p>
        </section>

        <Icon>
          <FiMoreHorizontal />
        </Icon>
      </header>
      <Bar></Bar>
    </Main>
  );
};

export default NoteSheet;

const Main = styled.main`
  header {
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid;

  max-width: 25%;
`;

import React, { useState } from "react";

//styles
import styled from "styled-components";

//styled components
import { Icon, Bar } from "../_ui/styles/StyledAssets";

//icons
import { FiMoreHorizontal } from "react-icons/fi";

//components
import Note from "./components/Note";
import NotePlus from "./components/NotePlus";

type Props = {};

const NoteSheet = (props: Props) => {
  const [check, setCheck] = useState<boolean>(false);

  const toggleCheck = () => {
    setCheck((prevCheck) => !prevCheck);
  };

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

      <section>
        <Note
          title="Welcome to your board"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          checked={check}
          onToggleCheck={toggleCheck}
        />
        <NotePlus />
      </section>
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

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 0.5rem;
  }

  box-sizing: border-box;
  padding: 1rem;

  max-width: 25%;
`;

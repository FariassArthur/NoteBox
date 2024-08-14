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

interface Props {
  overflow: "x" | "y";
}

const NoteSheet = ({ overflow }: Props) => {
  const [check, setCheck] = useState<boolean>(false);

  const toggleCheck = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <Main $overflow={overflow}>
      <header>
          <p>
            <span>Get Started</span>
          </p>

        <Icon>
          <FiMoreHorizontal />
        </Icon>
      </header>
      <Bar />

      <section>
        <Note
          title="Welcome to your board"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          checked={check}
          onToggleCheck={toggleCheck}
        />
        <Note
          title="Welcome to your board"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          checked={check}
          onToggleCheck={toggleCheck}
        />
        <Note
          title="Welcome to your board"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          checked={check}
          onToggleCheck={toggleCheck}
        />
        <Note
          title="Welcome to your board"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          checked={check}
          onToggleCheck={toggleCheck}
        />
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

const Main = styled.main<{ $overflow: string }>`
  min-width: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 1rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; // Ajuste para distribuir os elementos

    p {
      display: flex;
      justify-content: center;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
`;


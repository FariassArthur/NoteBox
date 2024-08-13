import React from "react";

//styles
import styled from "styled-components";

//components
import NoteSheet from "../Notes/NoteSheet";

type Props = {};

const HomeMain = (props: Props) => {
  return (
    <Main>
      <NoteSheet />
      <NoteSheet />
      <NoteSheet />
      <NoteSheet />
    </Main>
  );
};

export default HomeMain;

const Main = styled.main`
  box-sizing: border-box;
  padding: 1rem;

  display: flex;
  gap: 1rem;
`;

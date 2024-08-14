import React, { useState } from "react";

//styles
import styled from "styled-components";

//components
import NoteSheet from "../Notes/NoteSheet";

type Props = {};

const HomeMain = (props: Props) => {
  const [overflow, setOverflow] = useState<"x" | "y">("x");

  return (
    <Main>
      <ContentWrapper $overflow={overflow}>
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
        <NoteSheet overflow={overflow} />
      </ContentWrapper>
    </Main>
  );
};

export default HomeMain;

const Main = styled.main`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Impede que o conteúdo do Main ultrapasse seus limites */
`;

const ContentWrapper = styled.div<{ $overflow: string }>`
  ${({ $overflow }) =>
    $overflow === "x"
      ? `
      overflow: scroll;
      flex-direction: row;
    `
      : `
      overflow: scroll;
      flex-direction: column;
    `}

  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

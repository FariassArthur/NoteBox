import React, { useState } from "react";

//styles
import styled from "styled-components";

//components
import NoteSheet from "../Notes/NoteSheet";

type Props = {};

const HomeMain = (props: Props) => {
  const [overflow, setOverflow] = useState<"x" | "y">("x");

  return (
    <Main $overflow={overflow}>
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
      <NoteSheet overflow={overflow} />
    </Main>
  );
};

export default HomeMain;

const Main = styled.main<{ $overflow: string }>`
  ${({ $overflow }) =>
    $overflow === "x"
      ? `
      overflow-x: scroll;
      flex-direction: row;
    `
      : `
      overflow-x: visible;
      flex-direction: column;
    `}

  box-sizing: border-box;
  padding: 1rem;

  display: flex;
  gap: 1rem;
`;

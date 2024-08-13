import React, { useState } from "react";

//styles
import styled from "styled-components";

//icons
import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  title: string;
  content: string;
  createdAt?: Date;
};

const Note = (props: Props) => {
  const [verticalNotes, setVerticalNotes] = useState<Boolean>(false);

  return (
    <NoteContainner verticalNotes={verticalNotes}>
      <FiCircle size={20} />
      {/* <FiCheckCircle /> */}
      <Content>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </Content>
    </NoteContainner>
  );
};

export default Note;

const NoteContainner = styled.main<{ verticalNotes: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;

  border: 1px solid;
  padding: 0.5rem;

  cursor: pointer;

  &:hover {
    background-color: var(--aside-background);
  }
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5%;

  p {
    text-align: center;
  }
`;

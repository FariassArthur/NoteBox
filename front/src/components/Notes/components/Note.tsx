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
  checked: boolean;
  onToggleCheck: () => void;
};

const Note = ({ title, content, checked, onToggleCheck }: Props) => {
  const [verticalNotes, setVerticalNotes] = useState(false);

  return (
    <NoteContainer
      $verticalNotes={verticalNotes}
      $checked={checked}
      onClick={onToggleCheck}
    >
      {checked ? <FiCheckCircle size={20} /> : <FiCircle size={20} />}
      <Content>
        <h3>{title}</h3>
        <p>{content}</p>
      </Content>
    </NoteContainer>
  );
};

export default Note;

const NoteContainer = styled.main<{
  $verticalNotes: boolean;
  $checked: boolean;
}>`
  display: ${({ $verticalNotes }) => ($verticalNotes ? "block" : "flex")};
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 100%;
  border: 0.2px outset var(--aside-border);
  padding: 0.5rem;

  cursor: pointer;
  box-sizing: border-box;

  border-radius: var(--border);

  text-decoration: ${({ $checked }) => ($checked ? "line-through" : "none")};

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

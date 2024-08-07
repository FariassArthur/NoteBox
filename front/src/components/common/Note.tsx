import React, { useState } from "react";

//styles
import styled from "styled-components";

//icons

type Props = {};

const Note = (props: Props) => {
  const [verticalNotes, setVerticalNotes] = useState<Boolean>(false);

  return (
    <NoteContainner verticalNotes={verticalNotes}>
      <h3>Welcome to your board</h3>
    </NoteContainner>
  );
};

export default Note;

const NoteContainner = styled.main<{ verticalNotes: Boolean }>``;

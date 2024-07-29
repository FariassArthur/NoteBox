"use client";

//css
import styled from "styled-components";

//import { Link } from "react-router-dom";

//component
import ToDoModal from "@/components/ToDoModal/ToDoModal";
import Home from "@/app/home/page";

const ToDoContainner = styled.main`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 100%;
`;

const ToDo = () => {
  return (
    <Home>
      <ToDoContainner>
        <ToDoModal />
        <ToDoModal />
        <ToDoModal />
        <ToDoModal />
      </ToDoContainner>
    </Home>
  );
};

export default ToDo;

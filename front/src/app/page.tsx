"use client"

//styles
import styled from "styled-components";

//components
import Aside from "../components/Aside/Aside";

const Main = styled.main`
  display: flex;

  min-height: 95vh;
  max-height: 100vh;
`

export default function Home() {
  return (
    <Main>
      <Aside></Aside>
      <h1>Home</h1>
    </Main>
  );
}

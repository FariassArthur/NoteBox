"use client";

//styles
import styled from "styled-components";

//components
import Aside from "../components/Aside/Aside";
import Header from "../components/_ui/Header";
import HomeMain from "../components/Home/HomeMain";
import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  return (
    <Main>
      <Aside />
      <section className="mainContainner">
        <Header />
        <HomeHeader />
        <HomeMain />
      </section>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  background-color: var(--background-color);

  display: flex;
  box-sizing: border-box;

  min-height: 95vh;
  max-height: 100vh;

  min-width: 95vw;
  max-width: 100vw;

  border: 1px solid;

  .mainContainner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: relative;
    padding: 1rem;
  }
`;

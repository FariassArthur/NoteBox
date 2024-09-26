"use client";
import { useState } from "react";

//styles
import styled from "styled-components";
import GlobalStyle from "../styles/globalCSS";
import ThemeProvider from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

//components
import Aside from "../components/Aside/Aside";
import Header from "../components/_ui/Header";
import HomeMain from "../components/Home/HomeMain";
import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  
  return (

    <Main>
      <GlobalStyle />
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

  overflow: hidden;

  .mainContainner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    overflow: hidden;
    padding: 1rem;
  }
`;

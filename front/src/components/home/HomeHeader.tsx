import React, { useState } from "react";

//styles
import styled from "styled-components";
import { Icon } from "../assets/StyledAssets";

//icons
import { FiCalendar, FiGrid, FiTable } from "react-icons/fi";

type Props = {};

const HomeHeader = (props: Props) => {
  const [title, setTitle] = useState<string>("What's my SERP");

  return (
    <HomeHeaderContainner>
      <header>
        <h1>{title}</h1>
        <section className="toolIcons">
          <Icon>
            <FiGrid />
          </Icon>
          <Icon>
            <FiTable />
          </Icon>
          <Icon>
            <FiCalendar />
          </Icon>
        </section>
      </header>
    </HomeHeaderContainner>
  );
};

export default HomeHeader;

const HomeHeaderContainner = styled.main`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toolIcons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1rem;
    }
  }
`;

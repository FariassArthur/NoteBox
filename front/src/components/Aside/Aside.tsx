import React from "react";

//styles
import styled from "styled-components";
//--components
import { Icon } from "../assets/StyledAssets";

//icons
import {
  FiSidebar,
  FiPlusCircle,
  FiSearch,
  FiCheckCircle,
  FiCalendar,
  FiStar,
} from "react-icons/fi";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";

const AsideContainner = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 15%;
  height: 100vh;
  padding: var(--padding);
  gap: 1rem;

  border-right: 0.2px solid var(--aside-border);
  background-color: var(--aside-background);

  .headerAside {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    color: var(--icon-color);

    transition: var(--transition-duration) ease-in-out;

    &:hover {
      color: var(--icon-colored);
      cursor: pointer;
    }
  }

  .addTask {
    color: var(--icon-colored);

    padding: 0.2rem 0 0.2rem 0.2rem;
    border-radius: 5px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    gap: 5%;

    transition: var(--transition-duration) ease-in-out;

    &:hover {
      background-color: var(--background-color);
      cursor: pointer;
    }

    &:active {
      background-color: transparent;
    }
  }

  .toolIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    gap: 5%;

    min-width: 100%;
  }
`;

const Tools = styled.p`
  min-width: 100%;
  color: var(--icon-color);

  padding: 0.2rem 0 0.2rem 0.2rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  gap: 5%;

  transition: var(--transition-duration) ease-in-out;

  i {
    color: var(--icon-colored);
  }

  span {
    display: flex;
    align-items: center;
    text-align: center;
  }

  &:hover {
    background-color: var(--background-color);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }
`;

const BookMarks = styled.section`
  color: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;

  padding: 0.2rem 0 0.2rem 0.2rem;

  &:hover {
    cursor: pointer;
  }

  .none {
    display: none;
  }

  .favorites {
    padding-left: 0.3rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;

    i {
      color: var(--icon-colored);
    }

    span {
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
`;

type Props = {};

const Aside = (props: Props) => {
  return (
    <AsideContainner>
      <section className="headerAside">
        <FiSidebar />
      </section>

      <p className="addTask">
        <FiPlusCircle />
        <span>Add task</span>
      </p>

      <section className="toolIcons">
        <Tools>
          <Icon>
            <FiSearch />
          </Icon>
          <span>Search</span>
        </Tools>
        <Tools>
          <Icon>
            <FiCheckCircle />
          </Icon>
          <span>Today</span>
        </Tools>
        <Tools>
          <Icon>
            <FiCalendar />
          </Icon>
          <span>Calendar</span>
        </Tools>
      </section>

      <BookMarks>
        <p>
          <Icon>
            <FiStar />
          </Icon>
          <span>Favorites</span>
        </p>

        <RiArrowDropRightFill size={20} />

        {/* <RiArrowDownSFill size={20} /> */}
      </BookMarks>
    </AsideContainner>
  );
};

export default Aside;

import React, { useState } from "react";

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
  FiUser,
} from "react-icons/fi";
import { RiArrowDropRightFill, RiArrowDownSFill } from "react-icons/ri";

type Props = {};

const Aside = (props: Props) => {
  const [accoutName, setAccountName] = useState<string>("Pedro Arthur");
  const [hidden, setHidden] = useState<Boolean>(true);

  return (
    <AsideContainner hidden={hidden}>
      <section className="headerAside" onClick={() => setHidden(!hidden)}>
        <FiSidebar />
      </section>

      <p className="addTask">
        <FiPlusCircle />
        <span>Add task</span>
      </p>

      <section className="toolIcons">
        <Tools hidden={hidden}>
          <Icon>
            <FiSearch />
          </Icon>
          <span>Search</span>
        </Tools>
        <Tools hidden={hidden}>
          <Icon>
            <FiCheckCircle />
          </Icon>
          <span>Today</span>
        </Tools>
        <Tools hidden={hidden}>
          <Icon>
            <FiCalendar />
          </Icon>
          <span>Calendar</span>
        </Tools>
      </section>

      <BookMarks hidden={hidden}>
        <p>
          <Icon>
            <FiStar />
          </Icon>
          <span>Favorites</span>
        </p>

        <div className="arrow">
          <RiArrowDropRightFill size={20} />

          {/* <RiArrowDownSFill size={20} /> */}
        </div>
      </BookMarks>

      <BookMarks hidden={hidden}>
        <AsidePerfil hidden={hidden}>
          <Icon>
            <FiUser />
          </Icon>

          <span>Account</span>
        </AsidePerfil>

        <div className="arrow">
          <RiArrowDropRightFill size={20} />

          {/* <RiArrowDownSFill size={20} /> */}
        </div>
      </BookMarks>

      <AsidePerfilContainner hidden={hidden}>
        <AsidePerfil hidden={hidden}>
          <Icon>
            <FiUser />
          </Icon>

          <span>{accoutName}</span>
        </AsidePerfil>
      </AsidePerfilContainner>
    </AsideContainner>
  );
};

export default Aside;

const AsideContainner = styled.main<{ hidden: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  min-width: ${({ hidden }) => (hidden ? "0px" : "15%")};
  min-height: 95vh;
  max-height: 100vh;
  padding: ${({ hidden }) => (hidden ? "1rem .2rem" : "1rem")};
  gap: ${({ hidden }) => (hidden ? "5rem" : "1rem")};

  border-right: 0.2px inset var(--aside-border);
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

    padding: ${({ hidden }) => (hidden ? "0.2rem" : "0.2rem 0 0.2rem 0.2rem")}
    border-radius: 5px;

    display: ${({ hidden }) => (hidden ? "none" : "flex")};
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

const Tools = styled.p<{ hidden: Boolean }>`
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
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
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

const BookMarks = styled.section<{ hidden: Boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  color: var(--icon-color);
  align-items: center;
  justify-content: space-between;
  min-width: 100%;

  padding: 0.2rem 0 0.2rem 0.2rem;

  &:hover {
    cursor: pointer;
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
      display: ${({ hidden }) => (hidden ? "none" : "flex")};
      align-items: center;
      text-align: center;
    }
  }
`;

const AsidePerfil = styled.div<{ hidden: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 5%;

  i {
    color: var(--icon-colored);
    border-radius: 100px;
  }

  span {
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
  }
`;

const AsidePerfilContainner = styled.section<{ hidden: Boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;

  bottom: 3px;

  transition: var(--transition-duration) ease;

  min-width: ${({ hidden }) => (hidden ? "20px" : "80%")};
  padding: 0.2rem;

  div,
  span {
    width: 100%;
  }

  &:hover {
    background-color: var(--background-color);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }
`;

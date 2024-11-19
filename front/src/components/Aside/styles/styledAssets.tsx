import styled from "styled-components";

//func
import { hexToRgba } from "@/src/extras/functions";

export const AsideContainner = styled.main<{ hidden: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  min-width: ${({ hidden }) => (hidden ? "max-content" : "15%")};
  min-height: 95vh;
  max-height: 100vh;
  padding: ${({ hidden }) => (hidden ? "1rem .2rem" : "1rem")};
  gap: ${({ hidden }) => (hidden ? "5rem" : "1rem")};

  border-right: 0.2px inset ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => hexToRgba(theme.colors.aside, 0.9)};

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

    padding: ${({ hidden }) => (hidden ? "0.2rem" : "0.2rem 0 0.2rem 0.2rem")};
    border-radius: 5px;

    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    gap: 5%;

    transition: var(--transition-duration) ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
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

export const Tools = styled.p<{ hidden: Boolean }>`
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

export const BookMarks = styled.section<{ hidden: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem 0 0.2rem 0.2rem;
  border: 1px solid;

  .containner {
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    color: var(--icon-color);
    align-items: center;
    justify-content: space-between;
    min-width: 100%;

    border: 1px solid;

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
        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        display: ${({ hidden }) => (hidden ? "none" : "flex")};
        align-items: center;
        text-align: center;
      }
    }
  }
`;

export const AsidePerfil = styled.div<{ hidden: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5%;

  i {
    color: var(--icon-colored);
    border-radius: 100px;
  }

  span {
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;

export const AsidePerfilContainner = styled.section<{ hidden: Boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  bottom: 3px;

  transition: var(--transition-duration) ease-in-out;

  min-width: ${({ hidden }) => (hidden ? "20px" : "80%")};
  padding: ${({ hidden }) => (hidden ? "0" : ".5rem")};

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

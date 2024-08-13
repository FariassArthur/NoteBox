import React from "react";

//styles
import styled from "styled-components";

//styled components
import { Icon } from "./styles/StyledAssets";

//icons
import { FiUser, FiBell, FiSettings } from "react-icons/fi";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainner>
      <p>UI Flip / Clients / What’s My SERP</p>

      <section className="iconsContainner">
        <Icon>
          <FiUser />
        </Icon>
        <Icon>
          <FiBell />
        </Icon>
        <Icon>
          <FiSettings />
        </Icon>
      </section>
    </HeaderContainner>
  );
};


export default Header;

const HeaderContainner = styled.header`
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  .iconsContainner {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

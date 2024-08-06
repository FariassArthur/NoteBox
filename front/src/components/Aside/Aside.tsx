import React from "react";

//styles
import styled from "styled-components";

//icons
import { FiSidebar } from "react-icons/fi";

const AsideContainner = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 15%;
  height: 100vh;
  padding: 1rem;

  border-right: 0.2px solid #000;
  background-color: var(--aside);

  .headerAside {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    transition: 0.2s ease-in-out;

    &:hover {
      color: #fff;
      cursor: pointer;
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
    </AsideContainner>
  );
};

export default Aside;

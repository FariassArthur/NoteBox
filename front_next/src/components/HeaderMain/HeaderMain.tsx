//css
import styled from "styled-components";

const HeaderMainContainner = styled.main`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1.5rem;
    background-color: var(--black);
    color: var(--c-gray);

    margin-top: 1px; 
    height: 10rem;

    .hFirst {
      margin-left: 1rem;
      margin-right: 5rem;
    }

  hFirst h3 {
    opacity: 80%;
  }
}
`;

const HeaderMain = () => {
  return (
    <HeaderMainContainner>
      <div className="hFirst">
        <h1>Object Name</h1>

        <h3>Subtype</h3>
      </div>

      <div>
        <h2>Introduction</h2>

        <p>Introduction about this object, whatever it might be.</p>
      </div>
    </HeaderMainContainner>
  );
};

export default HeaderMain;

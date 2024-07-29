
// Importação de styled-components
import styled from "styled-components";

// Importação de ícones
import { FaUser } from "react-icons/fa";

// Estilização do container do cabeçalho
const HeaderContainer = styled.main`
  padding: 1.5rem;
  color: var(--c-gray);
  background-color: var(--black);

  box-shadow: 25px 1px 2px var(--c-gold);

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-left: 1rem;
  }
`;

// Componente Header
const Header = () => {
  return (
    <HeaderContainer>
      <h3>Documentation</h3>

      <section className="auth">
        <FaUser />
      </section>
    </HeaderContainer>
  );
};

export default Header;

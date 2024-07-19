//css
import '../styles/Header.sass'

//icons
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div id="header">
        <h3>Documentation</h3>

        <section className='auth'>
          <FaUser />
        </section>
      </div>
    </>
  );
};

export default Header;

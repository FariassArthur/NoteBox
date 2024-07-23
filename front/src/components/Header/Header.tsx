//css
import styles from  './Header.module.scss'

//icons
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div id={styles.header}>
        <h3>Documentation</h3>

        <section className={styles.auth}>
          <FaUser />
        </section>
      </div>
    </>
  );
};

export default Header;

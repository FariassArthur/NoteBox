//css
import styles from "./Home.module.scss";

//components
import Header from "../../components/Header/Header";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Links from "../../components/Links/Links";
import Cards from "../../components/Cards/Cards";
import ToDo from "../../components/ToDo/ToDo";

//router
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//icons
import { CiSquarePlus } from "react-icons/ci";

const Home = () => {
  return (
    <div id={styles.home}>
      <Header />
      <HeaderMain />

      <section className={styles.data}>
        <Links />
        <div className={styles.plus}>
          <CiSquarePlus size={45} />
        </div>
        <Routes>
          <Route path="cards" element={<Cards />} />
          <Route path="todo" element={<ToDo />} />
        </Routes>
      </section>
    </div>
  );
};

export default Home;

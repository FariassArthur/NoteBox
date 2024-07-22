//css
import "./Home.sass";

//components
import Header from "../../components/Header/Header";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Links from "../../components/Links/Links";
import Cards from "../../components/Cards/Cards";
import ToDo from "../../components/ToDo/ToDo";

//router
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <HeaderMain />

      <section className="data">
       <Links />

       <Routes>
          <Route path="cards" element={<Cards />} />
          <Route path="todo" element={<ToDo />} />
        </Routes>
      </section>
    </div>
  );
};

export default Home;

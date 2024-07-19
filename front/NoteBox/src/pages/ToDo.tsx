//css
import "../styles/ToDo.sass";

//components
import Header from "../components/Header";
import HeaderMain from "../components/HeaderMain";
import Links from "../components/Links";
import Cards from "../components/Cards";

//import { Link } from "react-router-dom";

const ToDo = () => {
  return (
    <div id="ToDo">
      <Header />
      <HeaderMain />

      <section className="data">
       <Links />

       <Cards />
      </section>
    </div>
  );
};

export default ToDo;

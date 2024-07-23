//css
import styles from "./ToDo.module.scss";

//import { Link } from "react-router-dom";

//component
import ToDoModal from "../ToDoModal/ToDoModal";

const ToDo = () => {
  return (
    <section id={styles.ToDo}>
      <ToDoModal />
      <ToDoModal />
      <ToDoModal />
      <ToDoModal />
    </section>
  );
};

export default ToDo;

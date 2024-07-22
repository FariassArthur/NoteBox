import styles from "./ToDoModal.module.scss"

//icons
import { BsCheck } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

type Props = {}

const ToDoModal = (props: Props) => {
  return (
    <div id={styles.ToDoModal}>
        <p>Texto teste</p>
        <section>
            <i><BsCheck /></i>
            <i><BsXCircle /></i>
        </section>
    </div>
  )
}

export default ToDoModal
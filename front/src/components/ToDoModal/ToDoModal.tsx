import styles from "./ToDoModal.module.scss";

//react
import { useState } from "react";

//icons
import { BsCheck } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

type Props = {};

const ToDoModal = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    if (checked === true) {
      setChecked(false);
    } else [setChecked(true)];
  };

  return (
    <div id={styles.ToDoModal}>
      <p>Texto teste</p>
      <section>
        <i onClick={handleChecked} className={styles.check}>
          {checked ? <BsCheckAll /> : <BsCheck />}
        </i>
        <i className={styles.edit}>
          <BsPencilSquare />
        </i>
        <i className={styles.delete}>
          <BsXCircle />
        </i>
      </section>
    </div>
  );
};

export default ToDoModal;

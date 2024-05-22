import styles from "./CompleteAllButton.module.css";
import CompleteIcon from "../../assets/icons/CompleteIcon2.svg?react";
import cx from "classnames";

export function CompleteAllButton({ onClick, isListDone }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <CompleteIcon className={cx(styles.icon, { [styles.iconOnAllDone]: isListDone })} />
    </button>
  );
}

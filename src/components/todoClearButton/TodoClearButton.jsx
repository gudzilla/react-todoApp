import styles from "./TodoClearButton.module.css";
import cx from "classnames";

export function TodoClearButton({ onClearCompleted, className }) {
  return (
    <button className={cx(styles.clearCompletedButton, className)} onClick={onClearCompleted}>
      Clear Completed
    </button>
  );
}

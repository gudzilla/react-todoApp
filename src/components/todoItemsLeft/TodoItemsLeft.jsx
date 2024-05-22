import cx from "classnames";
import styles from "./TodoItemsLeft.module.css";

export function TodoItemsLeft({ undoneCounter, className }) {
  return (
    <p className={cx(className, { [styles.hasUndoneItems]: undoneCounter > 0 })}>
      {undoneCounter} items left!
    </p>
  );
}

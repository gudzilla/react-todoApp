import styles from "./TodoFooter.module.css";
import cx from "classnames";
import { TodoItemsLeft } from "../todoItemsLeft";
import { TodoFilters } from "../todoFilters";
import { TodoClearButton } from "../todoClearButton";

export function TodoFooter({ undoneCounter, onClearCompleted, todoList, filter, setFilter }) {
  return (
    <div className={styles.todoFooter}>
      <TodoItemsLeft undoneCounter={undoneCounter} className={styles.item} />
      <TodoFilters filter={filter} setFilter={setFilter} className={styles.item} />
      <TodoClearButton onClearCompleted={onClearCompleted} className={styles.item} />
    </div>
  );
}

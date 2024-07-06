import styles from "./AddTodoForm.module.css";
import { useState } from "react";

export function AddTodoForm({ onSubmit, hasItems, completeButtonNode }) {
  const [newTodoInput, setNewTodoInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value.trim().length > 1) {
      onSubmit(newTodoInput.trim());
      setNewTodoInput("");
    }
  }

  return (
    <div className={styles.form}>
      {hasItems && completeButtonNode}
      <input
        autoFocus={true}
        type="text"
        placeholder="What needs to be done?"
        className={styles.inputNewTodo}
        value={newTodoInput}
        onChange={(e) => {
          setNewTodoInput(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

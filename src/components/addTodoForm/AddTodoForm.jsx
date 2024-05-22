import styles from "./AddTodoForm.module.css";
import { useState } from "react";
import { CompleteAllButton } from "../completeAllButton";

export function AddTodoForm({ onSubmit, onAllDoneOrUndone, isListDone, hasItems }) {
  const [newTodoInput, setNewTodoInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value.trim().length > 1) {
      console.log(e.target.value.trim().length);
      onSubmit(newTodoInput.trim());
      setNewTodoInput("");
    }
  }

  return (
    <div className={styles.form}>
      {hasItems && <CompleteAllButton onClick={onAllDoneOrUndone} isListDone={isListDone} />}
      <input
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

import styles from "./TodoList.module.css";
import cx from "classnames";
import RemoveIcon2 from "../../assets/RemoveIcon2.svg?react";
import { useState, useRef, useEffect } from "react";
import { ItemEditMode } from "../itemEditMode";
import { FILTERS } from "../../constants/filters";

export function TodoList({ todoList, onToggle, onRemove, todoListFilter, onNameChange }) {
  const [editModeId, setEditModeId] = useState(null);
  const [newTodoName, setNewTodoName] = useState("original");

  let list;
  switch (todoListFilter) {
    case FILTERS.active:
      list = todoList.filter((item) => !item.isDone);
      break;
    case FILTERS.completed:
      list = todoList.filter((item) => item.isDone);
      break;
    case FILTERS.all:
      list = todoList;
  }

  function handleTodoNameChange(e) {
    setNewTodoName(e.target.value);
  }

  function handleCancelEditChanges() {
    setEditModeId(null);
    setNewTodoName("original");
  }

  function handleAcceptEditChanges(id, newName) {
    onNameChange(id, newName);
    setEditModeId(null);
    setNewTodoName("original");
  }

  function renderTodoList() {
    return (
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div
                className={cx(styles.itemView, {
                  [styles.visualyHidden]: item.id === editModeId,
                })}
                onDoubleClick={() => {
                  setEditModeId(item.id);
                }}
              >
                <input
                  type="checkbox"
                  className={styles.item__checkbox}
                  checked={item.isDone}
                  onChange={() => {
                    onToggle(item.id);
                  }}
                />
                <label
                  className={cx(styles.todoName, {
                    [styles.done]: item.isDone,
                  })}
                >
                  {item.name}
                </label>
                <button
                  className={styles.removeButton}
                  onClick={() => {
                    onRemove(item.id);
                  }}
                >
                  <RemoveIcon2 className={styles.removeIcon} />
                </button>
              </div>

              {/* EDIT MODE FOR ITEM */}
              {item.id === editModeId && (
                <ItemEditMode
                  item={item}
                  newTodoName={newTodoName}
                  onChange={handleTodoNameChange}
                  editModeId={editModeId}
                  onCancelChange={handleCancelEditChanges}
                  onAcceptChange={handleAcceptEditChanges}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return renderTodoList();
}

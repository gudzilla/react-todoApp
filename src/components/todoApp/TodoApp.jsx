import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoApp.module.css";
import { AddTodoForm } from "../addTodoForm";
import { TodoList } from "../todoList";
import { TodoFooter } from "../todoFooter";
import { TODOLIST_DATA } from "../../constants/data";

export function TodoApp() {
  const [todoList, setTodoList] = useState(TODOLIST_DATA);
  const [todoListFilter, setTodoListFilter] = useState("all");
  const undoneItemsCount = todoList.filter((item) => !item.isDone).length;
  const hasItems = todoList.length > 0;
  const isListCompleted = todoList.every((item) => item.isDone);

  function handleCheckItem(id) {
    const newList = todoList.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
    });

    setTodoList(newList);
  }

  function handleRemoveItem(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  function handleAddNewTodo(name) {
    const newList = [
      ...todoList,
      {
        id: uuidv4(),
        isDone: false,
        name,
      },
    ];
    setTodoList(newList);
  }

  function handleCheckAllOrUncheckAll() {
    const haveUndoneItems = todoList.some((todoItem) => !todoItem.isDone);
    const newList = todoList.map((todoItem) => ({
      ...todoItem,
      isDone: haveUndoneItems,
    }));

    setTodoList(newList);
  }

  function handleRemoveCompletedItems() {
    const newList = todoList.filter((todoItem) => !todoItem.isDone);
    setTodoList(newList);
  }

  function handleItemNameChange(id, newName) {
    const newList = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          name: newName,
        };
      } else {
        return todoItem;
      }
    });
    setTodoList(newList);
  }

  return (
    <section className={styles.todoSection}>
      <h1 className={styles.mainHeader}>todos:</h1>
      <div className={styles.todoList}>
        <AddTodoForm
          onSubmit={handleAddNewTodo}
          onAllDoneOrUndone={handleCheckAllOrUncheckAll}
          isListDone={isListCompleted}
          hasItems={hasItems}
        />
        <TodoList
          todoList={todoList}
          onToggle={handleCheckItem}
          onRemove={handleRemoveItem}
          todoListFilter={todoListFilter}
          onNameChange={handleItemNameChange}
        />
        {hasItems && (
          <TodoFooter
            undoneCounter={undoneItemsCount}
            onClearCompleted={handleRemoveCompletedItems}
            todoList={todoList}
            filter={todoListFilter}
            setFilter={setTodoListFilter}
          />
        )}
      </div>
    </section>
  );
}

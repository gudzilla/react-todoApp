import { useRef, useEffect } from "react";
import styles from "./ItemEditMode.module.css";

export function ItemEditMode({
  item,
  newTodoName,
  onChange,
  editModeId,
  onCancelChange,
  onAcceptChange,
}) {
  const wrapperDivRef = useRef(null);
  const inputRef = useRef(null);

  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value.trim().length > 1) {
      onAcceptChange(item.id, e.target.value.trim());
    } else if (e.key === "Escape" || e.keyCode === 27) {
      onCancelChange();
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperDivRef.current && !wrapperDivRef.current.contains(event.target)) {
        onCancelChange();
      }
    };

    inputRef.current.focus();
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperDivRef} className={styles.itemEdit}>
      <input
        ref={inputRef}
        type="text"
        value={newTodoName === "original" ? item.name : newTodoName}
        className={styles.itemEditInput}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

import { useRef, useEffect } from "react";
import styles from "./ItemEditMode.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";

export function ItemEditMode({ value, onChange, onKeyDown, onCancel }) {
  const inputRef = useRef(null);

  useClickOutside(inputRef, onCancel);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.itemEdit}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        className={styles.itemEditInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onCancel}
      />
    </div>
  );
}

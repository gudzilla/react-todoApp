import styles from "./TodoFilters.module.css";
import cx from "classnames";
import { useState } from "react";
import { FILTERS } from "../../constants/filters";

export function TodoFilters({ filter, setFilter, className }) {
  return (
    <div className={cx(className, styles.filtersContent)}>
      <button
        className={cx(styles.filter, { [styles.filterSelected]: filter === "all" })}
        onClick={() => {
          setFilter("all");
        }}
      >
        All
      </button>
      <button
        className={cx(styles.filter, { [styles.filterSelected]: filter === "active" })}
        onClick={() => {
          setFilter("active");
        }}
      >
        Active
      </button>
      <button
        className={cx(styles.filter, { [styles.filterSelected]: filter === "completed" })}
        onClick={() => {
          setFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}

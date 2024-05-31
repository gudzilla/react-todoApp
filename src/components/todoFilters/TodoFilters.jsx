import styles from "./TodoFilters.module.css";
import cx from "classnames";
import { useState } from "react";
import { FILTERS } from "../../constants/filters";

export function TodoFilters({ filter, setFilter, className }) {
  return (
    <div className={cx(className, styles.filtersContent)}>
      <button
        className={cx(styles.filter, { [styles.filterSelected]: filter === FILTERS.all })}
        onClick={() => {
          setFilter(FILTERS.all);
        }}
      >
        All
      </button>
      <button
        className={cx(styles.filter, { [styles.filterSelected]: filter === FILTERS.active })}
        onClick={() => {
          setFilter(FILTERS.active);
        }}
      >
        Active
      </button>
      <button
        className={cx(styles.filter, {
          [styles.filterSelected]: filter === FILTERS.completed,
        })}
        onClick={() => {
          setFilter(FILTERS.completed);
        }}
      >
        Completed
      </button>
    </div>
  );
}

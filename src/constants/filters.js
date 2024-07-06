const filterAll = (item) => item;
const filterActive = (item) => !item.isDone;
const filterCompleted = (item) => item.isDone;

export const FILTERS = {
  all: filterAll,
  active: filterActive,
  completed: filterCompleted,
};

export const FILTERS_PREDICATE = {
  [FILTERS.all]: filterAll,
  [FILTERS.active]: filterActive,
  [FILTERS.completed]: filterCompleted,
};

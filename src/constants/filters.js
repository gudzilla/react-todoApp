const filterAll = (item) => item;
const filterActive = (item) => !item.isDone;
const filterCompleted = (item) => item.isDone;

export const FILTERS = {
  all: {
    id: "all",
    fn: filterAll,
  },
  active: {
    id: "active",
    fn: filterActive,
  },
  completed: {
    id: "completed",
    fn: filterCompleted,
  },
};

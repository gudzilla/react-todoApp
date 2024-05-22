import { v4 as uuidv4 } from "uuid";

export const TODOLIST_DATA = [
  { id: uuidv4(), isDone: true, name: "Eat" },
  { id: uuidv4(), isDone: false, name: "Code" },
  { id: uuidv4(), isDone: false, name: "Train" },
  { id: uuidv4(), isDone: false, name: "Sleep" },
];

import { TTodo, TTodos } from "../Components/types";

const compareCheckedTodos = (first: TTodo, second: TTodo) => {
  if (first.checked) {
    return 1;
  }
  if (second.checked) {
    return -1;
  }
  return 0;
}

export const getTodosSorted = (todos: TTodos) => {
  const sortedTodos = Array.from(todos);
  sortedTodos.sort(compareCheckedTodos);

  return sortedTodos;
}

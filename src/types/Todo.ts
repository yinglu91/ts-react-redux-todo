export enum TodoActionTypes {
  fetchTodos,
  deleteTodo
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: TodoActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: TodoActionTypes.deleteTodo;
  payload: number; // todo.id
}

export type TodoActions = FetchTodosAction | DeleteTodoAction;

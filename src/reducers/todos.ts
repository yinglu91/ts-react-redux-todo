import { TodoActionTypes, Todo } from '../types/Todo';
import { Action } from '../types/actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case TodoActionTypes.fetchTodos:
      return action.payload;
    case TodoActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

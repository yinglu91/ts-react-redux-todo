import axios from 'axios';
import { Dispatch } from 'redux';
import {
  TodoActionTypes,
  Todo,
  FetchTodosAction,
  DeleteTodoAction
} from '../types/Todo';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: TodoActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch<DeleteTodoAction>({
      type: TodoActionTypes.deleteTodo,
      payload: id
    });
  };
};

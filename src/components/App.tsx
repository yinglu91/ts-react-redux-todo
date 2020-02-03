import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../types/Todo';
import { fetchTodos, deleteTodo } from '../actions/todos';
import { StoreState } from '../store/configureStore';
import TodoList from './TodoList';

import './App.css';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

const _App: React.FC<AppProps> = props => {
  const onButtonClick = () => {
    props.fetchTodos();
  };

  const onTodoClick = (id: number) => {
    props.deleteTodo(id);
  };

  return (
    <div>
      <button onClick={onButtonClick} className='btn btn-primary'>
        Fetch
      </button>

      <TodoList todos={props.todos} onDelete={onTodoClick} />
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

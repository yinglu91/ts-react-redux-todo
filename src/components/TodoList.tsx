import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = props => {
  return (
    <ul>
      {props.todos.map((todo: Todo) => {
        return (
          <li
            onClick={() => {
              props.onDelete(todo.id);
            }}
            key={todo.id}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

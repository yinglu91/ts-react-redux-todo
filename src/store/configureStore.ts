import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { expensesReducer, todosReducer } from '../reducers';
import { AppActions, Expense, Todo } from '../types/actions';

export interface StoreState {
  expenses: Expense[];
  todos: Todo[];
}

export const rootReducer = combineReducers<StoreState>({
  expenses: expensesReducer,
  todos: todosReducer
});

// AppState or call it StoreState
// {expenses: [Expense, Expense, Expense], todos: [Todo, Todo, Todo]}
// export type AppState = ReturnType<typeof rootReducer>;

// 7. Hook up types to Redux middleware (Thunk)

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<StoreState, AppActions>)
);

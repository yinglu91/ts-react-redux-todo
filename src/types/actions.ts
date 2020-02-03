import { ExpenseActions } from './Expense';
import { TodoActions } from './Todo';

export * from './Expense';
export * from './Todo';

// export type AppActions = AuthActions | ExpenseActions; // if auth
export type AppActions = ExpenseActions | TodoActions;

// Stephen
export type Action = ExpenseActions | TodoActions;

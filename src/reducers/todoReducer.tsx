export interface Todo {
  id: number;
  text: string;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: number };

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

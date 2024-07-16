import { FunctionComponent } from 'preact';
import { useReducer, useState } from 'preact/hooks';
import { todoReducer, TodoAction, Todo } from '../../reducers/todoReducer';

export const TodoWidget: FunctionComponent = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.currentTarget.value)}
        className="w-full p-2 mb-4 text-black rounded"
        placeholder="Add new todo"
      />
      <button
        onClick={addTodo}
        className="bg-white text-yellow-500 px-4 py-2 rounded"
      >
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo: Todo) => (
          <li key={todo.id} className="mb-2 flex justify-between items-center">
            <span>{todo.text}</span>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_TODO', payload: todo.id })
              }
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

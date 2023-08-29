import { createBrowserRouter } from 'react-router-dom'
import TodoList from './pages/TodoList'
import NewTodo from './pages/NewTodo'

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: ({ signal }) => {
      return fetch('http://localhost:3000/todos', { signal })
    },
  },
  { path: '/new', element: <NewTodo /> },
])

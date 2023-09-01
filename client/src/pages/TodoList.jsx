import { Form, Link, useLoaderData, useNavigation } from 'react-router-dom'
import TodoItem from '../Components/TodoItem'
import { useEffect, useRef } from 'react'

const TodoList = () => {
  const {
    todos,
    searchParams: { query },
  } = useLoaderData()
  const { state } = useNavigation()
  const queryRef = useRef()

  useEffect(() => {
    queryRef.current.value = query
  }, [query])

  return (
    <>
      <div className="container">
        <h1 className="page-title mb-2">
          Todos
          <div className="title-btns">
            <Link to={'/new'} className="btn">
              New
            </Link>
          </div>
        </h1>

        <Form className="form" method="get" action="/">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="query">Search</label>
              <input type="search" name="query" id="query" ref={queryRef} />
            </div>
            <button className="btn">Search</button>
          </div>
        </Form>
        {state === 'loading' ? (
          'Loading'
        ) : (
          <ul>
            {todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default TodoList

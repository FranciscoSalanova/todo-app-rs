import { Form, Link } from 'react-router-dom'

const NewTodo = () => {
  return (
    <div className="container">
      <h1 className="page-title mb-2">New Todo</h1>

      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Title</label>
            <input type="search" name="query" id="query" />
          </div>
        </div>

        <div className="form-btn-row form-row">
          <Link to={'..'} className="btn btn-outline">
            Back
          </Link>
          <button className="btn">Create</button>
        </div>
      </Form>
    </div>
  )
}

export default NewTodo

import { Form, Link, useActionData, useNavigation } from 'react-router-dom'

const NewTodo = () => {
  const errorMessage = useActionData()
  const { state } = useNavigation()

  const isSubmitting = state === 'submitting' || state === 'loading'

  return (
    <div className="container">
      <h1 className="page-title mb-2">New Todo</h1>

      <Form className="form" method="post">
        <div>{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="search" name="title" id="title" />
          </div>
        </div>

        <div className="form-btn-row form-row">
          <Link to={'..'} className="btn btn-outline">
            Back
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? 'Loading' : 'Create'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default NewTodo

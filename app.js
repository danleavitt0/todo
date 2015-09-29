/**
 * Imports
 */

import element from 'vdom-element'
import {addTodo, removeTodo, markTodoImportant} from './actions'
import localize from 'vdux-local'
import Todo from './components/todo'

/**
 * initialState
 */

function initialState () {
  return {
    todos: [],
    text: ''
  }
}

/**
 * handleKeyup
 */

function handleKeyup (setState, e) {
  const text = e.target.value

  return e.which === 13
    ? [setState({text: ''}), addTodo(text)]
    : setState({text})
}

/**
 * Render
 */

function render (props, setState) {
  const {app = {}, todos, key} = props
  const todoKey = idx => key + '.todos.' + idx

  return (
    <div>
      <header className='header'>
        <h1>Todos</h1>
        <input className='new-todo' placeholder='What needs to be done?' type='text' ev-keyup={e => handleKeyup(setState, e)} value={app.text} />
      </header>
      <section className='main'>
        <input className='toggle-all' type='checkbox'/>
        <ul className='todo-list'>
          {
            todos.map((todo, i) =>
              <Todo key={todoKey(i)} text={todo.text} {...app.todos[i]} />
            )
          }
        </ul>
      </section>
    </div>
  )
}

/**
 * Exports
 */

export default localize({
  initialState,
  render
})

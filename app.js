/**
 * Imports
 */

import element from 'vdom-element'
import {addTodo, removeTodo, markTodoImportant, toggleAll} from './actions'
import localize from 'vdux-local'
import Todo from './components/todo'
import Footer from './components/footer'

/**
 * initialState
 */

function initialState () {
  return {
    todos: []
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
  const footer = props.todos.length > 0 ? <Footer todos={todos} key={1}/> : null
  const checkAll = props.todos.length > 0 ?
    <input ev-click={e => toggleAll()} className='toggle-all' type='checkbox' checked={props.allDone}/> :
    null
  return (
    <div>
      <header className='header'>
        <h1>Todos</h1>
        <input className='new-todo' placeholder='What needs to be done?' type='text' ev-keyup={e => handleKeyup(setState, e)} value={app.text} />
      </header>
      <section className='main'>
        {checkAll}
        <ul className='todo-list'>
          {
            todos.map((todo, i) =>
              <Todo key={todoKey(i)} text={todo.text} completed={todo.completed} {...app.todos[i]} />
            )
          }
        </ul>
      </section>
      {footer}
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

import localize from 'vdux-local'
import element from 'vdom-element'

function render (props) {
  let inProgress = props.todos.filter((todo) => !todo.completed).length
  return (
    <footer className='footer'>
      <span className='todo-count'>{inProgress || '0'} items left</span>
      <button className='clear-completed'>Clear completed</button>
    </footer>
  )
}

export default localize ({
  render
})

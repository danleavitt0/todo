import localize from 'vdux-local'
import element from 'vdom-element'
import {changeUrl} from '../actions'

const setClass = (cls, test) =>  {
  if (test)
    return cls
}

function render (props) {
  let inProgress = props.todos.filter((todo) => !todo.completed).length
  let plural = inProgress > 1 || inProgress === 0 ? 's' : ''
  return (
    <footer className='footer'>
      <span className='todo-count'>{inProgress || '0'} item{plural} left</span>
      <ul className='filters'>
        <li>
          <a className={setClass('selected', 'All' === props.active)} ev-click={e => changeUrl('/')}>All</a>
        </li>
        <li>
          <a className={setClass('selected', 'Active' === props.active)} ev-click={e => changeUrl('/:active')}>Active</a>
        </li>
        <li>
          <a className={setClass('selected', 'Completed' === props.active)} ev-click={e => changeUrl('/:completed')}>Completed</a>
        </li>
      </ul>
      <button className='clear-completed'>Clear completed</button>
    </footer>
  )
}

export default localize({
  render
})

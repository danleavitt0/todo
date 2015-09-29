/**
 * Imports
 */

import localize, {localAction} from 'vdux-local'
import element from 'vdom-element'
import {handleOnce, unhandle} from 'declarative-events'
import bind from 'bind-effect'

const TOGGLE = 'TOGGLE_COMPLETE'
/**
 * Render
 */

function beforeUpdate (prevProps, nextProps, setState) {
  if (!prevProps.open && nextProps.open) {
    return bindCloseHandler(setState)
  } else if (prevProps.open && !nextProps.open) {
    return unbindCloseHandler(setState, nextProps.handlerId)
  }
}

function bindCloseHandler (setState) {
  return bind(
    handleOnce('click', () => setState({completed: true})),
    id => setState({handlerId: null})
  )
}

function unbindCloseHandler (setState, id) {
  return [
    unhandle('click', id),
    setState({handlerId: null})
  ]
}

function render (props) {
  const key = props.key
  const className = props.completed ? 'completed' : ''
  return (
    <li className={className} key={key}>
      <input ev-click={e => toggle(key)} className='toggle' type='checkbox'/>
      <label>{props.text}</label>
      <button className='destroy'/>
    </li>
  )
}

function reducer (state, action) {
  switch(action.type) {
    case TOGGLE:
      return {
        ...state,
        completed: !state.completed
      }
  }
  return state
}

const toggle = localAction(TOGGLE)

export default localize({
  beforeUpdate,
  render,
  reducer,
  toggle
})

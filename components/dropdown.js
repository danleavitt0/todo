/**
 * Imports
 */

import localize, {localAction} from 'vdux-local'
import {handleOnce, unhandle} from 'declarative-events'
import bind from 'bind-effect'
import element from 'vdom-element'

/**
 * Action types
 */

const TOGGLE = 'TOGGLE_DROPDOWN'

function beforeUpdate (prevProps, nextProps, setState) {
  if (!prevProps.open && nextProps.open) {
    return bindCloseHandler(setState)
  } else if (prevProps.open && !nextProps.open) {
    return unbindCloseHandler(setState, nextProps.handlerId)
  }
}

function bindCloseHandler (setState) {
  return bind(
    handleOnce('click', () => setState({open: false})),
    id => setState({handlerId: id})
  )
}

function unbindCloseHandler (setState, id) {
  return [
    unhandle('click', id),
    setState({handlerId: null})
  ]
}

function render (props) {
  return (
    <div style={{display: props.open ? 'block' : 'none'}}>
      <ul>
        {props.children.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

function reducer (state, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        open: !state.open
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

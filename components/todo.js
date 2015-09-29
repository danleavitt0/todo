/**
 * Imports
 */

import localize from 'vdux-local'
import element from 'vdom-element'
import Dropdown from './dropdown'

/**
 * Render
 */

function render (props) {
  const dropdownKey = props.key + '.dropdown'

  return (
    <li>
      <input className='toggle' type='checkbox'/>
      <label>{props.text}</label>
      <button>x</button>
    </li>
  )
}

/**
 * Exports
 */

export default localize({
  render
})

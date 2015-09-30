/**
 * Imports
 */

import localize from 'vdux-local'
import element from 'vdom-element'
import {toggle} from '../actions'

function render (props) {
  const key = props.key
  const idx = Number(props.key.split('.')[2])
  const className = props.completed ? 'completed' : ''
  return (
    <li className={className} key={key}>
      <input ev-click={e => toggle(idx)} className='toggle' type='checkbox' checked={props.completed}/>
      <label>{props.text}</label>
      <button className='destroy'/>
    </li>
  )
}

export default localize({
  render
})

/**
 * Imports
 */

import {TODO_ADD, TODO_REMOVE, TODO_SET_IMPORTANT, TOGGLE_ALL, TOGGLE} from './actions'
import ephemeral from 'redux-ephemeral'

/**
 * Reducer
 */

function reducer (state, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, {text: action.text, important: true}]
      }
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo, idx) => idx !== action.idx)
      }
    case TODO_SET_IMPORTANT:
      return {
        ...state,
        todos: state.todos
          .reduce(
            (acc, todo, idx) => acc.concat(
              idx === action.idx
                ? {...todo, important: true}
                : todo, [])
          )
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo, idx) => {
          if (idx === action.idx)
            todo.completed = !todo.completed
          return todo
        })
      }
    case TOGGLE_ALL:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.completed = state.toggleAll
          return todo
        }),
        toggleAll: !state.toggleAll
      }
  }

  return ephemeral(state, action)
}

/**
 * Exports
 */

export default reducer

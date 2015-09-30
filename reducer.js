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
      const inProgress = [...state.inProgress, {text: action.text, important: false}]
      return {
        ...state,
        inProgress: inProgress,
        todos: [...inProgress, ...state.completed]
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
        completed: [...state.completed, state.todos[action.idx]]
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

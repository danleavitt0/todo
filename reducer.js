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
        todos: [...state.todos, {text: action.text, important: false}]
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
      let todos = state.todos.map((todo, idx) => {
        if (idx === action.idx)
          todo.completed = !todo.completed
        return todo
      })
      var count = todos.length
      var completed = state.todos.filter((todo) => todo.completed).length
      return {
        ...state,
        todos: todos,
        allDone: count === completed
      }
    case TOGGLE_ALL:
      var count = state.todos.length
      var completed = state.todos.filter((todo) => todo.completed).length
      return {
        ...state,
        allDone: count !== completed,
        todos:state.todos.map((todo) => {
          todo.completed = count !== completed
          return todo
        })
      }
  }

  return ephemeral(state, action)
}

/**
 * Exports
 */

export default reducer

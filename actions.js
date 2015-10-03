/**
 * Types
 */

const TODO_ADD = 'TODO_ADD'
const TODO_REMOVE = 'TODO_REMOVE'
const TODO_SET_IMPORTANT = 'TODO_STAR'
const TOGGLE = 'TOGGLE'
const TOGGLE_ALL = 'TOGGLE_ALL'
const CHANGE_URL = 'CHANGE_URL'

/**
 * Action creators
 */

function addTodo (text) {
  return {
    type: TODO_ADD,
    text
  }
}

function removeTodo (idx) {
  return {
    type: TODO_REMOVE,
    idx
  }
}

function markTodoImportant (idx) {
  return {
    type: TODO_SET_IMPORTANT,
    idx
  }
}

function toggle (idx) {
  return {
    type: TOGGLE,
    idx
  }
}

function toggleAll () {
  return {
    type: TOGGLE_ALL
  }
}

function changeUrl (url) {
  return {
    type: CHANGE_URL,
    url
  }
}

/**
 * Exports
 */

export default {
  // Action creators
  addTodo,
  removeTodo,
  markTodoImportant,
  toggleAll,
  toggle,
  changeUrl,

  // Action types
  TODO_ADD,
  TODO_REMOVE,
  TODO_SET_IMPORTANT,
  TOGGLE_ALL,
  TOGGLE,
  CHANGE_URL
}

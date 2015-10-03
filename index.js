/**
 * Imports
 */

import vdux from 'vdux'
import createStore from './store'
import {listen} from 'virtual-component'
import {handleOnce} from 'declarative-events'
import element from 'vdom-element'
import App from './app'

/**
 * Setup store
 */

const store = createStore({
  todos: [],
  url: '/'
})

/**
 * App
 */

store.dispatch(handleOnce('domready', () => {
  listen(store.dispatch)
  vdux(store, state => <App {...state} url={state.url} key='router' />, document.getElementById('todoapp'))
}))

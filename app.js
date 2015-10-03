import Main from './main'
import Footer from './components/footer'
import element from 'vdom-element'
import localize from 'vdux-local'

const routes = {
  '/': {
    key: 'main',
    elem: Main,
    params: []
  },
  '/:active': {
    key: 'main',
    elem: Main,
    params: {'Active': true}
  },
  '/:completed': {
    key: 'main',
    elem: Main,
    params: {'Completed': true}
  }
}

function render (props) {
  const {key, elem, params} = routes[props.url] || Main
  const buildRoute = element(elem, {...props, params: params, key: key})
  return (
    <div>
      {buildRoute}
    </div>
  )
}

export default localize({
  render
})

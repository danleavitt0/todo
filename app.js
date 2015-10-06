import Main from './main'
import Footer from './components/footer'
import element from 'vdom-element'
import localize from 'vdux-local'
import router from './router'

var component = router({
  '/': Main,
  '/:slug': Footer
})

function render (props) {
  let {params} = component(props.url)
  console.log(params)
  const buildRoute = element(component(props.url), {...props, params: {...params}, key: '/'})
  return (
    <div>
      <Main key='main' params={params} {...props}/>
    </div>
  )
}

export default localize({
  render
})

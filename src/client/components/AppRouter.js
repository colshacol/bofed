import { hot } from 'react-hot-loader'
import * as React from 'react'
import ReactDOM from 'react-dom'
import Switch from 'react-router-dom/Switch'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

import './styles/AppRouter.css'

const Home = () => {
  return <p>I am Home component!</p>
}

export default hot(module)((props) => {
  return (
    <div styleName="AppRouter">
      <Route exact path="/" component={Home} />
    </div>
  )
})

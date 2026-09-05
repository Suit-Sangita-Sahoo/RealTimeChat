import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../reduce/store'
import Home from './comp/Home'
import About from './comp/About'
import Login from './comp/Login'

const ReduxToolKitHome = () => {
  return (
    <div>
      <Provider store={store}>
         <Home/>
         <hr/>
         <About/>
         <hr/>
         <Login/>
      </Provider>
    </div>
  )
}

export default ReduxToolKitHome

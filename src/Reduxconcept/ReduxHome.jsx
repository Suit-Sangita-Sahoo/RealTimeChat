import React from 'react'

import { Provider } from 'react-redux'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import { store } from './reduce/store'

const ReduxHome = () => {
  return (
    <div>
      <Provider store={store}>
        <Page1/>
      <Page2/>
      <Page3/>
      </Provider>

    </div>  
  )
}

export default ReduxHome

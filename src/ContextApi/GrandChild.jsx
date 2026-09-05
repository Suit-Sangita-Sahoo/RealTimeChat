import React, { useContext } from 'react'
import GreatGrandChild from './GreatGrandChild'
import { GlobalContext } from './Parent'

const GrandChild = () => {
    // const data=useContext(GlobalContext)
  return (
    <div>
      <GreatGrandChild/>
    </div>
  )
}

export default GrandChild 
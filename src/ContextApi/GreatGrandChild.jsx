import React, { useContext } from 'react'
import { GlobalContext } from './Parent'

const GreatGrandChild = () => {
    const data=useContext(GlobalContext)
    console.log(data)
  return (
    <div>
      GreatGrandChild
    </div>
  )
}

export default GreatGrandChild
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Page1 = () => {
  const {count}=useSelector((state)=>state)
  console.log(count)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Page1 :</h1>
      <button className='p-2 bg-blue-500 m-3' onClick={()=>dispatch({type:"increment"})}>Increment</button>
      
    </div>
  )
}

export default Page1

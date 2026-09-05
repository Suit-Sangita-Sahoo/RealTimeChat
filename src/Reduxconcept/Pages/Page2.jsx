import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page2 = () => {

  const {count}=useSelector((state)=>state)
  console.log(count)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Page2 :</h1>
      <button className='p-2 bg-blue-500 m-3' onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      
    </div>
  )
}

export default Page2

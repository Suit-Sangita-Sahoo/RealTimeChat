import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/counterSlice'

const Home = () => {
    const data=useSelector((state)=>state.counter)
    const dispatch=useDispatch
  return (
    <div>
        <h1>Home</h1>
        <h1 className='text-3xl bg-blue-200 '>{data.count}</h1>
        <button className='p-5 border-2 bg-orange-300' onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Home
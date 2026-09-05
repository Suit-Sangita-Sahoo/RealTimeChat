import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Card from './Card'
import UseEffectExample from './UseEhhect'

const Card = () => {
    const [user,setUser]=useState(null)
    const [status,setStatus]=useState(true)
    const fetchData=async ()=>{
        const{data}=await fetch("https://fakestoreapi.com/products")
        const result=await data.json();
        setStatus(false)
        console.log("Reender")
    }
    useEffect(()=>{
        fetchData()
    },[])

   const deleteItem=(id)=>{
    const updateData=user ?. filter((ele)=>ele.id!==id)
    setUser(updateData)
   }

    console.log(user);
return (
    <div >
        
        {
          status? <Loading/> :<UseEffectExample data={user} deleteItem={deleteItem}/>
        }

    </div>
)
}

export default Card
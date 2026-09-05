import React, { useReducer } from 'react'

const UseReduceForm = () => {

    let initialstate={
         username:"",
        email:"",
        password:""
    }
    const reduce=(state,action)=>{      

        switch(action.type){
            case "update_form":
                return {...state,[action.key]:action.value}
            case "reset_form":
                return {...initialstate}    
        }
    }
   const [state,dispatch]=useReducer(reduce,initialstate)

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(state)

        dispatch({
            type:"reset_form"
        })
    }
    const handleInput=(e)=>{
    const {name,value}=e.target
    dispatch({type:"update_form",
        key:name,
        value:value
    })
   }
  return (
    <div>
        <form onSubmit={handleForm}  action="" className='flex flex-col gap-4 justify-around pl-[50px]'>
            <label htmlFor="" className=''>UserName:</label>
                <input type="text" name="username" value={state.username} onChange={handleInput} className='w-[200px] h-[20px] bg-gray-300 rounded-md' />

            <label htmlFor="">Email:  </label>
                <input type="email" name='email' value={state.email} onChange={handleInput} className='w-[200px] h-[20px] bg-gray-300 rounded-md' />
          
            <label htmlFor="">Password:  </label>
                <input type="password" name="password" value={state.password} onChange={handleInput} className='w-[200px] h-[20px] bg-gray-300 rounded-md'/>
                <button>Submit</button>
           

        </form>
      
    </div>
  )
}

export default UseReduceForm

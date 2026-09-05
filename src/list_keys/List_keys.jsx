import { Fragment } from "react"

const List_keys=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,0]
    return(
        // <div>
        //   {/* {
        //     arr.map((ele,index)=>{
        //         return <h1 key={index}>{ele}</h1>
        //     })
        //   } */}

        //   <>
        //   {
        //      arr.map((ele,index)=>{
        //         return <h1 key={index}>{ele}</h1>
        //     })
        //   }
        //   </>
        <div>
            {
                arr.map((ele,index)=>
                {
                    return
                    (
                        <Fragment key={index}>
                        <h1>{ele}</h1>
                        <p>index:{index}</p>
                        </Fragment>
                        
                    )
                })
                       
        }
        </div>



        // </div>
    )
}
export default List_keys
















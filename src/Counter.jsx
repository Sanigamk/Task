import React, { useState } from 'react'

export const Counter = () => {
    const [count,setcount]=useState(0)

    const[data,setdata]=useState([])

     let increment=()=>{
        setcount(count+1)
     }

     let decrement=()=>{
        if(count!=0){
         setcount(count-1)
        }
    
     }

     let adddata=()=>{
        setdata([{name:'manu',age:44},{name:'hilal',age:33},{name:'varun', age:22}]
        )
     }
     return (

     <div>

        <h1>{count}</h1>
        <h1>
        {data.map((item)=>(
            <div>
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
            </div>        ))}
        </h1>
        <h2>{data.name}</h2>


        <button onClick={adddata}>Add data</button>

       <button onClick={increment}>INCREMENT</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  )
}


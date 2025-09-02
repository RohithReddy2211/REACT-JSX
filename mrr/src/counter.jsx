import { useState } from "react"
export function Counter({a,s,p}){     
                var[count,setcountFn]=useState(a)

                function incCount(){
                  setcountFn(count+s)    //This concept parent-child and child-parents
                }
                
                function decCount(){
                  setcountFn(count-s)
                }
               
    return(
        <div className="border border-2 border-success p-2 m-2">
            <h1> counter::{count}</h1>
            <button onClick={()=>{incCount()}}>Inc</button>
            <button
              onClick={()=>{decCount()}} >Dec</button>

              <button onClick={()=>{p(count)}}>Mee parents ki call chastha....</button>
        </div>
    )
}
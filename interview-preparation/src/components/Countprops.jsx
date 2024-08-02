import { useState } from "react"

import Child1 from "./Child1"
import Child2 from "./Child2"



const Countprops = () => {

    const [count , setCount] = useState("")

    const handleIncrement = () => {
         
        setCount(count + 1)

    }


    const handleDecrement = () => {
       
        setCount(count - 1)

    }
 
    return(
       
        <>

        
         
         <Child1 count = {count}/>

         <Child2 inc = {handleIncrement} dec = {handleDecrement}/>
               
        
        </>

    )

}


export default Countprops
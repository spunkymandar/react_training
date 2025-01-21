import { useState } from "react";

const CheckCounter=()=>{
    const[counter,setCounter]=useState(100)
    const handleCount=()=>{
        setCounter(counter+1)
    }
    return(
        <>
        <button onClick={handleCount}>Click me</button>
        The counter value={counter}
        </>
    )
}
export default CheckCounter;
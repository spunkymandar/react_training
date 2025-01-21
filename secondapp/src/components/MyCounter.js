import { useState } from "react";

const MyCounter=()=>{
    const[counter,setCounter]=useState(100)

    const mycounterhandler=()=>{
        setCounter(counter+1)
    }
    return(
        <>
            <div>You Visited the page {counter} times</div>
            <div>Welcome : {}</div>
            <input type="text"></input>
            <button onClick={mycounterhandler}>Click</button>
        </>
    )
}
export default MyCounter;
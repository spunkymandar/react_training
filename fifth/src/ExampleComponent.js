import { useEffect, useState } from "react"

const ExampleComponent=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Use effect invoked!!")
        document.title=`You clicked ${count} times`
    },[count])

    

    return(
        <>
        <h3>UseEffect with dependencies</h3>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )

}
export default ExampleComponent
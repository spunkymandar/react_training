import { useEffect, useState } from "react"

const MultipleDependencyComponent=()=>{
    const[count,setCount]=useState(0)
    const[text,setText]=useState('')
    useEffect(()=>{
        console.log(`Count is ${count} and text is ${text}`)
    },[text,count])
    return(
        <>
        <h3>Using multiple dependencies!!</h3>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <input type="text" value={text}
           onChange={(e)=>setText(e.target.value)}
           placeholder="type Something" ></input>
        </>
    )
}
export default MultipleDependencyComponent
import { useState } from "react"
import ButtonOne from "./ButtonOne"
import ButtonTwo from "./ButtonTwo"

const Calculator=()=>{
   //ans is state variable
   //setAns is function which modifies the ans variable
   //useState is hook, which sets the default value of state variable
   //When the seAns() invoked, the state variable changes
   //when the state variable changes the UI is re-rendered. 
   const[ans,setAns]=useState('No Operation is selected')

    const addevent=()=>{
        setAns('addition')
        console.log(ans)
    }
    const subevent=()=>{
        setAns('substraction')
        console.log(ans)
    }
    return(
        <>
        <ButtonOne process={addevent}></ButtonOne>
        <ButtonTwo process={subevent}></ButtonTwo><br></br>
        You clicked :{ans}
        </>
    )
}
export default Calculator
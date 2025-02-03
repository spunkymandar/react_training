import { useState } from "react"
import { useRef } from "react"
const Emailform=()=>{
    // const [enteredEmail,setEnteredEmail]=useState('')
    const emailRef=useRef(null)
    // const handleEmailChange=(event)=>{
    //     console.log("event called")
    //     // setEnteredEmail(event.target.value)
    //     // console.log(enteredEmail)
    // }
    const handleSubmitForm=(event)=>{
        event.preventDefault();
        const enteredEmail=emailRef.current.value;
        console.log(enteredEmail)
        emailRef.current.value=''

    }
    return(
        <>
        <form onSubmit={handleSubmitForm}>
            <input  type="text" 
                    id="email" 
                    ref={emailRef}
            />
            <button>Save</button>
        </form>
        </>
    )
}
export default Emailform

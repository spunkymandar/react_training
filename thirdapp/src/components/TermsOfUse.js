import { useState } from "react";

const TermsOfUse=()=>{
    const[showTerms, setShowTerms]=useState(false)
    // let termText=''
    const handleTerms=()=>(
        setShowTerms(true)
    )
    //const variable=condition?value1:value2
    // const termText=showTerms ?
    //         <p>I agree to share my data on social media accounts of org</p>:null;
    // if(showTerms){
    //     termText=<p>I agree to share my data on social media accounts of org</p>
    // }
    return(
        <>
            <p><b>Inside Terms of use!!!</b></p>
            <button onClick={handleTerms}>Show Terms of Use Summary</button>
            {/* {
            showTerms ?
            <p>I agree to share my data on social media accounts of org</p>
            :null
            }; */}
            {
                showTerms && <p>I agree to conditions</p>
            }
        </>
    )
}
export default TermsOfUse;

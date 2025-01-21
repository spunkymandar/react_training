import Second from "./Second"

const First=()=>{
    const myhandler=()=>{
        alert('button clicked')
    };
    return(
        <>
        <div>
            <p>In the first component</p>
            <Second process={myhandler}></Second>
        </div>
        </>
    )
}
export default First
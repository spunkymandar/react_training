import ButtonAdd from "./ButtonAdd";
import ButtonSubstract from "./ButtonSubstract";

const ButtonGroup=()=>{
    let ans=''
    const handleAdd=()=>{
        console.log("add invoked")
        ans='add'
    }
    const handleSubstract=()=>{
        console.log("sub invoked")
        ans='substract'
    }
    return(
        <>
        You clicked <div>{ans}</div>
        <ButtonAdd myevent={handleAdd} ></ButtonAdd>
        <ButtonSubstract myevent={handleSubstract}></ButtonSubstract>
        
        </>
    )
}
export default ButtonGroup
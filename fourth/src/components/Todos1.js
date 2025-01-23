import { useState } from "react"

const Todos1=()=>{
    // const todocollection=
    
    const[todos,setTodos]=useState(['Learn React','Learn Angular'])
    const todocollection=['Java','Python','PHP','DataScience','C++','Android']
    //                      0       1       2       3           4
    const handleAddTodo=()=>{
        console.log("Button clicked!!")
        const course=todocollection[Math.floor(Math.random()*todocollection.length)]
        console.log(course)
        //setTodos(curTodos=>[...curTodos,'Another Item'])
        setTodos(curTodos=>[...curTodos,course])
    }
    return(
        <>
            <p>ToDo's for this week</p>
            <input type="text"></input>
            <button onClick={handleAddTodo}>Add ToDo</button>
            {/* {todos.map((td,index)=><li key={index}>{td}</li>)} */}
            {todos.map((td)=><li>{td}</li>)}
        </>
    )
}
export default Todos1;
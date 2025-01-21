import { useState } from "react"

const Todos=()=>{

    // const todos=['Learn React','Learn Angular']
    const[todos,setTodos]=useState(['Learn React','Learn Angular'])
    const handleAddTodo=()=>{
        console.log("Button clicked!!")
       // todos.push('Another course')
        console.log(todos)
       // setTodos(todos);
        setTodos(curTodos=>[...curTodos,'Another Course'])
    }
    return(
        <>
            <p>ToDo's for this week</p>
            <input type="text"></input>
            <button onClick={handleAddTodo}>Add ToDo</button>
            {todos.map(td=><li>{td}</li>)}
        </>
    )
}
export default Todos;
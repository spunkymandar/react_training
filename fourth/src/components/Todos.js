import { useState } from "react"

const Todos=()=>{

    // const todos=['Learn React','Learn Angular'] : type1
    //const[todos,setTodos]=useState(['Learn React','Learn Angular']) : type 2
    const[todos,setTodos]=useState([
        {todoid:1,todoitem:'Learn React'},
        {todoid:2,todoitem:'Learn Angular'}
    ])
    const handleAddTodo=()=>{
        console.log("Button clicked!!")
        console.log(todos)
        //setTodos(curTodos=>[...curTodos,'Another Course'])
        setTodos(curTodos=>[...curTodos,{todoid:111,todoitem:'Another Item'}])
    }
    return(
        <>
            <p>ToDo's for this week</p>
            <input type="text"></input>
            <button onClick={handleAddTodo}>Add ToDo</button>
            {/* {todos.map((td,index)=><li key={index}>{td}</li>)} */}
            {todos.map((td)=><li key={td.todoid}>{td.todoitem}</li>)}
        </>
    )
}
export default Todos;
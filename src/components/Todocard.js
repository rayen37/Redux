import React from 'react'
import {connect} from "react-redux"
import EdiTodo from './EdiTodo'

import {removetodo , togglecomplete} from "./js/action/actionTypes"
const Todocard = ({todo , removetodo , togglecomplete}) => {
    return (
        <div className="d-flex justify-content-around" >
            <span className="text" >
             <h3 style={todo.isComplete ? { textDecoration :"line-through ",color : "lightgray"} :{color : "#17a2b8"}}>{todo.text}</h3>
            </span>
            <span>
             <button onClick={()=>togglecomplete(todo.id)}>{todo.isComplete ? <span style={{color:"red"}}>🗹 </span>:<span style={{color:"green"}}>🗹 </span>}</button>
              <button onClick={()=>removetodo(todo.id)}>✘</button>
               <EdiTodo todo ={todo}/>
             </span>
        </div>
    )
}

export default connect (null , {removetodo , togglecomplete}) (Todocard)

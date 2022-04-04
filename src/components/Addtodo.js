import React ,{useState} from 'react'
import {connect} from "react-redux"
import {addtodo} from "./js/action/actionTypes"
import {Col ,InputGroup , Form , Button , FormControl } from 'react-bootstrap';
const Addtodo = ({addtodo}) => {
    const [text, setText] = useState("")
    const HandleSubmite = (e) =>{
        e.preventDefault() ;
         if(text.trim()===""){
           alert("your todo is empty please add todo !")
         }
         else {
          const newtodo = {
            text : text ,
            id : Math.random() ,
            isComplet : false  
        }
         addtodo(newtodo)
         setText("")
         }
       
    }
    return (
        <div style={{ justifyContent:"center"}}>
           







            <Form>
  <Form.Row className="align-items-center">
    <Col className=" d-flex justify-content-center">
    
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="add your todo"
        style={{display:"flex" , alignItem :"center" , width:"65%"}}
        value={text} onChange={(e)=>setText(e.target.value)} 
      />

<Button style={{marginLeft:"10px"}} variant="info" type="submit" className="mb-2" onClick={HandleSubmite}>
       +
      </Button>
    </Col>
    

  </Form.Row>
</Form>
        </div>
    )
}

export default connect (null ,{ addtodo}) (Addtodo)

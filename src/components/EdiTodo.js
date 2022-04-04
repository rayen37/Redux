import React, {useState} from 'react'

import {connect} from "react-redux"
import{Button, Modal , InputGroup , FormControl} from 'react-bootstrap'
import {editedtodo} from "./js/action/actionTypes"


const EdiTodo = ({editedtodo , todo}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const HandleSubmite =(e)=>{
    e.preventDefault()
    const newtodo = {...todo , text}
    editedtodo(newtodo)
    setText("")
    handleClose()
  }
    return (
      <>
        <button  onClick={handleShow}>
        ✐
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>


          <InputGroup className="mb-3">
    <FormControl
      value={text}
      onChange={(e)=>setText(e.target.value)}
     
      aria-describedby="basic-addon1"
    />
  </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSubmite}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default connect (null ,{editedtodo})(EdiTodo)

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edit } from '../../redux/action';
const Edit = ({elt}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [updatedTask, setUpdatedTask] = useState(elt.name)
  const dispatch=useDispatch()
  const hendlEdit =()=>{
dispatch(edit(elt.id,updatedTask))
handleClose()
}
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" 
            className='form-control'
            onChange={(e)=>setUpdatedTask(e.target.value)}
            value={updatedTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={hendlEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
        </div>
    )
}

export default Edit

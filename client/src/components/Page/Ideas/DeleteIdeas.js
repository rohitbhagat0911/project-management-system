import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect} from 'react';
import axios from 'axios';
import "./IdeasBody.css"
import { AiFillDelete } from 'react-icons/ai' 


const DeleteIdeas = ({regUser}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const handlePost = () => {
    axios.post('http://localhost:5000/deleteidea', {
      reg: regUser,
    }).then((response) => {
     
    }).catch(err => console.log(err));
  
  
  }
  
  
    return(<div>

{/* { ideaDetails.affectedRow == 1? alert("Your idea is added successfully!!") && window.location.reload(): console.log("Shit")
      } */}
{/* 
<button className="" onClick={handleShow}>
        </button> */}
  <div className="" onClick={handleShow}> <AiFillDelete /></div>


      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form className="deleteuser-form">
                      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Reg. No. </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={item.regno}
                          disabled
                        />
          
                      </Form.Group> */}
                      <small className="deleteuser-subheading">Are you sure you want to delete this user with reg no <span className="deleteuser-regno">{regUser}</span> ?</small>
                     
          
                      
          
          
          
                      {/* <small>sfads</small> */}
          
                      {/* <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Stream</Form.Label>
                        <Form.Control type="text" placeholder="Your stream" onChange={fetchStream}/>
                      </Form.Group>
          
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="Year" onChange={fetchYear}/>
                      </Form.Group> */}
          
          
                    </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={(e) => {
                if (e) {
                    handlePost();
                    alert("Successfully deleted")
                    handleClose();
                    window.location.reload();
                } else {
                    handleShow();
                    alert("Failed")
                }
            }}>
            Yes
          </Button>

        </Modal.Footer>
      </Modal>

     
    


    </div>)
}

export default DeleteIdeas;
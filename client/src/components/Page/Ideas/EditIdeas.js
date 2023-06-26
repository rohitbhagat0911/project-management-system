import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect} from 'react';
import axios from 'axios';
import { AiFillEdit } from 'react-icons/ai' 

const EditIdeas = ({regUser, heading, desc}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
 
  const [alertRed, setAtertRed] = useState(false);


  const fetchTitle = (e) =>{
    setTitle(e.target.value.trim());
  }

  const fetchAbout = (e) =>{
    setAbout(e.target.value.trim());
  }

// console.log(
//   window.sessionStorage.getItem('currentUserYear')

// );


const [ideaDetails ,setIdeaDetails] = useState({});
const handlePost = () => {
  axios.post('http://localhost:5000/editideas', {
    heading: heading,
    description: about,
    reg: regUser,
  }).then((response) => {
    setIdeaDetails(response.data);
   
  }).catch(err => console.log(err));


}

// console.log(ideaDetails);

// const handleSubmit = (event) => {
//   alert('A form was submitted: ' + this.state);

//   fetch('http://localhost:3000/store-data', {
//       method: 'POST',
      
//       body: JSON.stringify(this.state)
//     }).then(function(response) {
//       console.log(response)
//       return response.json();
//     });

//   event.preventDefault();
// }
 
    
    return(<div>

{/* { ideaDetails.affectedRow == 1? alert("Your idea is added successfully!!") && window.location.reload(): console.log("Shit")
      } */}

<div onClick={handleShow}>
        <AiFillEdit />
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Ideas of User..</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                value={heading}
                disabled
                autoFocus
                onChange={fetchTitle}
              />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About your idea</Form.Label>
              <Form.Control
              required
              defaultValue={desc}
              as="textarea" rows={3} 
              onChange={fetchAbout}
              />
            { about.length >= 10000? <small className="red-danger">The description length should be less than 10000.</small>: ""}
            </Form.Group>


            



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
            Close
          </Button>
          {/* <Button variant="primary" onClick={ (title != "" && about != "")?  handlePost && handleClose : handleShow}>
            Submit
          </Button> */}

            <Button variant="primary" onClick={() => {
                if (about !== "" && about.length <= 10000) {
                    handlePost();
                    alert("Successfully updates")
                    handleClose();
                    window.location.reload();
                } else {
                    handleShow();
                    alert("Failed")
                }
            }}> Submit </Button>
        </Modal.Footer>
      </Modal>

     
    


    </div>)
}

export default EditIdeas;
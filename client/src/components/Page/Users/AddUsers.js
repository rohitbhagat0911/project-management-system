import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect} from 'react';
import axios from 'axios';

const AddUsers = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [stream, setStream] = useState("");
  const [year, setYear] = useState("");
  const [confirmPassoword, setConfirmPassword] = useState("");

 
  const [alertRed, setAtertRed] = useState(false);


  const fetchReg = (e) =>{
    setReg(e.target.value.trim());
  }

  const fetchEmail = (e) =>{
    setEmail(e.target.value.trim());
  }

  const fetchPassword = (e) =>{
    setPassword(e.target.value.trim());
  }

  const fetchConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value.trim());
  }

  const fetchName = (e) =>{
    setName(e.target.value.trim());
  }

  const fetchStream = (e) =>{
    setStream(e.target.value.trim());
  }

  const fetchYear = (e) =>{
    setYear(e.target.value.trim());
  }

// console.log(
//   window.sessionStorage.getItem('currentUserYear')

// );
const [ideaDetails ,setIdeaDetails] = useState({});
const handlePost = () => {
  axios.post('http://localhost:5000/addusers', {
    reg: reg,
    name: name,
    email: email,
    password: password,
    stream: stream,
    year: year
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
{/* 
<button className="" onClick={handleShow}>
        </button> */}
  <input type="button" value="Add" className="button-style" onClick={handleShow} />


      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Users Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reg. No. </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Reg. No."
                autoFocus
                onChange={fetchReg}
              />
            { reg == ""? <small className="red-danger">Reg. No. cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={fetchName}
              />
            { name == ""? <small className="red-danger">Name cannot be empty.</small>: ""}

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email ID"
                onChange={fetchEmail}
              />
            { email == ""? <small className="red-danger">Email cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={fetchPassword}
              />
            { password == ""? <small className="red-danger">Password cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                onChange={fetchConfirmPassword}
              />
            { password != confirmPassoword? <small className="red-danger">Password is not the same.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stream </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Stream"
                onChange={fetchStream}
              />
            { stream == ""? <small className="red-danger">Stream cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Year </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Year"
                onChange={fetchYear}
              />
            { year == ""? <small className="red-danger">Year cannot be empty.</small>: ""}

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
                if (reg !== "" && name !== "" && password !== "" && email !== "" && stream !== 0 && year !== "" && password === confirmPassoword) {
                    handlePost();
                    alert("Successfully added")
                    handleClose();
                    window.location.reload();
                } else {
                    handleShow();
                    alert("Failed")
                }
            }}> Add </Button>
        </Modal.Footer>
      </Modal>

     
    


    </div>)
}

export default AddUsers;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect} from 'react';
import { AiFillEdit } from 'react-icons/ai' 
import axios from 'axios';

const EditUsers = ({regUser}) => {
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

const [datas, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data.filter((data) =>  (data.regno === regUser) 
      ));


 };

 useEffect(() => {
      loadData();

 }, []); 
 console.log()

const [ideaDetails ,setIdeaDetails] = useState({});
const handlePost = () => {
  axios.post('http://localhost:5000/editusers', {
    reg: regUser,
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
  <div className="" onClick={handleShow}> <AiFillEdit /> </div>


      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        {datas.map((item, index) =>{

              return(  <Form key={item.id}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Reg. No. </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Reg no"
                    value={item.regno}
                    autoFocus
                    onChange={fetchReg}
                    disabled
                  />
                {/* { reg == ""? <small className="red-danger">Reg. No. cannot be empty.</small>: ""} */}
    
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue={item.username}
                    onChange={fetchName}
                  />
    
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email ID </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email ID"
                    defaultValue={item.email_id}
                    onChange={fetchEmail}
                  />
    
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={fetchPassword}
                  />
                { password == ""? <small className="red-danger">Password is an optional to edit.</small>: ""}
    
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
                    defaultValue={item.stream}
                    onChange={fetchStream}
                  />
    
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Year </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Year"
                    defaultValue={item.year}
                    onChange={fetchYear}
                  />
    
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
    
    
              </Form>)
        })}
                    
                 
                    
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={ (title != "" && about != "")?  handlePost && handleClose : handleShow}>
            Submit
          </Button> */}

            <Button variant="primary" onClick={() => {
                if (reg !== "" || name !== "" || email !== "" || stream !== 0 || year !== "" || ( password !== "" && password === confirmPassoword)) {
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

export default EditUsers;
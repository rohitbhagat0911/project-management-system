import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect} from 'react';
import axios from 'axios';
import { GrView } from "react-icons/gr";


const ViewUsers = ({regUser}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [datas, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data.filter((data) =>  (data.regno === regUser) 
      ));


 };

 useEffect(() => {
      loadData();

 }, []);
  
    return(<div>

{/* { ideaDetails.affectedRow == 1? alert("Your idea is added successfully!!") && window.location.reload(): console.log("Shit")
      } */}
{/* 
<button className="" onClick={handleShow}>
        </button> */}
  <div className="" onClick={handleShow}> <GrView /></div>


      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Users Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {datas.map((item, index) =>{
                    
                    return(<Form key={item.id}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Reg. No. </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={item.regno}
                          disabled
                        />
          
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={item.username}
                          disabled
                        />
          
                      </Form.Group>
          
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email ID </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder={item.email_id}
                          disabled
                        />
          
                      </Form.Group>
               
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Stream </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={item.stream}
                          disabled
                        />
          
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Year </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={item.year}
                          disabled
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
          
          
                    </Form>);
                      
            }) }
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={ (title != "" && about != "")?  handlePost && handleClose : handleShow}>
            Submit
          </Button> */}

        </Modal.Footer>
      </Modal>

     
    


    </div>)
}

export default ViewUsers;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect} from 'react';
import axios from 'axios';
import { AiFillFolderAdd } from 'react-icons/ai'

const AddProjects = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [stream, setStream] = useState("");
  const [year, setYear] = useState("");
 

  const fetchTitle = (e) =>{
    setTitle(e.target.value.trim());
  }

  const fetchStream = (e) =>{
    setStream(e.target.value.trim());
  }

  const fetchYear = (e) =>{
    setYear(e.target.value.trim());
  }

  const fetchAbout = (e) =>{
    setAbout(e.target.value.trim());
  }

const [fields, setFields] = useState([{ name: '', reg: '', email: '' }]);
const [devNames, setDevNames] = useState([]);

const handleAddField = () => {
  setFields([...fields, { name: '', reg: '', email: '' }]);
};

const handleChange = (index, event) => {
  const values = [...fields];
  values[index][event.target.name] = event.target.value;
  setFields(values);
};

// const [image, setImage] = useState('');
// const [report, setReport] = useState('');
// const [ppt, setPpt] = useState('');

const [base64Image, setBase64Image] = useState('');
const [base64Report, setBase64Report] = useState('');
const [base64Ppt, setBase64Ppt] = useState('');

const [imageAlert, setImageAlert] = useState('');
const [reportAlert, setReportAlert] = useState('');
const [pptAlert, setPptAlert] = useState('');


const isPDF = (file) => {
  if (!file || !file.type) {
    return false;
  }
  const validPDFTypes = ['application/pdf'];
  return validPDFTypes.includes(file.type);
}

const handleReportChange = (event) => {
  const selectedFile = event.target.files[0];
  if (isPDF(selectedFile)) {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      // const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setBase64Report(reader.result);
      setReportAlert('true')
    };
  } else {
    setReportAlert('false')
    alert("Report should be in PDF format");
  }
}


const handlePptChange = (event) => {
  const selectedFile = event.target.files[0];
  if (isPDF(selectedFile)) {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setBase64Ppt(base64String);
    setPptAlert('true')
    };
  } else {
    setPptAlert('false');
    alert("PPT should be in PDF format");
  }
}

// const handleImageChange = (file) => {
//   const validImageTypes = ['image/png', 'image/jpeg'];
  
//   if (!file || !validImageTypes.includes(file.type)) {
//     setImageAlert('false')
//     return false;
//   }
  
//   setImageAlert('true')
//   return true;
  
// }
const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (!file) {
    setImageAlert('false')
    return;
  }
  const fileReader = new FileReader();

  fileReader.readAsArrayBuffer(file);

  fileReader.onload = () => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(fileReader.result))
    );
    setBase64Image(base64String);
    validateImageFile(file);
  };
};


const validateImageFile = (file) => {
  const validImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
  
  if (!file || !file.type || !validImageTypes.includes(file.type)) {
    setImageAlert('false')
  } 

  setImageAlert('true')
}

const [projectResponse ,setProjectResponse] = useState({});
// const handlePost = () => {
//   axios.post('http://localhost:5000/addprojects', {
//     title: title,
//     about: about,
//     stream, stream,
//     year: year
//   }).then((response) => {
//     setProjectResponse(response.data);
   
//   }).catch(err => console.log(err));


// }
const handleFiles = () => {

  // axios.post('http://localhost:5000/addfiles', {
    // image: base64Image,
    // report: base64Report,
    // ppt: base64Ppt
  // }).then((response) => {
  //   setProjectResponse(response.data);
  // }).catch(err => console.log(err));

  
    // , {
    //   headers: {
    //     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    //   }
    // }

   
    const formData = new FormData();
    formData.append('pdf', base64Report);
    console.log(formData)
    axios.post('http://localhost:5000/addfiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      }
    }).then((response) => {
      setProjectResponse(response.data);
    }).catch(err => console.log(err));
    
  

}

console.log(base64Report.length);

// const handleDevDetails = () => {
//   axios.post('http://localhost:5000/adddevdetails', {
//     dev: fields
//   }).then((response) => {
//     setProjectResponse(response.data);
   
//   }).catch(err => console.log(err));
// }


    return(<div>

{/* { ideaDetails.affectedRow == 1? alert("Your idea is added successfully!!") && window.location.reload(): console.log("Shit")
      } */}

<div onClick={handleShow}>
        <AiFillFolderAdd className="addprojects-icons"/>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Project..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                autoFocus
                onChange={fetchTitle}
              />
            { title == ""? <small className="red-danger">Title cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stream</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Stream"
                onChange={fetchStream}
              />
            { stream == ""? <small className="red-danger">Stream cannot be empty.</small>: ""}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Year"
                onChange={fetchYear}
              />
            { year == ""? <small className="red-danger">Year cannot be empty.</small>: ""}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                type="file"
                
                accept="image/*"
                onChange={handleFileUpload}
              />
            { imageAlert === ''? <small className="red-danger">Image cannot be empty.</small>: ""}
            { imageAlert === 'false'? <small className="red-danger">Image should be in png or jpeg format.</small>: ""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Report</Form.Label>
              <Form.Control
                required
                type="file"
                placeholder="Report"
                accept=".pdf"
                onChange={handleReportChange}
              />
            { reportAlert === ''? <small className="red-danger">Report cannot be empty.</small>: ""}
            { reportAlert === 'false'? <small className="red-danger">Report should be in PDF format.</small>: ""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PPT</Form.Label>
              <Form.Control
                required
                type="file"
                placeholder="PPT"
                accept=".pdf"
                onChange={handlePptChange}
              />
          { pptAlert === ''? <small className="red-danger">PPT cannot be empty.</small>: ""}
            { pptAlert === 'false'? <small className="red-danger">PPT should be in PDF format.</small>: ""}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
              required
              as="textarea" rows={3} 
              onChange={fetchAbout}
              />
            { about == ""? <small className="red-danger">Description cannot be empty.</small>: ""}
            { about.length >= 10000? <small className="red-danger">The description length should be less than 10000.</small>: ""}
            </Form.Group>

            {fields.map((field, index) => (
                <div key={index}><Form.Group className="mb-3"
                controlId="exampleForm.ControlTextarea1"> 

                  <Form.Label>{index + 1}. Developer Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={field.name}
                    onChange={(event) => handleChange(index, event)}
                  />
                  {fields[index].name == '' ? <small className="red-danger">Developer name cannot be empty.</small>: ""}
                </Form.Group> 
                
                <Form.Group className="mb-3"
                controlId="exampleForm.ControlTextarea1"> 

                  <Form.Label>Reg. no.</Form.Label>
                  <Form.Control
                    type="text"
                    name="reg"
                    defaultValue={field.reg}
                    onChange={(event) => handleChange(index, event)}
                  />
                  {fields[index].reg == '' ? <small className="red-danger">Reg no. cannot be empty.</small>: ""}
                </Form.Group>

                <Form.Group className="mb-3"
                controlId="exampleForm.ControlTextarea1"> 

                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    defaultValue={field.email}
                    onChange={(event) => handleChange(index, event)}
                  />
                  {fields[index].email == '' ? <small className="red-danger">Email cannot be empty.</small>: ""}
                </Form.Group>
                
                </div>
              ))}
            
            <Button variant="primary" onClick={handleAddField}>Add Developer</Button>


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

            <Button variant="primary" 
            onClick={() => {
                if (base64Report !== "" ){ 
                  // && (about !== "" && about.length <= 10000) && stream != "" && year != "" && base64Image != "" && base64Report != "" && base64Ppt != ""
                    // handlePost();
                    handleFiles();
                    // handleDevDetails();
                    alert("Successfully added")
                    // handleClose();
                    // window.location.reload();
                } else {
                    handleShow();
                    alert("Failed")
                }
            }}
            > Submit </Button>
        </Modal.Footer>
      </Modal>

     
    


    </div>)
}

export default AddProjects;
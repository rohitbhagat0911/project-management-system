import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ProjectModal.css'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sorry
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p className="modal-txt">
        You can't access this page unless you login with required credentials
        </p>
      </Modal.Body>
      {/* <Modal.Footer> */}
      <div className="btn-container">
        <Button className="btn-design" onClick={props.onHide}></Button>
        </div>
      {/* </Modal.Footer> */}
    </Modal>
  ); 
}



const ProjectModal = () => {

  const [modalShow, setModalShow] = React.useState(true);

  
    return(<div>
         

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

{modalShow == false? window.sessionStorage.removeItem('projectAccess'): "" }
{modalShow == false? window.sessionStorage.removeItem('ideaAccess'): ""}
{modalShow == false? window.sessionStorage.removeItem('specificPage'): ""}
{modalShow == false? window.sessionStorage.removeItem('adminAccess'): ""}

    </div>);
}

export default ProjectModal;
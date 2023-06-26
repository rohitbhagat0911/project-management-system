import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect} from 'react';
import axios from 'axios';
import "./MDropdown.css"

const logout = () => {
    window.sessionStorage.clear();
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h4 className="heading-model">My Profile</h4>
        </Modal.Title>
            
      </Modal.Header>
      <Modal.Body>
       <p className="border-sty">{window.sessionStorage.getItem('currentUserReg')}</p>
       <p className="border-sty">{window.sessionStorage.getItem('currentUser')}</p>
       {/* <p className="border-sty">{props.email}</p> */}
       <p className="border-logout"><a href="/" onClick={logout} className="logout-link">Log out</a></p>

      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

const MDropdown = (props) => {
  const [modalShow, setModalShow] = React.useState(true);


  // const [hpData, setHpData] = useState([]);

  //   const loadData = async () => {
  //        const response = await axios.get("http://localhost:5000/login");
  //        setHpData(response.data);
  //       // console.log(response.data)
  //   };

  //   useEffect(() => {
  //        loadData();
  //        return () => {
  //         setHpData([]); 
  //       };

  //   }, []);

// setState(LoginUSer);
        // console.log(hpData)

   
  return (
    <div>

<div>
                  
                    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
     
                
      />
                  </div>
          {/* {
            hpData.filter(hpDat => {
                  return hpDat.regno == window.sessionStorage.getItem('currentUserReg')
            }).map(hpDat => {
              return(
                 
              );
            })


          } */}

      {
        console.log("User: " + window.sessionStorage.getItem("currentUserReg"))
      }

      {/* {hpData.map((item, index) => {
        return(<div>
              

        </div>)
      })} */}

        
      


      {
          modalShow == false ? window.location.reload() :""
      }

      


    </div>
  );
}

export default MDropdown
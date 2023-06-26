import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ReportModal.css'
import { Viewer } from '@react-pdf-viewer/core';  
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';


const PpttModal = ({pptFile}) => {
    const [lgShow, setLgShow] = useState(false);

  
    return (
      <div>
        <Button className="report-button" onClick={() => setLgShow(true)}>View PPT</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              PPT
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="ppt-container">
          
          
<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl={`/uploads/ppt/${pptFile}`}
             />
      </Worker>

    
      </div>

          </Modal.Body>
        </Modal>
      </div>
    );
}

export default PpttModal;

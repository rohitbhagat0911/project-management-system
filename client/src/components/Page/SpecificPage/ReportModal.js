import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Viewer } from '@react-pdf-viewer/core';  
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 
import './ReportModal.css'


const ReportModal = ({pdfFile}) => {
    const [lgShow, setLgShow] = useState(false);
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    return (
      <div>
        {console.log(pdfFile)}
        <Button className="report-button" onClick={() => setLgShow(true)}>View Report</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="pdf-center"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Report
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {/* <iframe
        src = {`/uploads/pdf/robin.pdf`}
        frameBorder="0"
        scrolling="auto"
        height="80%"
        width="100%"
        aria-hidden="true"
    ></iframe> */}
<div className="pdf-container">
<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl={`/uploads/pdf/${pdfFile}`}
             />
      </Worker>

      </div>
            </Modal.Body>
        </Modal>
      </div>
    );
}

export default ReportModal;

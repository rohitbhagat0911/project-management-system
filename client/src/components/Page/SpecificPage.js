import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './SpecificPage.css'
import { useParams } from 'react-router-dom'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import ReportModal from './SpecificPage/ReportModal';
import PpttModal from './SpecificPage/PptModal';
import FooterStage from '../Body/FooterStage'
import {decode as base64_decode, encode as base64_encode} from 'base-64';


const SpecificPage = () => {

  const [data, setData] = useState([]);
  // const [dataLoading, setDataLoading] = useState(false);

  const loadData = async () => {
       const response = await axios.get("http://localhost:5000/api/get");
       setData(response.data);
       
  };

  useEffect(() => {
       loadData();
       return () => {
        setData([]); 
      };
  }, []);

// 
  const [image, setImage] = useState([]);
  const [state, setState]= useState([]);
  const loadImg = async () => {
    const response = await axios.get("http://localhost:5000/demo");
    setImage(response.data);
    
};

useEffect(() => {
    loadImg();
    return () => {
     setImage([]); 
   };
}, []);


// 

  const { p_id } = useParams();
  const { projectname } = useParams()

  const projectAccess = () => {
    if (window.sessionStorage.getItem('loginStatus') != "true") {
    window.sessionStorage.setItem("specificPage", "notEligible");
}
}


  let devArr = [];
  let gmailArr = [];

  // const temp = data.filter((it) =>  (it.project_title.toLowerCase().includes(projectname) && it.project_id.includes(p_id)) 
  //  )
  // const temp = data.filter((it) =>  (it.project_title.toLowerCase().includes(projectname) && it.project_id.includes(p_id)) 
  //  )
  //    console.log(temp.length == 1? "Can be done": "cant" );
  
  return (
    <div>

{(window.sessionStorage.getItem('loginStatus') != 'true')? projectAccess(): ""}
{window.sessionStorage.getItem('loginStatus') != 'true'? <Navigate to="/login" replace={true} /> : "" }

      
    <div className='specific-page-position'> 
      <div>
          {data.map((item) => {
            if(item.project_id == p_id) 
              return (
              <div key={item.id}>
              <div className='specific-page-title'><h1>{item.project_title}</h1>  </div>
                <div> <img className='specific-page-image' src={`/uploads/image/${item.image_name}`} /></div>
                              

                      <div className="button-flex"> 
                        {/* <a className='sp-link-problem' target='blank' href={`/uploads/pdf/${item.report_name}`}>View Report</a> */}
                            <ReportModal pdfFile={item.report_name} />
                                
                            <PpttModal pptFile={item.ppt_name}/>
                                 {/* <a className='sp-link-problem' href={`/uploads/ppt/${item.ppt_name}/view?`}>View PPT</a> */}
                                 
                        </div>

                        
                        <div className="desc-sty">
                          <div className="gen-info">
                          <h4>Year: {item.year}</h4>
                            <h4>Stream: {item.stream}</h4>
                          </div>
                        <h2>Description</h2>
                        <div className="desc-text">{item.project_desc}</div>
                        </div>
                          

                          <div className="dev-details"><h2>Developer Details</h2></div>
                        <div className="dev-info">
                         
                          <table className="fl-table">
                           <thead><tr>
                            <th>S. No.</th>
                                 <th>Developer Name</th>
                                 <th>Reg No.</th>
                                 <th>Gmail</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                            {item.dev_name.split(/[\/]/).map((i, index) => {
                            devArr = item.registration_no.split(/[\/]/)
                            gmailArr = item.dev_gmail.split(/[\/]/) 

                              return(<tr key={i}><td>{index + 1}</td><td>{i}</td><td>{devArr[index]}</td><td>{gmailArr[index]}</td></tr>);
                            })} 
                                  {/* console.log("Dev no." + (item.dev_name.match(/\//g) || []).length ) */}
                         
                                  
            
                          
                          </tbody>
                          </table>
                        </div>
                       


                </div>
            )
                             

    
    
   } )}
                     
  </div>

      </div>

      {/* {
        image.map((im) => {

                

          return(<div  key={im.id}>
            <h1>{im.heading}</h1>
                <div>
                   <iframe
        src = {`data:application/pdf;base64, ${base64_encode(im.img)}`}
        frameBorder="0"
        scrolling="auto"
        height="80%"
        width="100%"
        aria-hidden="true"
    ></iframe>
    {console.log(im.img)}
                </div>
          
         

          </div>
          )
        })
      } */}

      <FooterStage />
    </div>
  )
}

export default SpecificPage
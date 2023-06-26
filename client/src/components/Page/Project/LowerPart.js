import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import am from '../../../img/am.jpg';
import './LowerPart.css';

import { useParams } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import usePagination from './Pagination';


const LowerPart = ({data}) => {

let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

// console.log(_DATA.currentData());

  return (
    <div>
         {
  // (data.length < dataLength.length)? window.sessionStorage.setItem("toogleBtn", "true"): console.log("false")
        console.log("lower" + data.length)
        }



            <div>
             
                {
                data.length != 0? 
              
                
                _DATA.currentData().map((item, index) =>{
                    return (
                        <div key={item.id}>
                           <div className='main-backgroundd'>
                           <div className='project-title-mobile'>{item.project_title}</div>
                           <img className='project-img'  src={`/uploads/image/${item.image_name}`} width='200px' height='200px' alt='Project image' />
                           <div>
                            <div className='project-title'>{item.project_title}</div>
                            
               <div className='desc-pos'>{item.project_desc.split(' ').slice(0, 20).join(' ') + " ..."}</div>
              
               <div className='project-developer'>Stream: {item.stream} </div>
               <div className='project-year'>Year: {item.year} </div>
              
                
                    <div> 
                      <a className=' view-button link-problem' href={`/project/${item.project_title.toLowerCase()}/id=${item.project_id}/`}>View</a>
                     </div>

                     {/* { window.sessionStorage.getItem("userLevel") === '1'? <div className="ideasbody-title"> <AddProjects regUser={item.reg_id} heading={item.heading} /> </div> : ""} */}
                
                          </div>
               </div>
                        </div>
                    )
                })
                
               :
               <div>

<div className="empty-state">
  <div className="empty-state__content">
    <div className="empty-state__icon">
      <img src={"/uploads/image/cbimage.png"}/>
    </div>
    <div className="empty-state__message">No Data Found</div>
  </div>
</div>

              </div> }

{/* {console.log(yearValue + "\n" + streamValue)}

{console.log("Search: " + searchValue)}

{console.log(datas.filter(data => data.project_title.toLowerCase().includes("p")))}  */}
{data.length == 0? "" : 
              
 <div className="pagination-sty"><Stack alignItems="center"> 
  <Pagination  
       count={count}
        size="large"
        page={page}      
        color="primary"
        onChange={handleChange}
/></Stack></div>
}   
               </div>

             
           
         
    </div>
  )
}

export default LowerPart
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import './IdeasBody.css'

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import usePagination from '../Project/Pagination';
import am from '../../../img/am.jpg';
import EditIdeas from './EditIdeas'
import DeleteIdeas from './DeleteIdeas'


const IdeasBody = ({data}) => {

    let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

    return(
        <div>
            {
                data.length != 0?

                 _DATA.currentData().map((item, index) =>{
                    return(<div key={item.id}>

<div className="idea-box">
                    <div className="idea-title">{item.heading} </div>
                    <div className="idea-desc">{item.description}</div>
                    <div>

                    <div className="auth-pos">
                        <div>Stream: {item.stream}</div> 
                        <div>Year: {item.year}</div> 
                        </div> 
                        <div className="auth-pos">
                            <p className="idea-und"> Shared by: {item.author_name}</p>
                            <p className="idea-und">Regsiration ID: {item.reg_id}</p>
                        </div>

                        { window.sessionStorage.getItem("userLevel") === '1'? <div className="ideasbody-title"> <EditIdeas regUser={item.reg_id} heading={item.heading} desc={item.description} />  <DeleteIdeas regUser={item.reg_id}/> </div> : window.sessionStorage.getItem("currentUserReg") === item.reg_id?  <div className="ideasbody-title"><DeleteIdeas regUser={item.reg_id} /></div>: ""}
                        {/* { window.sessionStorage.getItem("currentUserReg") === item.reg_id?  <div className="ideasbody-title"><DeleteIdeasUser /></div>: ""} */}

                    </div>
           </div>



                    </div>)
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

              </div> 
            }
          

           <div className="temp"></div>
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
    )
}

export default IdeasBody;
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import "./UsersBody.css"
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
import ViewUsers from "./ViewUsers"
import EditUsers from "./EditUsers"
import DeleteUser from "./DeleteUser"




const UsersBody = ({data}) => {

    let [page, setPage] = useState(1);
    const PER_PAGE = 10;
  
    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);
  
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };
  
    return(<div>

<div className="table-layout">

<table className="user-table">
    <thead>
                        <tr>
                            <th>S. No.</th>
                <th>Reg. No.</th>
                <th>Course</th>
                <th>Year</th>
                <th>View</th>
            </tr>
            </thead>
            <tbody>

{

    
              
                 _DATA.currentData().map((item, index) =>{
                    
                    return(<tr key={item.id}>
                        <td>{index + 1}</td>
            <td>{item.regno}</td>
            <td>{item.stream}</td>
            <td>{item.year}</td>
            <td><div className="usersbody-view-icons"> <ViewUsers regUser={item.regno} /> <EditUsers regUser={item.regno}/> <DeleteUser regUser={item.regno}/> </div> </td>


                    </tr>)
                })


               
            }
            </tbody>
            <tfoot></tfoot>
            </table>
            </div>

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

    </div>)
}

export default UsersBody;
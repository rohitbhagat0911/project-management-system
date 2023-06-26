import React, { useState, useEffect} from 'react'
import "./Users.css"
import axios from 'axios';
import UsersBody from './Users/UsersBody';
import AddUsers from './Users/AddUsers'



const Users = () => {

    const [datas, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setData(response.data);


   };

   useEffect(() => {
        loadData();

   }, []);

   const [searchValue, setSearchValue] = useState("");
  

  const fetchSearchData = (e) =>{
    setSearchValue(e.target.value.toLowerCase());

  }

   const [submitStatus, setSubmitStatus] = useState(false);
const [searched, setSearched] = useState([]);


   const handleSearch = (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    const temp = datas
    .filter((data) =>  ( data.regno.toLowerCase().includes(searchValue) || data.stream.toLowerCase().includes(searchValue) || data.year.toLowerCase().includes(searchValue)) 
     )
    
    setSearched(temp)
    
    
     console.log(searched)
    
 }

    return(<div>

        <form className="users-pos" onSubmit={handleSearch}>
        <input type="search" placeholder="Search" className="input-search" onChange={fetchSearchData}  />

        <div className="button-group">
            <input type="submit" value="Search" className="button-style" onSubmit={handleSearch} />
            {/* <input type="button" value="Add" className="button-style"  />  */}
            <AddUsers />

        </div>
        </form>

        
                {submitStatus == true? <UsersBody data={searched}/> : <UsersBody data={datas}/> } 

        

    </div>)
}

export default Users

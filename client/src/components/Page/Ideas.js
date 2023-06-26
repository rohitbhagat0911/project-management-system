import React, { useState, useEffect} from 'react'
import './Ideas.css'
import Dropdown from './Project/Dropdown';
import DropdownStream from './Project/DropdownStream';
import IdeasBody from './Ideas/IdeasBody';
import axios from 'axios';
import AddIdeas from './Ideas/AddIdeas';



const Ideas = () => {

  const [datas, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/ideas");
        setData(response.data);


   };

   useEffect(() => {
        loadData();

   }, []);

   const [submitStatus, setSubmitStatus] = useState(false);
  
  
  const [yearValue, setYearValue] = useState("");

  const dataToProject = (data) =>{
    setYearValue(data);
  }

  const [streamValue, setStreamValue] = useState("");

  const streamDataToProject = (streamData) => {
      setStreamValue(streamData);
  }

  const [searchValue, setSearchValue] = useState("");
  

  const fetchSearchData = (e) =>{
    setSearchValue(e.target.value.toLowerCase());

  }
console.log(yearValue);

const keys = ["heading", "author_name", "stream", "reg_id", "year"]
const [searched, setSearched] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    const temp = datas
    .filter((data) =>  (( data.heading.toLowerCase().includes(searchValue) || data.reg_id.toLowerCase().includes(searchValue) || data.author_name.toLowerCase().includes(searchValue)) && data.year.includes(yearValue) && data.stream.toLowerCase().includes(streamValue)) 
     )
    
    setSearched(temp)
    
    
     console.log(searched)
    
 }


    return (
        <div>
         
         <div className="idea-pos">
                <div className="demo">
                    <div className="pos-layout">
                        <div><h2>Want to share your ideas?</h2></div>
                        <div>
                          {/* <input className='add-button' value="SHARE"/> */}
                         <AddIdeas />
                          </div>
                    </div>
                </div>

                <div className='idea-background'>
            <form className="search-idea" onSubmit={handleSearch}>
              <input type="search" placeholder="Search.." className="search-inputs" onChange={fetchSearchData} />
                  <div className="dropdown-idea">
                        <div> <Dropdown dataToProject={dataToProject} /> </div>
                        <div><DropdownStream streamDataToProject={streamDataToProject} /></div>
                  </div>
                
            <button className='login-buttonn'></button>
            </form>
            </div>

            <div className='white-card-r'>
                {submitStatus == true? searchValue !=""? "Search: \"" + searchValue+ "\"": "Recent Ideas"   : "Recent Ideas"}  {submitStatus == true? yearValue !=""?  "Year: \"" + yearValue + "\"" : "": ""} 
                {submitStatus == true? streamValue !=""? " Stream: \"" + streamValue.toUpperCase() + "\"":"": ""}
                </div>
           

                {submitStatus == true? <IdeasBody data={searched}/> : <IdeasBody data={datas}/> } 

                
         </div>

        </div>
    )
}
export default Ideas;
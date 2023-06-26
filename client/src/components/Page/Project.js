import react, { useState, useEffect } from 'react'
import './Project.css'
import Dropdown from './Project/Dropdown';
import DropdownStream from './Project/DropdownStream';
import LowerPart from './Project/LowerPart';
import FooterStage from '../Body/FooterStage'
import axios from 'axios';
import am from '../../img/am.jpg';
import AddProjects from './Project/AddProjects'

const Project = () => {

  
  const [datas, setData] = useState([]);

    const loadData = async () => {
         const response = await axios.get("http://localhost:5000/api/get");
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

const keys = ["project_title", "year", "stream"]
const [searched, setSearched] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    const temp = datas
    .filter((data) =>  (data.project_title.toLowerCase().includes(searchValue) && data.year.includes(yearValue) && data.stream.toLowerCase().includes(streamValue)) 
     )
    
    setSearched(temp)
    
    
     console.log(searched)
    
 }

  // const keys = ["project_title", "year", "stream"]
  // keys.some((key) => data[key].toLowerCase().includes(searchValue))
  // (data.project_title.toLowerCase().includes(searchValue) && data.stream.toLowerCase().includes(streamValue))
//   const search = (inputData) => {
//     return inputData.filter((data) =>  data.year.includes("")
//    || (data.project_title.toLowerCase().includes(searchValue) && data.stream.toLowerCase().includes(streamValue))
    

//   );
// };

  

  return (<div>
          <div className="project-p">
      
      <div className="project-pos">
        <div className="proj-par">
          <div className="project-par">
          
    
            <div className='main-background'>

            <form className="search-form" onSubmit={handleSearch}>
              <input type="search" placeholder="Search.." className="search-input" onChange={fetchSearchData} />
                  <div className="dropdown-align">
                        <div> <Dropdown dataToProject={dataToProject} /> </div>
                        <div><DropdownStream  streamDataToProject={streamDataToProject} /></div>
                  </div>
                
                <div className="project-button"> <button className='login-buttonn'></button>
            { window.sessionStorage.getItem("userLevel") === '1'? <AddProjects />: ""}</div>
            
            </form>
            </div>

          
      {/* <div className='card-background'>
                
                </div> */}

                <div className='white-card-r'>{submitStatus == true? searchValue !=""? "Search: \"" + searchValue+ "\"": "Recent Project"   : "Recent Projects"}  {submitStatus == true? yearValue !=""?  "Year: \"" + yearValue + "\"" : "": ""} 
                {submitStatus == true? streamValue !=""? " Stream: \"" + streamValue.toUpperCase() + "\"":"": ""}</div>
           
              
               {submitStatus == true? <LowerPart data={searched}/> : <LowerPart data={datas}/> } 
          {console.log( "status "+submitStatus)}
          
          </div>
   
                 
        </div>
{/* -> already commneted */}
{/* <select class="select" id="dropdown" name="multi-option" required>
            <option disabled selected value>Select your option</option>
            <option value="student">Student</option>
            <option value="fulltimejob">Full Time Job</option>
            <option value="parttimejob">Part Time Job</option>
            <option value="fulltimelearner">Full Time Learner</option>
            <option value="prefernotsay">Prefer not to say</option>
            <option value="other">Other</option>
            </select> */}
      </div>
      {/* <div className='main-background'></div> */}

      
      </div>

       <FooterStage />
  </div>);
};

export default Project;

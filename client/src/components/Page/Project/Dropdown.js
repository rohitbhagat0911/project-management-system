import react, { useState } from 'react'
import './Dropdown.css'


const Dropdown = ({dataToProject}) => {

  // const getInitialState = () => {
  //   const firstValue = "Year";
  //   console.log("Selected Value" + firstValue);
  //   return firstValue;
  // };

  // const [firstValue, setFirstValue] = useState("year");

  const handleChange = (e) => {
    dataToProject(e.target.value);
  };


  return (<div> 
        
          <div className="dropdown-pos">
      <div className="select-style">
            <select className='opt' defaultValue={"Year"} onChange={handleChange}>
            <option value="Year" disabled>Year</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            </select>
          </div>

          </div>

        
  </div>);
};

export default Dropdown;

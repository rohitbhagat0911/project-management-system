import react, { useState } from 'react'
import './DropdownStream.css'

const DropdownStream = ({streamDataToProject}) => {

  // const getInitialState = () => {
  //   const secondValue = "Stream";
  //   console.log("Selected Value" + secondValue);
  //   return secondValue;
  // };

  // const [secondValue, setSecondValue] = useState("stream");

  const handleChange = (e) => {
    streamDataToProject(e.target.value);
  };


  return (
    <div>
         <div className="dropdown-poss">
      <div className="select-stylee">
            <select className='selectt' defaultValue={'Stream'} onChange={handleChange}>
            <option  value="Stream" disabled>Stream</option>
            <option value="bca">BCA</option>
            <option value="b.sc.it">B.Sc. IT</option>
            <option value="mca">MCA</option>
            <option value="others">Others</option>
            </select>
          </div>
          </div>

         
    </div>
  )
}

export default DropdownStream
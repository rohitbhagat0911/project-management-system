import Slider from './Slide/Slider'
import SlideData from './Slide/SlideData'
import './FourthStage.css'

const FourthStage = () => {
  return (<div>
      <div className='slider-pos'></div>
      
      <div className='slider-sty'> 
      <Slider heading="Example Slider" slides={SlideData} />
      </div>

      {/* <div style={{border: '1px solid black', height: '12em', paddingTop:'12em', marginTop:'40em'}}></div> */}
      
       </div>);
};

export default FourthStage;

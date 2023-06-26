import './FooterStage.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'

const FooterStage = () => {
  return (<div>
      
      {/*  */}
  
        <div className="pos">
            <footer className="section bg-footer">
            <div className="text-center">
                    <div className="">
                        <h6 className="pos" className="footer-heading">Contact Us</h6>
                        <div className="footer-heading-und"></div>
                        <p className="contact-info mt-4">projectmanagementsystem@official.com</p>
                        <p className="contact-info"><a className="underline-style" href="tel:+91 89728 16075">+91 89728 16075 </a></p>
                        <p className="contact-info"><a className="underline-style" href="tel:+91 73846 19742">+91 73846 19742 </a></p>
                        <div className="mt-5">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://www.instagram.com/shekhar_sharma_553/" target="_blank"> <BsFacebook className="logo-design facebook"/></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/rohitbhagat_09/" target="_blank"><BsInstagram className="logo-design instagram"/></a></li>
                                <li className="list-inline-item"><a href="mailto:youngshuttlersofsikkim@gmail.com?subject=subject&cc=projectmanagementsystem@official.com" target="_blank"><FaGoogle className="logo-design google"/></a></li>
                              {/* <!-- <li class="list-inline-item"><a href="#"><i class="fab instagram footer-social-icon fa-insta"></i></i></a></li> --> */}
                            </ul>
                        </div>
          </div>
          </div>
          <div className="text-center mt-5 developer-style">
            <p className="footer-alt mb-0 f-14"><a className="developer-a" href="./developer.php" target="_blank">2022 © All Rights Reserved by Rohit Kr. Bhagat &amp; Shekhar Sharma</a></p>
        </div>
</footer>
    </div>

    
      {/*  */}

  </div>);
};

export default FooterStage;

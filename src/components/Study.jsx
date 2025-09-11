import React from "react";
import "./Study.css";
import '../Assets/banner-bg.png';

import imge from '../Assets/college.png';
import img from '../Assets/course.png';
import imgs from '../Assets/intern.png';




const Educate = () => {
    return(
        <div className="education">
            <div className="education-nav" id="Education-section">
              <h2><span>EDU</span>CATION</h2>
              <p>I have a strong academic background in <span>Computer Application</span> , having completed my <span>BCA</span> from <span>Bharathidhasan University</span>. I'm passionate about using my full-stack development knowledge to solve real-world problems.</p>
            </div>
            <div className="education-content">
                
                    <div className="education-header">
                     <img className="pic" src={imge} alt=""></img>
                    
                      <h3>Bachelor of Computer Applicaion</h3>
                      <p>JJ College of Arts & Science, 2022 - 2025</p>
                      <p>GPA: 72.50%</p>
                    
                </div>

                <div className="education-header">
                    <img className="pic" src={img} alt=""></img>
                    
                        <h3>Full Stack Web Development</h3>
                        <p>Techmind Infotech, </p>
                        <p>2024 - 2025</p>                    
                </div>


                 <div className="education-header">
                    <img className="pic" src={imgs} alt=""></img>
                    
                        <h3>Full Stack Web Development Using ReactJS</h3>
                                         
                </div>
           

               
            </div>
        </div>    
    )
}
export default Educate;
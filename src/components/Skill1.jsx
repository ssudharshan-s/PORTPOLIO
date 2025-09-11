import React from 'react';
import './Skill1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faJs,faNodeJs, faJava, faGithub} from '@fortawesome/free-brands-svg-icons';
import { SiExpress} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const Skill1 = () =>{
    return(
        <div className='skill' id='Skills-section'>
            <h2><span>SKI</span>LLS</h2>
            <p>Proficient in HTML, CSS, and JavaScript, with strong knowledge of React.js for building dynamic and responsive user interfaces. Experienced in working with MongoDB for database management and integration. Skilled in creating modern, user-friendly web applications with clean design and optimized performance. Passionate about learning new technologies and delivering efficient solutions.</p>
            <div className='skill-list'>
                <div className='skill-box'>
                    <h3>Fornt End :</h3>
                    <ul>
                    <li><FontAwesomeIcon icon={faHtml5} />HTML</li>
                    <li><FontAwesomeIcon icon={faCss3Alt} />CSS</li>
                    <li><FontAwesomeIcon icon={faReact} />REACT JS</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    </ul>
                </div>
                <div className='skill-box'>
                    <h3>Back End :</h3>
                    <ul>
                    <li><FontAwesomeIcon icon={faNodeJs} />Node JS</li>
                    <li><FontAwesomeIcon icon={faJava} />JAVA</li>
                    <li><SiExpress />EXPRESS JS</li>
                    </ul>
                </div>
                <div className='skill-box'>
                    <h3>DataBase :</h3>
                    <ul>
                    <li><FontAwesomeIcon icon={faHtml5} />HTML</li>
                    <li><FontAwesomeIcon icon={faCss3Alt} />CSS</li>
                    <li><FontAwesomeIcon icon={faReact} />REACT JS</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    </ul>
                </div>
                <div className='skill-box'>
                    <h3>Tools :</h3>
                    <ul>
                    <li><FontAwesomeIcon icon={faGithub} />Github</li>
                    <li><VscVscode />VS Code</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Skill1;
import React,{useEffect} from "react";
import './Container.css';
import img from '../Assets/header-img.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../Assets/1.pdf";



const Container = () =>{
    useEffect(() => {
        AOS.init({duration: 1000}); // AOS initialization with a duration of 1000ms
    },[]);
    return(
        <div className="container" id="Hero-section">
            <div className="content" data-aos="fade-right">
                <h2 >Hi! I'm SUDHARSHAN Web Developer</h2>
                <p>This is My portfolio</p>
                <a className="con" href={resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
            </div>
            <div className="image">
               <img className="img" src={img} alt=""></img>
            </div>



        </div>
    )

}
export default Container;
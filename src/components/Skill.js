import React,{useEffect}from 'react';
import { useLocation } from "react-router-dom";
import Skill1 from './Skill1';


const Skill = () =>{
      const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return(
        <div className='App'>
         <Skill1/>
        </div>
    );
}

export default Skill;
import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Educate from "./Study";

const Education = () => {
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
        <div className="App">
            <Educate/>
        </div>
    )
}
export default Education ;
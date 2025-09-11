import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Connect from "./Contact1";

const Contact = () => {
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
            <Connect/>
        </div>
    );
}

export default Contact;
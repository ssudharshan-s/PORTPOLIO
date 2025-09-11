import React,{ useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from './Container';

const Home = () =>{
      const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


      return (
    <div className="App">
      <Container/>
    </div>
  );
}

export  default Home ;
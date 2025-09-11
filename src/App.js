import React,{useEffect, useState} from 'react';
import {Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import Container from './components/Container';
import Home from './components/Home';
import Education from './components/Education';
import Contact from './components/Contact';
import Skill from './components/Skill';
import GetinTouch from './components/GetinTouch';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App(){
    const location= useLocation();
    const [showSections, setShowSections] = useState(false);

    useEffect(() => {
        const scrollTarget = location?.state?.scrollTo;
        if (scrollTarget) {
            const section = document.getElementById(scrollTarget);
            if (section) {
                section.scrollIntoView({ behavior: "smooth"});
            }
        }

        const timer = setTimeout(() => {
            setShowSections(true);
        },1000);

        return () => clearTimeout(timer);
    }, [location]);

     useEffect(() => {
        Aos.init({ 
         duration: 500,
         once: true,
        });
     },[]);

    return (
        <div className="App">
            <NavBar/>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Container />
                            {showSections &&(
                                <>
                                   <Education />
                                   <Skill  />
                                   <Contact />
                                   <GetinTouch />
                                </>
                            )}
                        </>
                    }
                />

                 <Route
                    path="/Home"
                    element={
                        <>
                            <Home />
                            {showSections &&(
                                <>
                                   <Education />
                                   <Skill  />
                                   <Contact />
                                   <GetinTouch />
                                </>
                            )}
                        </>
                    }
                />
                
            </Routes>
            
        </div>
    );
}


export default App;

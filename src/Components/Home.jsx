import React, { useState, useEffect} from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import Navbar from './Navbar.jsx'
const Home = () => {
    // const navigate = useNavigate();
    // const GoLogin = () =>{
    //     navigate('/test');
    // }

    // useEffect(()=>{
    //     const EnterClick = (e) =>{
    //         if(e.code === "Enter"){
    //             console.log(e.code)
    //             GoLogin();
    //         }
    //     };
    //     window.addEventListener('keydown',EnterClick);
    //     return()=>{
    //         window.removeEventListener('keydown',EnterClick);
    //     }
    // },[])
    
    return(
        
        <>
        <Navbar/>
        </>
    )
}
export default Home;
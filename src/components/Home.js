import React from 'react'
import '../App.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


export default function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `browse`; 
    navigate(path);
  }

  return (
    <div className='home-div'>
      <div class="home-content">
        <h1 style={{fontWeight: '900', fontSize:'62px', color:'white', textShadow:'1px 0 black, 0 2px black, 1px 0 black, 0 2px black'}}>Welcome to Movie Blink!!</h1>
        <p style={{fontSize:'22px',color:'white'}}>Discover Your Next Adventure: Endless Movies, Infinite Stories, One Click Away!</p>
        <Button className='browse-button' style={{background:'black',border:'none'}} onClick={routeChange}>Browse<FaArrowRight style={{marginLeft:'15px'}}/></Button>
      </div>
    </div>
  )
}

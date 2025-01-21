import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import { Github } from 'flowbite-react-icons/solid'
import { Linkedin } from 'flowbite-react-icons/solid'
import { Facebook } from 'flowbite-react-icons/solid'
import { Whatsapp } from 'flowbite-react-icons/solid';
import { Envelope } from 'flowbite-react-icons/solid';
import DP from '../assets/DP.jpg'


function NavBar() {

  const [activeLink, setActiveLink] = useState( 'home' )
  const [scroll, setScroll] = useState(false)

  useEffect(() => {

    const onScroll = () => {

      if(window.scrollY >50){
        setScroll(true)
      }  else{
        setScroll(false)
      }

    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (val) => {

    setActiveLink(val)

  }
  return (
    
      <Navbar expand="lg" className={scroll?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={DP} alt="Profile image" className='profile-image' onClick={() => onUpdateActiveLink('home')}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'inactive navbar-link' } onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'inactive navbar-link'} onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'inactive navbar-link'} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#education" className={ activeLink === 'education' ? 'active navbar-link' : 'inactive navbar-link'} onClick ={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>

                    <a href = "https://github.com/Saha-Kuljit-Shantanu"><Github filter= "drop-shadow" color = "#646cffaa"/></a>
                    <a href = "https://www.linkedin.com/in/saha-kuljit-shantanu-081b5033b/"><Linkedin filter= "drop-shadow" color = "#646cffaa"/></a>
                    <a href = "https://www.facebook.com/rohan.saha.5621149"><Facebook filter= "drop-shadow" color = "#646cffaa"/></a>
                    <a href = "https://wa.me/8801842352155?text=Hello%20there!" target="_blank" ><Whatsapp filter= "drop-shadow" color = "#646cffaa"/></a>


                </div> 

                <div className='social-icon'>
                  <a href="mailto:sahakuljitshantanubuet@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you" ><Envelope color = "#61dafbaa"/></a>  
                </div>

                
            </span>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      
    
  );
}

export default NavBar;
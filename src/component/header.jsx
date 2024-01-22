import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import headlogo from "../assets/image 4.png";
import vector0 from "../assets/group.png";
import vector1 from "../assets/facebook.png";
import vector2 from "../assets/instagram.png";
import vector3 from "../assets/twitter.png";
import vector4 from "../assets/youtube.png";
import{ Routes, Route } from "react-router-dom";
import{ Link} from "react-router-dom";
import review from './data';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header = () =>{
 
  return (
      <div className='header'>

        <div className='head'>
            
            <Link to="/">
              <div className='logoall'>
               <img src={headlogo} className='headlogo'/>
              </div>
            </Link>

        <div className='searchinput'>
            <FaSearch  className="searchicon"/>
            <input type='text' placeholder='Search this site...' className='search'/>
        </div>
        
      
        </div>

     <div className='navall'>

      <div className='navs'>
<Navbar expand="sm">
  <Container>
    
    <Navbar.Toggle aria- controls="basic-navbar-nav"/>
  <Navbar.Collapse id='basic-navbar-nav'>

<Nav className='me-auto' >
<Nav.Link href='#home' className='text-success   al'>HOME</Nav.Link>
  <NavDropdown  title='ABOUT US' id='basic-nav-dropdown' className='al'>
   <NavDropdown.Item href='#action/2.1'>Overview</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.2'>Organogram</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.3'>NCDMB Management</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.4'>Governing Council</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.5'>Transformation Projects</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.6'>Corporate Social Responsibility</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/2.7'>Frequently Asked Questions</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='MEDIA' id='basic-nav-dropdown' className='al'>

    <NavDropdown.Item href='#action/3.1'>Press Release</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/3.2'>Videos</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/3.3'>Local Content Digest Magazine</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/3.4'>News Letter</NavDropdown.Item>
  
  </NavDropdown>
  <NavDropdown title='SERVICE' id='basic-nav-dropdown' className='al'>
    <NavDropdown.Item href='#action/4.1'>Service Charter</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/4.2'>Services and Procedures</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/4.3'>Capacity Building</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/4.4'>Monitoring and Evaluation</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/4.5'>Research & Statistics </NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='CREATE SECTOR' id='basic-nav-dropdown' className='al '>

    <div className='ol'>
    <NavDropdown.Item href='#action/5.1'>Agriculture</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.2'>Real Estate</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.3'>Transportation</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.4'>Construction</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.5'>Petroleum industry</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.6'>Finance</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.7'>Education</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.8'>Manufacturing</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.9'>Forestry</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.10'>Retail</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#action/5.11'>Mining and quarrying</NavDropdown.Item>
   
    </div>
  </NavDropdown>
  <Nav.Link href='#contact' className='text-success   al' >CONTACT US</Nav.Link>
</Nav>


</Navbar.Collapse>
  </Container>

</Navbar>
       </div>
      
     

        <div className='mail'>
       <span><img src={vector0 } className='vecimg'/></span>
        <span>authority@nmdpra.gov.ng</span>
        
       <span><img src={vector1 } className='vecimg'/></span>
       
       <span><img src={vector2 } className='vecimg'/></span>
       
       <span><img src={vector3 } className='vecimg'/></span>
       
       <span><img src={vector4 } className='vecimg'/></span>
        </div>

        </div>

    </div>
  )
}

export default Header;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
      <Navbar.Brand img href="#home">
        <i class="fa-solid fa-people-group fa-2x"></i> 
         <strong className='ms-3 fs-2 me-3'> Employee Management System</strong> </Navbar.Brand>
      </Link>
        
        
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">User</Nav.Link>
            <Nav.Link href="#deets">Search   </Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default props => (
<div>
    <Navbar bg="purple" variant="dark">
        {/* Logo menu */}
        <Navbar.Brand href="todos">
            <i className="fa fa-calendar-check-o" ></i> 
            TodoApp
        </Navbar.Brand>
        {/* menu body */}
        <Nav className="mr-auto">
            <Nav.Link href="todos" >Todo</Nav.Link>  
            <Nav.Link href="About">About</Nav.Link>
        </Nav>
    </Navbar>
</div>
)

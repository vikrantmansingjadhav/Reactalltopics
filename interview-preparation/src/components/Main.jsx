import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


 const Main = () => {

      return(
      
        <>

       
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             
             <NavLink to="/Main" className="nav-link">GrandParent</NavLink>

             <NavLink to="/Countprops" className="nav-link">Count Props</NavLink>

             <NavLink to="/Conditionalrendering" className="nav-link">Conditional-Rendering</NavLink>

             <NavLink to="/Apicalluseeffect" className="nav-link">Api Call Useeffect</NavLink>
            
             <NavLink to="/Navigate" className="nav-link">Navigate</NavLink>

             
             <NavLink to="/Dashboard" className="nav-link">Dashboard</NavLink>

             <NavLink to="/Userefhook" className="nav-link">Userefhook</NavLink>


             <NavLink to="/Filter" className="nav-link">Filter</NavLink>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

         
        </>

      )

 }

 export default Main;
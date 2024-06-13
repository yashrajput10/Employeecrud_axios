import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addData } from '../../services/action/employee.action';


function Header(data) {
    const dispatch = useDispatch();

    const handelClick =()=>{
        console.log("done");
        dispatch(addData(data));
    }

    return (
        <Navbar expand="lg" className="bor p-2 card_1 col-12">
            <Container>
                <Navbar.Brand href="/" className='me-5 text-bg-dark  ps-4 pe-4 me-5 rounded'><i class="fa-brands fa-earlybirds fa-2xl"></i>EMPLOYEES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginRight:'20px',marginLeft:'100px'}}>Home</NavLink>
                        <NavLink to="/View" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginRight:'20px',marginLeft:'5px' }}>View</NavLink>
                        <NavLink to="/View" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginRight:'20px',marginLeft:'5px' }}>Services</NavLink>
                        <NavLink to="/View" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginRight:'20px',marginLeft:'5px' }}>About</NavLink>
                    </Nav>
                    <Button variant='dark' onClick={handelClick}>
                        Add
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;


import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Nav.Link as={Link} to="/UserLogin">UserLogin</Nav.Link>
                    <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                </Nav>
            </Navbar>

            
        </div>
    );
}

export default Header;

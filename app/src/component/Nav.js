import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Link to='/' className='navbar-brand'>
                    {/* <Navbar.Brand> */}
                    Staff Scheduling App
                    {/* </Navbar.Brand> */}
                </Link>

                <Nav className="me-auto">
                    <Link to='/' className='nav-link'>
                        {/* <Nav.Link> */}
                        Home
                        {/* </Nav.Link> */}
                    </Link>
                    <Link to='/shifts' className='nav-link'>
                        {/* <Nav.Link> */}
                        All Shifts
                        {/* </Nav.Link> */}
                    </Link>
                    <Link to='/staff' className='nav-link'>
                        {/* <Nav.Link> */}
                        Staff
                        {/* </Nav.Link> */}
                    </Link>
                    <Link to='/new-shift' className='nav-link'>
                        {/* <Nav.Link> */}
                        New Shift
                        {/* </Nav.Link> */}
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
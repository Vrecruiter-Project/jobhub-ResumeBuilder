import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/JOBHUB_lOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar
        key="md"
        expand="md"
        style={{
          backgroundColor: '#ffffff',
          color: '#07588a',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 10,
          padding: '10px 20px',
          height:{xs:'10px', md:'0px', lg:'20px'}
        }}
      >
        <Container fluid>
          <Navbar.Brand href="https://www.jobhub.world/" className="d-flex align-items-center">
            <img src={Logo} alt="JobHub Logo" width={100} className="me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            style={{ backgroundColor: '#ffffff' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
                style={{ color: '#07588a' }}
              >
                <Navbar.Brand href="https://www.jobhub.world/" className="d-flex align-items-center">
            <img src={Logo} alt="JobHub Logo" width={100} className="me-2" />
          </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  to="/"
                  className="nav-link me-4"
                  style={{
                    color: '#333',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'green')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#07588a')}
                >
                  Resume Templates
                </Link>
                <Link
                  to="/myresume"
                  className="nav-link me-4"
                  style={{
                    color: '#333',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'green')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#07588a')}
                >
                  My Resume
                </Link>
                {/* <Link
                  to="/about"
                  className="nav-link"
                  style={{
                    color: '#333',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'green')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#07588a')}
                >
                  About Us
                </Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

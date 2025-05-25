import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    const location = useLocation();

    return (
        <Navbar
            expand="lg"
            style={{ backgroundColor: '#00B9F2' }}
            variant="dark"
            className="shadow"
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}
                >
                    Платформа за ментално здравје
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        {[
                            { to: '/', label: 'Почетна Страна' },
                            { to: '/mood-tracker', label: 'Следење на расположение' },
                            { to: '/hbsc-data', label: 'Обработени податоци' },
                        ].map(({ to, label }) => (
                            <Nav.Link
                                as={Link}
                                to={to}
                                key={to}
                                active={location.pathname === to}
                                style={{
                                    marginLeft: '15px',
                                    fontWeight: location.pathname === to ? '700' : '500',
                                    fontSize: location.pathname === to ? '1.2rem' : '1rem',
                                    color: location.pathname === to ? '#ffffff' : 'white',
                                    transition: 'font-size 0.3s ease',
                                }}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;

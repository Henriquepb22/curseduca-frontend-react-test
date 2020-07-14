import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img src="./images/logo.png" alt="Curseduca" />
            </Navbar.Brand>
        </Navbar>
    );
};

export default Header;

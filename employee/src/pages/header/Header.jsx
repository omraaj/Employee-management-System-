import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Header.css'
const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavbarBrand to="/">
            <strong>Employee Management System</strong>
          </NavbarBrand>
          <Nav className="ml-auto">
            <NavLink  as={Link} to={"/"} className="nav-link"> Employees</NavLink>
            <NavLink  as={Link} to={"/employee"} className="nav-link"> Add Employee</NavLink>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

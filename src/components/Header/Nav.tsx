import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const Nav = () => (

<Navbar color="dark" expand="md">
    <NavbarBrand href="/">Fakelandia Justice Department</NavbarBrand>
    <NavItem>
        <NavLink to='/misdemeanour'>Misdemeanours</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to='/confession'>Confess to Us</NavLink>
    </NavItem>
</Navbar>
);

export default Nav;
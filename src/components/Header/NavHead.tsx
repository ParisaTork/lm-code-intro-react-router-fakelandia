import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavHead = () => {
  return (
    <Navbar color="dark" expand="xl">
        <NavbarBrand href="/">Fakelandia Justice Department</NavbarBrand>
        <NavItem>
            <NavLink to='/misdemeanour'>Misdemeanours</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/confession'>Confess to Us</NavLink>
        </NavItem>
    </Navbar>
  )
}

export default NavHead;
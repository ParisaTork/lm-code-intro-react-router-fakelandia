import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavHead = () => {
  return (
    <Navbar color="dark" id="navhead">
        <NavbarBrand href="/" id="logo"><img src="./fjd.png" alt="FJD logo" id="fjd"/></NavbarBrand>
        <NavItem>
            <NavLink to='/misdemeanour' className="linkText">Misdemeanours</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/confession' className="linkText">Confess to Us</NavLink>
        </NavItem>
    </Navbar>
  )
}

export default NavHead;
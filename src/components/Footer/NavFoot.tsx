import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavFoot = () => {
  return (
    <Navbar color="dark" expand="xl">
        <NavbarBrand href="https://github.com/ParisaTork">© Parisa Tork</NavbarBrand>
    </Navbar>
  )
}

export default NavFoot;
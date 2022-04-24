import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const NavHead = () => {
  return (
    <Navbar color="dark" id="navhead">
        <NavbarBrand tag={Link} to="/" id="logo"><img src="./fjd.png" alt="FJD logo" id="fjd"/></NavbarBrand>
    </Navbar>
  )
}

export default NavHead;
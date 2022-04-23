import { Navbar, NavbarBrand } from "reactstrap";

const NavHead = () => {
  return (
    <Navbar color="dark" id="navhead">
        <NavbarBrand href="/" id="logo"><img src="./fjd.png" alt="FJD logo" id="fjd"/></NavbarBrand>
    </Navbar>
  )
}

export default NavHead;
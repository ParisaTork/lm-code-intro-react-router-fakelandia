import { Navbar, NavbarBrand } from "reactstrap";

const NavFoot = () => {
  return (
    <Navbar color="dark" expand="xl" id="navfoot">
        <NavbarBrand>In Fakelandia confidimus</NavbarBrand>
        <NavbarBrand href="https://github.com/ParisaTork">© Parisa Tork</NavbarBrand>
    </Navbar>
  )
}

export default NavFoot;
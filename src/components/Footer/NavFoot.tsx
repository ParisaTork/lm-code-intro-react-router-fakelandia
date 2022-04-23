import { Navbar, NavbarBrand } from "reactstrap";

const NavFoot = () => {
  return (
    <Navbar color="dark" expand="xl" id="navfoot">
        <NavbarBrand className="linkTextFooter" href="https://translate.google.co.uk/?sl=auto&tl=en&text=in%20fakelandia%20confidimus&op=translate">In Fakelandia confidimus</NavbarBrand>
        <NavbarBrand className="linkTextFooter" href="https://github.com/ParisaTork">© Parisa Tork</NavbarBrand>
    </Navbar>
  )
}

export default NavFoot;
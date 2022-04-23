import { Navbar, NavbarBrand } from "reactstrap";

const NavFoot = () => {
  return (
    <Navbar color="dark" expand="xl" id="navfoot">
        <NavbarBrand className="linkTextFooter" href="https://translate.google.co.uk/?sl=auto&tl=en&text=in%20fakelandia%20confidimus&op=translate" target="_blank">In Fakelandia confidimus</NavbarBrand>
        <NavbarBrand className="linkTextFooter" href="https://github.com/ParisaTork" target="_blank">© Parisa Tork</NavbarBrand>
    </Navbar>
  )
}

export default NavFoot;
import { Nav, Navbar, Container } from "react-bootstrap";

const NavFoot = () => {
  return (
    <Navbar color="dark" fixed="bottom" expand="xl" id="navfoot">
        <Container>
          <Nav.Link className="linkTextFooter" href="https://translate.google.co.uk/?sl=auto&tl=en&text=in%20fakelandia%20confidimus&op=translate" target="_blank">In Fakelandia confidimus</Nav.Link>
          <Nav.Link className="linkTextFooter" href="https://github.com/ParisaTork" target="_blank">© Parisa Tork</Nav.Link>
        </Container>
    </Navbar>
  )
}

export default NavFoot;
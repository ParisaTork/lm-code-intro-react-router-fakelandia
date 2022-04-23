import { NavLink } from "react-router-dom";
import { Container, Row, Col, Navbar, NavItem } from "reactstrap";

const NavSubHead = () => {
  return (
    <Navbar color="light">
      <Container>
        <Row>
        <Col className="col-6">
        <NavItem className="nav-item text-center">
            <NavLink className="linkTextNavSubHead" to='/misdemeanour'>Misdemeanours</NavLink>
        </NavItem>
        </Col>
        <Col className="col-6">
        <NavItem className="nav-item text-center">
            <NavLink className="linkTextNavSubHead" to='/confession'>Confess to Us</NavLink>
        </NavItem>
        </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavSubHead;
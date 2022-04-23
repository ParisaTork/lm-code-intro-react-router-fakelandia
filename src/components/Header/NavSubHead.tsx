import { NavLink } from "react-router-dom";
import { Container, Row, Col, Navbar, NavItem } from "reactstrap";

const NavSubHead = () => {
  return (
    <Navbar color="light">
      <Container>
        <Row>
        <Col sm={{
          offset: 3,
          size: 'auto'
        }}>
        <NavItem >
            <NavLink className="linkTextNavSubHead" to='/misdemeanour'>Misdemeanours</NavLink>
        </NavItem>
        </Col>
        <Col sm={{
          offset: 3,
          size: 'auto'
        }}>
        <NavItem>
            <NavLink className="text-center linkTextNavSubHead" to='/confession'>Confess to Us</NavLink>
        </NavItem>
        </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavSubHead;
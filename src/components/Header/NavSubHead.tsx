import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";

const NavSubHead = () => {
  return (
    <Navbar color="light">
        <NavItem>
            <NavLink className="linkTextNavSubHead" to='/misdemeanour'>Misdemeanours</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="linkTextNavSubHead" to='/confession'>Confess to Us</NavLink>
        </NavItem>
    </Navbar>
  )
}

export default NavSubHead;
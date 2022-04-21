import { NavLink } from "react-router-dom";

const Nav = () => (

<nav>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/misdemeanour'>Misdemeanours</NavLink></li>
        <li><NavLink to='/confession'>Confess to Us</NavLink></li>
    </ul>
</nav>
);

export default Nav;
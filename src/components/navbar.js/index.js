import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Nature Peinture</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            A propos
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projets
          </NavLink>
          <NavLink to="/media" activeStyle>
            Media
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

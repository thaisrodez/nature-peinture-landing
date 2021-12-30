import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 className="logo">Nature Peinture l'Agence</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Logo, MenuLink, Nav, Menu, Hamburger } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/mstfrs?tab=repositories" }}
        >
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

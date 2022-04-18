import { NavLink } from "react-router-dom";

import { Navbar, Button, NavDropdown } from "react-bootstrap";

import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <Navbar>
        <Navbar.Brand href="/">Coin Market Cap</Navbar.Brand>
        <NavDropdown>
          <NavDropdown.Item as={NavLink} to="/">
            Coin Index
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/favorites">
            My Favorites
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="logout">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  .nav {
    height: 10vh;
    width: 100%;
  }
`;

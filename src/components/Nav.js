import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { magic } from "../magic";

import { UserContext } from "../store/user-context";

import { Navbar, Button, NavDropdown } from "react-bootstrap";

export default function Nav() {
  const userData = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    magic.user.logout().then(() => {
      navigate("/login");
    });
  };

  return (
    <Navbar style={{ width: "100%", height: "10vh" }}>
      <Navbar.Brand href="/">Coin Market Cap</Navbar.Brand>
      {userData ? (
        <NavDropdown>
          <NavDropdown.Item as={NavLink} to="/">
            Coin Index
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/favorites">
            My Favorites
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <Button as={NavLink} to="/login">
          Login
        </Button>
      )}
    </Navbar>
  );
}

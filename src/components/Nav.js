import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { magic } from "../magic";

import { UserContext } from "../store/user-context";

import { Navbar, Button, NavDropdown } from "react-bootstrap";

export default function Nav(props) {
  const [userData] = useContext(UserContext);
  const { setIsUpdateCred } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    magic.user.logout().then(() => {
      navigate("/");
    });
  };

  const handleEditProfileClick = (event) => {
    event.preventDefault();
    setIsUpdateCred(true);
  };

  return (
    <Navbar style={{ width: "100%", height: "10vh" }}>
      <Navbar.Brand href="/index">Coin Market Cap</Navbar.Brand>
      {userData ? (
        <NavDropdown>
          <NavDropdown.Item as={Link} to="/index">
            Coin Index
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/index">
            My Favorites
          </NavDropdown.Item>
          <NavDropdown.Item onClick={handleEditProfileClick}>
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <Button as={Link} to="/">
          Login
        </Button>
      )}
    </Navbar>
  );
}

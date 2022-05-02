import { Outlet, Link } from "react-router-dom";

import { Card, Nav } from "react-bootstrap";
import styled from "styled-components";

export default function Login() {
  return (
    <StyledLogin>
      <Card style={{ width: "380px" }}>
        <Card.Header>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link as={Link} to="link">
                Magic Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="otp">
                Email OTP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="sms">
                Phone SMS
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Outlet />
      </Card>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

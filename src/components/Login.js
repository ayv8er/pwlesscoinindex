import { useState } from "react";
import { magic } from "../magic";

import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });
    } catch {
      setIsLoggingIn(false);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <StyledLogin>
      <Card style={{ width: "300px" }}>
        <Card.Header style={{ fontSize: "20px", textAlign: "center" }}>
          Please sign up or login
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email"
            onChange={handleChange}
            disabled={isLoggingIn}
          />{" "}
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>
          <Button
            style={{ width: "30%" }}
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            Send
          </Button>
        </Card.Footer>
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

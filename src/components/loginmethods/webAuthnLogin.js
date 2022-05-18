import { useState } from "react";
import { magic } from "../../magic";

import { Card, Button } from "react-bootstrap";

export default function LoginWithWebAuthn() {
  const [username, setUsername] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
    } catch (err) {}
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <p>Login with Yubikey or TouchID on your Chrome browser</p>
        <input
          name="username"
          required="required"
          placeholder="Enter your username"
          onChange={handleChange}
          value={username}
          disabled={isLoggingIn}
        />
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <Button onClick={handleLogin}>Register</Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </Card.Footer>
    </>
  );
}

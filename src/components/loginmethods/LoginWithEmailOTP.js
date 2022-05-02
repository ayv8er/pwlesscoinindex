import { useState } from "react";
import { magic } from "../../magic";
import { useNavigate } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

export default function LoginWithEmailOTP() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await magic.auth.loginWithEmailOTP({
        email: email,
      });
    } catch (err) {
      console.log(err);
    }
    setIsLoggingIn(false);
    setEmail("");
    navigate("/index");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <input
          type="text"
          name="email"
          value={email}
          required="required"
          placeholder="Send email for OTP"
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
    </>
  );
}

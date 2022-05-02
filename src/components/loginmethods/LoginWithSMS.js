import { useState } from "react";
import { magic } from "../../magic";
import { useNavigate } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

export default function LoginWithSMS() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoggingIn(true);

    let phoneNum = phoneNumber.trim();
    try {
      await magic.auth.loginWithSMS({
        phoneNumber: phoneNum,
      });
    } catch (err) {
      console.log(err);
    }
    setIsLoggingIn(false);
    setPhoneNumber("");
    navigate("/index");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <input
          type="text"
          name="Phone Number"
          required="required"
          value={phoneNumber}
          placeholder="Send number for SMS"
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

import { useState } from "react";
import { magic } from "../../magic";

import { Card, Button } from "react-bootstrap";

export default function LoginWithFacebook() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await magic.oauth.loginWithRedirect({
        provider: "facebook",
        redirectURI: `${window.location.origin}/callback`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        {isLoggingIn ? (
          <Button disabled="true">Logging in...</Button>
        ) : (
          <Button onClick={handleLogin}>Sign in with Facebook</Button>
        )}
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}></Card.Footer>
    </>
  );
}

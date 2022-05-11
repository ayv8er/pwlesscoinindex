import { useState } from "react";
import { magic } from "../../magic";

import { Card, Button } from "react-bootstrap";

export default function LoginWithGoogle() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await magic.oauth.loginWithRedirect({
        provider: "google",
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
          <Button onClick={handleLogin}>Sign in with Google</Button>
        )}
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}></Card.Footer>
    </>
  );
}

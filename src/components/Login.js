import { useCallback, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";

import { UserContext } from "../store/user-context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    user && user.issuer && navigate("/");
  }, [user, navigate]);

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

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  return (
    <div className="container">
      <h1>Please sign up or login</h1>
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter your email"
        onChange={handleInputOnChange}
        disabled={isLoggingIn}
      />
      <button onClick={handleLogin} disabled={isLoggingIn}>
        Send
      </button>
    </div>
  );
}

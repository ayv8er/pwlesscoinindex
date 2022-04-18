import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";
import Loading from "./Loading";

export default function Profile() {
  const [userMetadata, setUserMetadata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // On mount, we check if a user is logged in.
    // If so, we'll retrieve the authenticated user's profile.
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata);
      } else {
        // If no user is logged in, redirect to `/login`
        navigate("/login");
      }
    });
  }, []);

  /**
   * Perform logout action via Magic.
   */
  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      navigate("/login");
    });
  }, [navigate]);

  return userMetadata ? (
    <div className="container">
      <h1>Current user: {userMetadata.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <Loading />
  );
}

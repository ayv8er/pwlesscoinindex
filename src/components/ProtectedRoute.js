import { magic } from "../magic";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  magic.user.isLoggedIn().then((isUserLoggedIn) => {
    return isUserLoggedIn ? children : <Navigate to="/" />;
  });
}

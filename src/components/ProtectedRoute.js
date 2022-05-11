import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props, { children }) {
  const navigate = useNavigate();
  if (props.userMetaData === null) {
    navigate("/");
  } else {
    return children;
  }
}

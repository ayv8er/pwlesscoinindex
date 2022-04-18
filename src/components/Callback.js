import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";
import Loading from "./Loading";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    // On mount, we try to login with a Magic credential in the URL query.
    magic.auth.loginWithCredential().finally(() => {
      navigate("/");
    });
  }, []);

  return <Loading />;
}

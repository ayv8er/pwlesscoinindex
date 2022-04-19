import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";

import Loading from "./Loading";

import styled from "styled-components";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    magic.auth.loginWithCredential().finally(() => {
      navigate("/");
    });
  }, []);

  return (
    <StyledCallback>
      <Loading />;
    </StyledCallback>
  );
}

const StyledCallback = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

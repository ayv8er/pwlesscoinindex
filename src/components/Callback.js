import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";

import Loading from "./Loading";

import styled from "styled-components";

export default function Callback(props) {
  const { setUserMetadata } = props;
  const navigate = useNavigate();

  useEffect(() => {
    magic.oauth
      .getRedirectResult()
      .then((result) => {
        setUserMetadata(result.magic.userMetadata);
        navigate("/index");
      })
      .catch((err) => {
        navigate("/");
      });
  });

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

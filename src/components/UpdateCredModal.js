import ReactDOM from "react-dom";
import { useState } from "react";
import { magic } from "../magic";

import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

export default function UpdateCredModal(props) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const { setIsUpdateCred } = props;

  const handleClick = (event) => {
    event.preventDefault();
    setIsUpdateCred(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleUpdate = async () => {
    setIsLoggingIn(true);
    try {
      await magic.user.updateEmail({
        email,
      });
    } catch (err) {
      console.log(err);
    }
    setIsLoggingIn(false);
    setEmail("");
    setIsUpdateCred(false);
  };

  const Backdrop = () => {
    return <StyledBackdrop onClick={handleClick}></StyledBackdrop>;
  };

  const ModalOverlay = () => {
    return (
      <StyledModalOverlay>
        <Card style={{ width: "380px" }}>
          <Card.Header>Update Email Address</Card.Header>
          <Card.Body style={{ textAlign: "center" }}>
            <input
              type="text"
              name="email"
              required="required"
              value={email}
              placeholder="Enter email address"
              onChange={handleChange}
              disabled={isLoggingIn}
            />{" "}
          </Card.Body>
          <Card.Footer
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{ width: "25%", marginRight: "1%" }}
              onClick={handleClick}
              disabled={isLoggingIn}
            >
              Cancel
            </Button>
            <Button
              style={{ width: "25%" }}
              onClick={handleUpdate}
              disabled={isLoggingIn}
            >
              Update
            </Button>
          </Card.Footer>
        </Card>
      </StyledModalOverlay>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 30vh;
  left: 35%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

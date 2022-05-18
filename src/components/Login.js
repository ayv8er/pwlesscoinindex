import { Outlet, Link } from "react-router-dom";

import { Card, Nav } from "react-bootstrap";
import styled from "styled-components";

import twitter from "../assets/twitter.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.png";

export default function Login() {
  return (
    <StyledLogin>
      <Card className="card">
        <Card.Header>
          <Nav variant="pills" className="social">
            <Nav.Item>
              <Nav.Link as={Link} to="google">
                <img src={google} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="twitter">
                <img id="twitter" src={twitter} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="facebook">
                <img src={facebook} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="github" as={Link} to="github">
                <img src={github} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Header>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link as={Link} to="link">
                Magic Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="otp">
                Email OTP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="sms">
                Phone SMS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="webauthn">
                Web Authn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Outlet />
      </Card>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
  }
  .card {
    width: 500px;
  }
  .social {
    display: flex;
    justify-content: space-evenly;
  }
  #github {
    background: black;
  }
`;

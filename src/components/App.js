import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { magic } from "../magic";
import axios from "axios";

import Login from "./Login";
import CoinIndex from "./CoinIndex";
import ProtectedRoute from "./ProtectedRoute";
import Callback from "./Callback";
import LoginWithMagicLink from "./loginmethods/LoginWithMagicLink";
import LoginWithEmailOTP from "./loginmethods/LoginWithEmailOTP";
import LoginWithSMS from "./loginmethods/LoginWithSMS";
import LoginUnselected from "./loginmethods/LoginUnselected";
import LoginWithTwitter from "./loginmethods/twitterLogin";
import LoginWithGoogle from "./loginmethods/googleLogin";
import LoginWithFacebook from "./loginmethods/facebookLogin";
import LoginWithGithub from "./loginmethods/githubLogin";
import LoginWithWebAuthn from "./loginmethods/webAuthnLogin";

import { UserContext } from "../store/user-context";
import { CoinIndexContext } from "../store/coin-index-context";

import { Container } from "react-bootstrap";

export default function App() {
  const [coinIndex, setCoinIndex] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&price_change_percentage='1h%2C%2024h%2C%207d%2C%2030d%2C%201y'"
      )
      .then((res) => {
        setCoinIndex(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const magicIsLoggedIn = await magic.user.isLoggedIn();
        if (magicIsLoggedIn) {
          magic.user.getMetadata().then((userData) => {
            setIsLoggedIn(true);
            setUserMetadata(userData);
          });
        } else {
          setIsLoggedIn(false);
          setUserMetadata(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={[userMetadata, setUserMetadata]}>
      <CoinIndexContext.Provider value={coinIndex}>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<LoginUnselected />} />
              <Route path="*" element={<LoginUnselected />} />
              <Route path="link" element={<LoginWithMagicLink />} />
              <Route path="otp" element={<LoginWithEmailOTP />} />
              <Route path="sms" element={<LoginWithSMS />} />
              <Route path="twitter" element={<LoginWithTwitter />} />
              <Route path="google" element={<LoginWithGoogle />} />
              <Route path="facebook" element={<LoginWithFacebook />} />
              <Route path="github" element={<LoginWithGithub />} />
              <Route path="webauthn" element={<LoginWithWebAuthn />} />
            </Route>
            <Route path="index" element={<CoinIndex />} />
            <Route
              path="callback"
              element={<Callback setUserMetadata={setUserMetadata} />}
            />
          </Routes>
        </Container>
      </CoinIndexContext.Provider>
    </UserContext.Provider>
  );
}

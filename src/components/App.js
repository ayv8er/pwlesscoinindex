import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { magic } from "../magic";
import axios from "axios";

import Login from "./Login";
import Callback from "./Callback";
import CoinIndex from "./CoinIndex";

import { UserContext } from "../store/user-context";
import { CoinIndexContext } from "../store/coin-index-context";

import { Container } from "react-bootstrap";

export default function App() {
  const [coinIndex, setCoinIndex] = useState([]);
  const [userMetadata, setUserMetadata] = useState();
  const navigate = useNavigate();

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
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then((userData) => {
          setUserMetadata(userData);
        });
      } else {
        setUserMetadata(null);
        navigate("/login");
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[userMetadata, setUserMetadata]}>
      <CoinIndexContext.Provider value={coinIndex}>
        <Container fluid>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<CoinIndex />} />
          </Routes>
        </Container>
      </CoinIndexContext.Provider>
    </UserContext.Provider>
  );
}

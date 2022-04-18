import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { magic } from "../magic";
import axios from "axios";

import Login from "./Login";
import Callback from "./Callback";
import Profile from "./Profile";
import CoinIndex from "./CoinIndex";

import { UserContext } from "../store/user-context";

import styled from "styled-components";
import { Container } from "react-bootstrap";

export default function App() {
  const [coinIndex, setCoinIndex] = useState([]);
  const [user, setUser] = useState();

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
    setUser({ loading: true });
    magic.user
      .isLoggedIn()
      .then((isLoggedIntoMagic) =>
        isLoggedIntoMagic
          ? magic.user.getMetaData().then((userData) => setUser(userData))
          : setUser({ user: null })
      );
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <StyledApp>
        <Container fluid>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/" element={<CoinIndex coinIndex={coinIndex} />} />
          </Routes>
        </Container>
      </StyledApp>
    </UserContext.Provider>
  );
}

const StyledApp = styled.div``;

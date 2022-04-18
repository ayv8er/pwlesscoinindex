import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../magic";
import Loading from "./Loading";

import Coin from "./Coin";
import Nav from "./Nav";

import styled from "styled-components";

export default function CoinIndex(props) {
  const { coinIndex } = props;
  const [userMetadata, setUserMetadata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // On mount, we check if a user is logged in.
    // If so, we'll retrieve the authenticated user's profile.
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        console.log("here?");
        magic.user.getMetadata().then(setUserMetadata);
      } else {
        // If no user is logged in, redirect to `/login`
        console.log("or here?");
        navigate("/login");
      }
    });
  }, []);

  /**
   * Perform logout action via Magic.
   */
  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      navigate("/login");
    });
  }, [navigate]);

  const tableHeaders = [
    "#",
    "Name",
    "Price",
    "Market Cap",
    "Circulating Supply",
    "Total Supply",
  ];

  return userMetadata ? (
    <StyledCoinIndex>
      <Nav />
      <table className="table table-light table-hover table-striped">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coinIndex.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </StyledCoinIndex>
  ) : (
    <Loading />
  );
}

const StyledCoinIndex = styled.div``;

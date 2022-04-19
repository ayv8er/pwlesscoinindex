import { useContext } from "react";

import Coin from "./Coin";
import Nav from "./Nav";

import { CoinIndexContext } from "../store/coin-index-context";

import styled from "styled-components";
import { Table } from "react-bootstrap";

export default function CoinIndex() {
  const coinIndex = useContext(CoinIndexContext);

  const tableHeaders = [
    "#",
    "Name",
    "Price",
    "Market Cap",
    "Circulating Supply",
    "Total Supply",
  ];

  return (
    <StyledCoinIndex>
      <Nav />
      <Table striped bordered hover light>
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
      </Table>
    </StyledCoinIndex>
  );
}

const StyledCoinIndex = styled.div`
  height: 100vh;

  .table {
    height: 90vh;
    overflow-y: scroll;
  }
`;

import Coin from "./Coin";
import Nav from "./Nav";

import styled from "styled-components";

export default function CoinIndex(props) {
  const { coinIndex } = props;

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
  );
}

const StyledCoinIndex = styled.div``;

export default function Coin(props) {
  const { coin } = props;

  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        {coin.name}{" "}
        <span style={{ color: "grey" }}> {coin.symbol.toUpperCase()}</span>
      </td>
      <td>${coin.current_price.toFixed(2)}</td>
      <td>${coin.market_cap.toLocaleString()}</td>
      <td>{coin.circulating_supply.toLocaleString()}</td>
      <td>{coin.total_supply && coin.total_supply.toLocaleString()}</td>
    </tr>
  );
}

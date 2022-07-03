import './coinItem.css';

const CoinItem = ({ coin }) => {
  return (
    <div className="coin-row">
      <p className="info">{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img className="info" src={coin.image} alt={coin.name} />
        <p className="info">{coin.symbol.toUpperCase()}</p>
      </div>
      <p className="info">${coin.current_price.toLocaleString()}</p>
      {coin.price_change_percentage_24h < 0 ? (
        <p className="info red">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="info green">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}

      <p className="info hide-mobile">{coin.total_volume.toLocaleString()}</p>
      <p className="info hide-mobile">{coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;

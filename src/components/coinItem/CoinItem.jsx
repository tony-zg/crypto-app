import styles from './coinItem.module.scss';

const CoinItem = ({ coin }) => {
  return (
    <div className={styles.coin__row}>
      <p className={styles.info}>{coin.market_cap_rank}</p>
      <div className={styles.img__symbol}>
        <img className={styles.info} src={coin.image} alt={coin.name} />
        <p className={styles.info}>{coin.symbol.toUpperCase()}</p>
      </div>
      <p className={styles.info}>${coin.current_price.toLocaleString()}</p>
      {coin.price_change_percentage_24h < 0 ? (
        <p className={`${styles.info} ${styles.red}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className={`${styles.info} ${styles.green}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}

      <p className={`${styles.info} ${styles.hide__tablet}`}>
        {coin.total_volume.toLocaleString()}
      </p>
      <p className={`${styles.info} ${styles.hide__tablet}`}>
        {coin.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;

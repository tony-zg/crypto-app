import styles from './coins.module.scss';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Coin from '../../pages/Coin';
import CoinItem from '../coinItem/CoinItem';
import { CoinContext } from '../context/CoinContext';
import { FaSpinner } from 'react-icons/fa';
import Search from '../search/Search';
import debounce from 'lodash.debounce';

const Coins = () => {
  const { coins, pending, error, buttonClick } = useContext(CoinContext);
  const [search, setSearch] = useState('');

  let filteredCoins = coins;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Debounce changeHandler to 300ms wait time
  const debouncedChangeHandler = useMemo(() => debounce(handleChange, 300), []);

  // Stop the invocation of the debounced function after unmounting
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (search !== '') {
    filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className={styles.coins__container}>
      <div className={styles.search__wrapper}>
        <Search debouncedChangeHandler={debouncedChangeHandler} />
      </div>

      <div>
        <div className={styles.heading}>
          <p className={styles.title}>Coin</p>
          <p className={styles.title}>#</p>
          <p className={styles.title}>Price</p>
          <p className={styles.title}>24h</p>
          <p className={`${styles.title} ${styles.hide__tablet}`}>Volume</p>
          <p className={`${styles.title} ${styles.hide__tablet}`}>Market Cap</p>
        </div>
        <div className={styles.loader__wrapper}>
          {pending && (
            <span>
              <FaSpinner />
            </span>
          )}
        </div>

        {error && <div>{error}</div>}
        {coins &&
          filteredCoins.map((coin) => (
            <Link to={`/coins/${coin.id}`} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          ))}

        {pending ? (
          <div className={styles.loader__wrapper}>
            <span>
              <FaSpinner />
            </span>
          </div>
        ) : (
          <div className={styles.btn__wrapper}>
            <button className={styles.btn} onClick={buttonClick}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coins;

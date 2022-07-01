import './coins.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Coin from '../../pages/Coin';
import CoinItem from '../coinItem/CoinItem';
import { CoinContext } from '../context/CoinContext';

const Coins = () => {
  const [coins] = useContext(CoinContext);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p className="title">#</p>
          <p className="title">Coin</p>
          <p className="title">Price</p>
          <p className="title">24h</p>
          <p className="title hide-mobile">Volume</p>
          <p className="title hide-mobile">Market Cap</p>
        </div>

        {coins &&
          coins.map((coin) => (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Coins;

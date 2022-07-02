import './coin.css';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';
import useFetch from '../components/hooks/useFetch';
import { FaSpinner } from 'react-icons/fa';

const Coin = () => {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  const { data: coin, pending, error } = useFetch(url);
  console.log(coin);

  return (
    <div>
      <div className="coin-container">
        <div className="content content-one">
          {pending && (
            <span>
              <FaSpinner />
            </span>
          )}
          {error && <div>{error}</div>}
          <h1>{coin?.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              Rank #{coin?.market_cap_rank}
            </span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              {coin?.image ? <img src={coin?.image.small} alt="" /> : null}
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              <p>{coin?.name}</p>
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              {coin?.symbol ? <p>{coin?.symbol.toUpperCase()}/AUD</p> : null}
            </div>
            <div className="coin-price">
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data?.current_price.aud.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {pending && <FaSpinner />}
                  {error && <div>{error}</div>}
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.aud.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                <h4>Circulating Supply</h4>
                {coin?.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            <div className="about-loader">
              {pending && (
                <div>
                  <FaSpinner />
                </div>
              )}
            </div>

            {error && <div>{error}</div>}
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin?.description ? coin.description.en : ''
                )
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;

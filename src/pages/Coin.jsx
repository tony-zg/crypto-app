import styles from './coin.module.scss';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';
import useFetch from '../components/hooks/useFetch';
import { FaSpinner } from 'react-icons/fa';

const Coin = () => {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  const { data: coin, pending, error } = useFetch(url);

  return (
    <div>
      <div className={styles.coin__container}>
        <div className={`${styles.content} ${styles.text__center}`}>
          {pending && (
            <span>
              <FaSpinner />
            </span>
          )}
          {error && <div>{error}</div>}
          <h1>{coin?.name}</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.rank}>
            <span className={styles.rank__btn}>
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              Rank #{coin?.market_cap_rank}
            </span>
          </div>
          <div className={styles.info}>
            <div className={styles.coin__heading}>
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
            <div className={styles.coin__price}>
              {pending && <FaSpinner />}
              {error && <div>{error}</div>}
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data?.current_price.aud.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.content}>
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
        <div className={styles.content}>
          <div className={styles.stats}>
            <div className={styles.left}>
              <div className={styles.row}>
                <h4>24 Hour Low</h4>
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className={styles.row}>
                <h4>24 Hour High</h4>
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.row}>
                {pending && <FaSpinner />}
                {error && <div>{error}</div>}
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className={styles.row}>
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

        <div className={styles.content}>
          <div className={styles.about}>
            <h3>About</h3>
            <div className={styles.about__loader}>
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

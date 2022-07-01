import { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=30&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CoinContext.Provider value={[coins, setCoins]}>
      {children}
    </CoinContext.Provider>
  );
};

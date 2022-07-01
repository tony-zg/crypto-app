import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=30&page=1&sparkline=false';
  const { data: coins, pending, error } = useFetch(url);

  return (
    <CoinContext.Provider value={{ coins, pending, error }}>
      {children}
    </CoinContext.Provider>
  );
};

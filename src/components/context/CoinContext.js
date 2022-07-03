import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [page, setPage] = useState(30);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`;

  const buttonClick = () => {
    setPage((page) => page + 30);
  };

  const { data: coins, pending, error } = useFetch(url);

  return (
    <CoinContext.Provider value={{ coins, pending, error, buttonClick }}>
      {children}
    </CoinContext.Provider>
  );
};

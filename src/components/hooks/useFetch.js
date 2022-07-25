import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const response = await axios.get(url);
        response && setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setPending(false);
      }
    })();
  }, [url]);

  return { data, pending, error };
};

export default useFetch;

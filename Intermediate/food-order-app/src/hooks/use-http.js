import { useState } from 'react';

import { useCallback } from 'react';

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (httpConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig : 'GET',
        body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
        headers: httpConfig.headers ? httpConfig.headers : {},
      });
      const data = await res.json();
      applyData(data);

      if (!res.ok) {
        throw new Error('Request failed 💣');
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    sendRequest,
    error,
    isLoading,
  };
};

export default useHttp;

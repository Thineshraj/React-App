import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (httpConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig.method : 'GET',
        body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
        headers: httpConfig.headers ? httpConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

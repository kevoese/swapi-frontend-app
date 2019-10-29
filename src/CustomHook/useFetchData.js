import { useState, useEffect } from 'react';
import { axiosCall } from '../utils';

const useFetchData = (url, formatData = null) => {
  const [data, setData] = useState(formatData ? [{}, {}, {}] : null);

  useEffect(() => {
    (async () => {
      const content = await axiosCall({
        url,
      });
       setData(content);
    })();
  }, [url]);

  return formatData && data && data.results ? formatData(data) : data;
};

export default useFetchData;

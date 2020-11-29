import { useState, useEffect } from 'react';
import axios from 'axios';

const useStats = ({ url, resource, format }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${url}/${resource}?format=${format}`)
      .then((res) => {
        console.log(res.data);
        setStats(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error fetching stats')
      })
  }, []);

  return [stats, isLoading];
};

export default useStats;
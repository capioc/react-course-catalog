import { useState, useEffect } from 'react';
import axios from 'axios';

const useCourses = ({ url, resource, format, page, limit }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const _page = page ? `&_page=${page}` : '';
    const _limit = limit ? `&_limit=${limit}` : '';
    axios.get(`${url}/${resource}?format=${format}${_page}${_limit}`)
      .then((res) => {
        
        console.log(res.headers)
        if (res.headers.link) console.log(res.headers)
        setCourses(res.data);
        setIsLoading(false);
      })
      .then((data) => {
       
      });
  }, [url, resource, format, page, limit]);

  return [courses, isLoading];
};

export default useCourses;
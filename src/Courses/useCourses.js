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
        setCourses(
          res.data
             .map((course,index) => ({...course, key:index }))
        ); // add key prop for correct rendering into a list
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('couldn\'t fetch courses')
      });
  }, [url, resource, format, page, limit]);

  return [courses, isLoading];
};

export default useCourses;
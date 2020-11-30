import { useState, useEffect } from 'react';
import axios from 'axios';

const useCourse = ({ url, resource, id }) => {
    const [course, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchInstructor = async (id) => {
        const endpoint = `http://localhost:3001/instructors/${id}`;
        const res = await axios.get(endpoint);
        return res.data;
    }

    useEffect(() => {
        const endpoint = `${url}/${resource}/${id}`;
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(endpoint);
                const instructorsPromises = await res.data.instructors
                    .map((id) => {
                        return fetchInstructor(id);
                    })
                const instructors = await Promise.all(instructorsPromises)
                console.log(instructors)
                setCourse( {...res.data, instructors });
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
                console.log('success',course)
            }
        }

        fetchData();
    }, [url, resource, id]);

    return [course, isLoading, error];
};

export default useCourse;
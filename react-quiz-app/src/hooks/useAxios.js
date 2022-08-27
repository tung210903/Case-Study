import React, { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = "https://opentdb.com/"

const useAxios = ({ url }) => {
    const [respone, setRespone] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = () =>{
            axios 
            .get(url)
            .then(res => setRespone(res.data))
            .catch(err =>setError(err))
            .finally(()=>setLoading(false))
        }
        fetchData();
    }, [url])
    return { respone, error, loading }
}

export default useAxios
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error("Axios error:", err);
        setError(err.response?.data?.message || "Error fetching data");
        setData(null);
      }
    };
    
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;

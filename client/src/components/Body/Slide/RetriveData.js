import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios'

const RetriveData = () => {

    const [data, setData] = useState([]);
  // const [dataLoading, setDataLoading] = useState(false);

  const loadData = async () => {
       const response = await axios.get("http://localhost:5000/api/get");
       setData(response.data);
       
  };

  useEffect(() => {
       loadData();
  }, []);

  return (
    <div>RetriveData</div>
  )
}

export default RetriveData
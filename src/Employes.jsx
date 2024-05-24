/*import { useEffect, useState } from "react";
import List from "./List"
import React from 'react'
import axios from "axios"

function Employes() {
  const [data,setData]=useState([]);
    useEffect(() => {
        const getData = () =>{
          /*  fetch('http://employee-api.runasp.net/api/Employee/list')
           .then(response => response.json())//bize dönen değerleri tutmak için
           .then(data => console.log(data.results))
           .catch(error => console.log(error))//dönen hatalar geliyor*//*
           axios.get('http://employee-api.runasp.net/api/Employee/list')
           .then(response => setData(response.data))
        }
        getData();
    },[])

  return (
    <div>
      <List data={data}/>
    </div>
  )
}

export default Employes
*/
import React, { useState } from 'react';
import List from './List';
import axios from 'axios';

function Employes() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleGetData = () => {
    axios.get('http://employee-api.runasp.net/api/Employee/list')
      .then(response => {
        setData(response.data);
        setError(null); // Eğer başarılı olursa, hatayı temizler
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
        setError(error.message || 'Something went wrong');
      });
  };

  return (
    <div>
      <button onClick={handleGetData} className='bg-gray-600 px-4 py-2 rounded-lg text-lg text-white'>Get Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <List data={data} />
    </div>
  );
}

export default Employes;
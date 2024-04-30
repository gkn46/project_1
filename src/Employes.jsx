import { useEffect, useState } from "react";
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
           .catch(error => console.log(error))//dönen hatalar geliyor*/
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
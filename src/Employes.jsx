import { useEffect, useState } from "react";
import List from "./List"
import React from 'react'

function Employes() {
  const [data,setData]=useState([]);
    useEffect(() => {
        const getData = () =>{
            fetch('http://employee-api.runasp.net/api/Employee/list')
           .then(response => response.json())//bize dönen değerleri tutmak için
           .then(data => console.log(data.results))
           .catch(error=> console.log(error))//dönen hatalar geliyor
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
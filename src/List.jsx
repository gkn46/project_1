import React from 'react'

const List=(props)=>{
    let {data} = props;
  return (
    <>
    <div>
      {
      data && data.map((item, index) => (
        <div key={index} className='container'>
          <h3>{item.name}</h3>
          <h3>{item.surname}</h3>
          <h3>{item.department}</h3>
          <h3>{item.isReferance}</h3>
          <h3>{item.joiningDate}</h3>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default List
import React from 'react'

const List=(props)=>{
    let {data} = props;
  return (
    <>
    <div className='w-400 h-400 my-8'>
      {
      data && data.map((item, index) => (
        <div key={index} >
          <h3>isim: {item.name}</h3>
          <h3>soy isim: {item.surname}</h3>
          <h3>departman: {item.department}</h3>
          <h3>referans: {item.isReferance}</h3>
          <h3>tarih: {item.joiningDate}</h3>
          <br />
          <hr />
        </div>
      ))
    }
    </div>
    </>
  )
}

export default List
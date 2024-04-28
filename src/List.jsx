import React from 'react'

function List(props) {
    let {data} = props;
    console.log(data,"datalar");
  return (
    <div>
      {
      data && data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
        </div>
      ))
    }
    </div>
  )
}

export default List
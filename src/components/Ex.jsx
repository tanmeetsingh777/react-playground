import React from 'react'

const Ex = (props) => {
  console.log(props);
  return (
    <div>
      <h1>this is a example component {props.name}</h1>
    </div>
  )
}

export default Ex

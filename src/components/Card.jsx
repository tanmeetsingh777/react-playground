import React from 'react'

const Card = (props) => {
  return (
    <div className='text-2xl bg-white text-black inline-block p-6 text-center rounded m-6'>
      <h2>{props.user} {props.age}</h2>
      <h2 className='text-l'>{props.city}</h2>
      <button>Add friend</button>
    </div>
  )
}

export default Card

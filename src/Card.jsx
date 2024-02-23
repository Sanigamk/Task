import React from 'react'

export const Card = (props) => {
  return (
    <div className={`flex flex-wrap flex-col w-36 p-4 mt-7 text-center ${props.cls }`}>
        <div ><img src={props.img}  className='h-20 w-20 m-auto rounded-[50%] '/></div>
        <div className='font-bold'>{props.name}</div>
        <div className='text-10px'>{props.job}</div>
    </div>
  )
}

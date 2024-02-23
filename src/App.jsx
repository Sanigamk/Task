import React from 'react'
import './App.css'
import { Card } from './Card'
import img from './a.jpg'


export const App = () => {
  return (
    

<div className='flex flex-wrap gap-5 w-[50%] m-auto'>
    <Card img={img} name='adam john' job='developer' cls='bg-slate-400 '></Card>
    <Card img={img} name='niranjan' job='developer' ></Card>
    <Card img={img} name='saniga' job='developer' cls='bg-slate-400' ></Card>
    <Card img={img} name='varna' job='developer'></Card>
    <Card img={img} name='rihala' job='developer' cls='bg-slate-400'></Card>
    <Card img={img} name='narshina' job='developer'></Card>
</div>

  )
}

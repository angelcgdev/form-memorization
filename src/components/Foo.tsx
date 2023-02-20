import React, { useRef, useState } from 'react'

interface Props{
    name: string
}
export const Foo = ({ name }: Props)=>{
    console.log(name);
  const renderCounter = useRef<number>(0);
  renderCounter.current = renderCounter.current+1;
  return (
    <div className='p-8 bg-white rounded-lg text-center'>
        <p> name user is { name }</p>
        <p>render {renderCounter.current}</p>
    </div>
  )
}

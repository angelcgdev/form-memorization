import React, { memo, useRef, useState } from 'react'

interface Props{
    name: string;
    reset: ()=>void;
}
const Foo = ({ name, reset }: Props)=>{
    // console.log(name);
  const renderCounter = useRef<number>(0);
  renderCounter.current = renderCounter.current+1;
  return (
    <div className='p-8 bg-white rounded-lg text-center'>
        <p> name user is { name }</p>
        <p>render {renderCounter.current}</p>
        <button
          className='shadow bg-slate-800 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          onClick={reset}
        >
          Reset
        </button>
    </div>
  )
}

export const FooMemorized = memo(Foo)

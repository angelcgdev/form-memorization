import React, { useRef } from 'react'

interface Props{
     address: string;
}
export const SecondFoo = ({ address }: Props) => {
    const renderCounter = useRef<number>(0);
    renderCounter.current = renderCounter.current+1;
  return (
    <div className='p-8 bg-white rounded-lg text-center'>
        <p>user address is {address}</p>
        <p>render {renderCounter.current}</p>
    </div>
  )
}

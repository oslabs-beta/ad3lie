import React from 'react';

type HelloWorldProps = {
  title: string;
  id?: string;
}

export default (props: HelloWorldProps) => {
  return (
    <div className='text-emerald-600'>
      <h1>{props.title}</h1>
    </div>
  )
}
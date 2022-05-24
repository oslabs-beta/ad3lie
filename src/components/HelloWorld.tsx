import React from 'react';

type HelloWorldProps = {
  title: string;
}

export default ({ title }: HelloWorldProps) => {
  return <h1>{title}</h1>
}
import React from 'react';
import { Link } from 'react-router-dom'

type props = string;

export default function NavBar () {
  return(
  <div className='col-start-1 col-span-1 border-2 rounded'>
    <Link to="/bar-chart" className='border-2 rounded m-2'>Bar Chart</Link>
    <Link to="/line-chart" className='border-2 rounded m-2'>Line Chart</Link>
  </div>)
}
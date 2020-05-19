//title - link to main
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header(props){
  return (
    <header>
      <h1 className='title'><Link to='/'>Noteful</Link></h1>
    </header>
  )
}
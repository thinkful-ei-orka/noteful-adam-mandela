//child - Folder Button
//toggled addfolder and go back button
/*
import React from 'react';
import {NavLink} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import './NavBar.css'

export default function NavBar(props){
  console.log(props)
  return (
    props.view!=='note'?
      <nav className='navbar'>
        <h3 className='listtitle'>Folders</h3>
        {props.folders.map(folder=> {
          return (
            <NavLink to={`/folder/${folder.id}`}><button className='folderbutton'>{`${folder.name}`}</button></NavLink>
          )
        })}
        <button type='button' className='addfolder'>+Add Folder</button>
      </nav>
      :
      <nav className='navbar'>
        <button type='button' className='goback' onClick={props.history.goBack()}>Go Back</button>
      </nav>
  )
}
*/
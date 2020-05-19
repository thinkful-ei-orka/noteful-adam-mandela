//use noteDisplay for all notes (no filtering)
// dummy add note button
import React from 'react';
import NoteDisplay from './NoteDisplay';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

export default function MainPath(props){
  return(
    <div className='viewcontainer'>
      <nav className='navbar'>
        <h3 className='listtitle'>Folders</h3>
        {props.folders.map((folder,i)=> {
          return (
            <NavLink key={`folderlink${i}`} to={`/folder/${folder.id}`}><button className='folderbutton'>{`${folder.name}`}</button></NavLink>
          )
        })}
        <button type='button' className='addfolder'>+Add Folder</button>
      </nav>
      <main className='viewport'>
        {props.notes.map((note,i)=>{
          return (
            <NoteDisplay 
              note={note}
              toNote={props.toNote}
              toMain={props.toMain}
              setNote={props.setNote}
              key={`Note${i}`}
            />
          )
        })}
        <button type='button' className='newnotebutton'>+Add Note</button>
      </main>
    </div>
  )
}
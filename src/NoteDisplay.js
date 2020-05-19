//display for each individual note
//Name, date modified, delete button
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import './NoteDisplay.css';

export default function NoteDisplay(props){
  return (
      <section className='notelisting'>
        <Link to={`/note/${props.note.id}`}><h2 className='notetitle'>{props.note.name}</h2></Link>
        <section className='notelistingcontents'>
          <p>
            Date modified: {new Date(props.note.modified).toDateString()}
          </p>
          <button type='button' className='deletebutton'>Delete Note</button>
        </section>
      </section>
  )
}
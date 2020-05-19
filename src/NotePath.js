//Nav attached (use notedisplay)
//note name,modified info, delete button, note contents
import React from 'react';
import NoteDisplay from './NoteDisplay';

export default function NotePath(props){
  return (
    <div className='viewcontainer'>
      <nav className='navbar'>
        <button type='button' className='goback' onClick={props.history.goBack}>Go Back</button>
        <h4 className='foldername'>{props.folders.find(folder=>folder.id===props.note.folderId).name}</h4>
      </nav>
      <main className='viewport'>
        <NoteDisplay
          note={props.note}
        />
        <p className='notecontent'>
          {props.note.content}
        </p>
      </main>
    </div>
  )
}
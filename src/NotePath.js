//Nav attached (use notedisplay)
//note name,modified info, delete button, note contents
import React from 'react';
import NoteDisplay from './NoteDisplay';
import ApiContext from './ApiContext';

export default class NotePath extends React.Component{
  render(){
    return (
      <ApiContext.Consumer>
        {({notes=[], folders=[]})=>(
          <div className='viewcontainer'>
            <nav className='navbar'>
              <button type='button' className='goback' onClick={this.props.history.goBack}>Go Back</button>
              <h4 className='foldername'>{folders.find(folder=>folder.id===notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0]).folderId).name}</h4>
            </nav>
            <main className='viewport'>
              <NoteDisplay
                note={notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0])}
              />
              <p className='notecontent'>
                {notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0]).content}
              </p>
            </main>
          </div>
        )}
      </ApiContext.Consumer>
    )
  }
}
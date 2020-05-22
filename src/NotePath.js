//Nav attached (use notedisplay)
//note name,modified info, delete button, note contents
import React from 'react';
import NoteDisplay from './NoteDisplay';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

export default class NotePath extends React.Component{
  render(){
    console.log(this.props.noteid)
    return (
      <ErrorPage>
        <ApiContext.Consumer>
          {({notes=[], folders=[]})=>(
            <div className='viewcontainer'>
              <nav className='navbar'>
                <button type='button' className='goback' onClick={this.props.history.goBack}>Go Back</button>
                <h4 className='foldername'>{folders.find(folder=>folder.id===notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0]).folderId).name}</h4>
              </nav>
              <main className='viewport'>
                <NoteDisplay
                  history={this.props.history}
                  key={notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0]).name}
                  note={notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0])}
                />
                <p className='notecontent'>
                  {notes.find(note=>note.id===this.props.history.location.pathname.split('/').reverse()[0]).content}
                </p>
              </main>
            </div>
          )}
        </ApiContext.Consumer>
      </ErrorPage>
    )
  }
}

NotePath.propTypes={
  history:PropTypes.object.isRequired,
  noteid:PropTypes.string.isRequired
}
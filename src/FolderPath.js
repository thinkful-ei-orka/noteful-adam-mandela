//highlighted navbar for current option
//display notes in that folder
//uses NoteDisplay**
//add note button -> new note (dummy)

/*

*/
import React from 'react';
import NoteDisplay from './NoteDisplay';
import {NavLink} from 'react-router-dom';
import ApiContext from './ApiContext';
import './NavBar.css';

export default class FolderPath extends React.Component{
  render(){
    return (
      <ApiContext.Consumer>
        {({notes=[], folders=[]})=>(
          <div className='viewcontainer'>
            <nav className='navbar'>
              <h3 className='listtitle'>Folders</h3>
              {folders.map((folder,i)=> {
                return (
                  <NavLink key={`folderlink${i}`} to={`/folder/${folder.id}`} activeClassName='active'><button className='folderbutton'>{`${folder.name}`}</button></NavLink>
                )
              })}
              <button type='button' className='addfolder'>+Add Folder</button>
            </nav>
            <main className='viewport'>
              {notes.filter(note=>note.folderId===this.props.history.location.pathname.split('/').reverse()[0]).map((note,i)=>{
                return (
                  <NoteDisplay 
                    key={`note${i}`}
                    note={note}
                    toNote={this.props.toNote}
                    toMain={this.props.toMain}
                    setNote={this.props.setNote}
                  />
                )
              })}
              <button type='button' className='newnotebutton'>+Add Note</button>
            </main>
          </div>
        )}
      </ApiContext.Consumer>          
  )}
}
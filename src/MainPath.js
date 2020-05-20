//use noteDisplay for all notes (no filtering)
// dummy add note button
import React from 'react';
import NoteDisplay from './NoteDisplay';
import {NavLink} from 'react-router-dom';
import ApiContext from './ApiContext';
import './NavBar.css';

export default class MainPath extends React.Component {
  static contextType=ApiContext;
  render(){
    return(
      <ApiContext.Consumer>
        {({notes=[], folders=[]})=>(
        <div className='viewcontainer'>
          <nav className='navbar'>
            <h3 className='listtitle'>Folders</h3>
            {folders.map((folder,i)=> {
              return (
                <NavLink key={`folderlink${i}`} to={`/folder/${folder.id}`}><button className='folderbutton'>{`${folder.name}`}</button></NavLink>
              )
            })}
            <button type='button' className='addfolder'>+Add Folder</button>
          </nav>
          <main className='viewport'>
            {notes.map((note)=>{
              return (
                <NoteDisplay 
                  history={this.props.history}
                  note={note}
                  key={`${note.name}`}
                />
              )
            })}
            <button type='button' className='newnotebutton'>+Add Note</button>
          </main>
        </div>
        )}
    </ApiContext.Consumer>
  )
}}
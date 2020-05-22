//highlighted navbar for current option
//display notes in that folder
//uses NoteDisplay**
//add note button -> new note (dummy)

import React from 'react';
import NoteDisplay from './NoteDisplay';
import {Link, NavLink} from 'react-router-dom';
import ApiContext from './ApiContext';
import './NavBar.css';
import PropTypes from 'prop-types';

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
              <Link to='/newfolder/'><button type='button' className='addfolder'>+Add Folder</button></Link>
            </nav>
            <main className='viewport'>
              {notes.filter(note=>note.folderId===this.props.history.location.pathname.split('/').reverse()[0]).map((note)=>{
                return (
                  <NoteDisplay 
                    history={this.props.history}
                    key={`${note.name}`}
                    note={note}
                  />
                )
              })}
              <Link to='/newnote'><button type='button' className='newnotebutton'>+Add Note</button></Link>
            </main>
          </div>
        )}
      </ApiContext.Consumer>          
  )}
}

FolderPath.propTypes={
  history:PropTypes.object.isRequired
}
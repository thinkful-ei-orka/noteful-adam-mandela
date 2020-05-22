//use noteDisplay for all notes (no filtering)
// dummy add note button
import React from 'react';
import NoteDisplay from './NoteDisplay';
import {Link, NavLink} from 'react-router-dom';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';
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
            <Link to='/newfolder/'><button type='button' className='addfolder'>+Add Folder</button></Link>
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
            <Link to='/newnote'><button type='button' className='newnotebutton'>+Add Note</button></Link>
          </main>
        </div>
        )}
    </ApiContext.Consumer>
    )
  } 
}

MainPath.propTypes={
  history:PropTypes.object.isRequired
}
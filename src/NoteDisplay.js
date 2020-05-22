//display for each individual note
//Name, date modified, delete button
import React from 'react';
import {Link} from 'react-router-dom';
import ApiContext from './ApiContext';
//import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';
import './NoteDisplay.css';

export default class NoteDisplay extends React.Component{
  noteid=this.props.note.id
  render(){
    return (
      <ApiContext.Consumer>
        {({deleteNote=[]})=>(
        <section className='notelisting'>
          <Link to={`/note/${this.props.note.id}`}><h2 className='notetitle'>{this.props.note.name}</h2></Link>
          <section className='notelistingcontents'>
            <p>
              Date modified: {new Date(this.props.note.modified).toDateString()}
            </p>
            <Link to={this.props.history.location.pathname.includes('note')?'/':this.props.history.location.pathname}><button type='button' className='deletebutton' id={this.noteid} onClick={((e)=>deleteNote(this.noteid,this.props.history.location.pathname,this.props.history))}>Delete Note</button></Link>
          </section>
        </section>
        )}
      </ApiContext.Consumer>
    )
  }
}

NoteDisplay.propTypes={
  history:PropTypes.object.isRequired,
  note:PropTypes.object.isRequired
}